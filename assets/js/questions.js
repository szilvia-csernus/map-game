import {
    data
} from '../data/countries.js';

import {
    addFeedbackLayer,
    removeFeedbackLayer,
    clickedCountryCode
} from './layers.js';

import { isMobile } from './game.js';
import timeOutFunction from './timeout.js';

let score = 0;

// this function gets fired in the 'addFeedback' when user chooses the right answer.
const increaseScore = () => ++score;

export const initializeScore = () => score = 0;

const addFeedback = (map, countryCode, increaseScore, region, callback) => {
    const correct = countryCode === clickedCountryCode ? true : false;
    addFeedbackLayer(map, correct, countryCode, region, callback);
    if (correct) {
        increaseScore();
        $('#checkmarks').append('<li ><svg class="correct"><use href="./assets/icons/correct.svg#icon"></use></svg></li>')
    } else {
        $('#checkmarks').append('<li ><svg class="incorrect"><use href="./assets/icons/incorrect.svg#icon"></use></svg></li>')
    }
}

const setClickSelectEventListeners = (map, countryCode, increaseScore, callback, region) => {

    const setDblClickFeedbackLayer = () => {
        removeFeedbackLayer(map);
        addFeedback(map, countryCode, increaseScore, region, callback);
        
        // cleans up event listener after it's been initiated
        return map.off('dblclick', setDblClickFeedbackLayer);
    }

    map.on('dblclick', setDblClickFeedbackLayer)
}

const setTouchSelectEventListeners = (map, countryCode, increaseScore, callback, region) => {
    const setTapHoldFeedbackLayer = () => {
        removeFeedbackLayer(map);
        addFeedback(map, countryCode, increaseScore, region, callback)
        
        // The callback function calls the next question recursively. (See askQuestions function)
        callback();

    }
    const touchStartFunction = (startEvent) => {
        const moreFingersTouch = (startEvent.originalEvent.touches.length > 1);

        const startX = startEvent.point.x
        const startY = startEvent.point.y;

        const touchEndFunction = (endEvent) => {
            const endX = endEvent.point.x
            const endY = endEvent.point.y;

            // the distance btw the start and end of the touch action
            const distance = ((endX - startX) ** 2 + (startY - endY) ** 2) ** (1 / 2)

            // if tap was not rather a swipe..
            if (distance < 4) {
                // if user's tap is longer than 200ms
                if ((endEvent.originalEvent.timeStamp - startEvent.originalEvent.timeStamp) > 200) {
                    console.log('taphold', clickedCountryCode)

                    // we have to stop 'touchend' function before stepping into the recursive callback function!
                    map.off('touchend', touchEndFunction);

                    // remember that this calls a recursive function!!
                    setTapHoldFeedbackLayer();

                } else {
                    console.log('tap', clickedCountryCode)
                    removeFeedbackLayer(map)
                    map.off('touchend', touchEndFunction);
                    map.once('touchstart', touchStartFunction)
                }
            } else {
                map.off('touchend', touchEndFunction);
                map.once('touchstart', touchStartFunction)
            }
        }
        
        if (!moreFingersTouch) {
            // if the touch was with one finger only
            map.on('touchend', touchEndFunction);
        } else {
            // if touch was with more fingers, start the touch listening again
            map.once('touchend', () => map.once('touchstart', touchStartFunction));
        }
    }
    map.once('touchstart', touchStartFunction)
}

/** remove previously clicked country's layers and add updated event listeners */
const setSelectEventListeners = (map, countryCode, increaseScore, callback, region) => {
    removeFeedbackLayer(map);
    if (!isMobile) {
        setClickSelectEventListeners(map, countryCode, increaseScore, callback, region)
    } else {
        setTouchSelectEventListeners(map, countryCode, increaseScore, callback, region)
    }
}

/** generate unique indecies from the countries array and 
 * return an array with the given number of country codes.*/
const getRandomCountryCodes = (countries, num) => {
    let codes = [];
    let randomCountryCodeIndex;
    while (codes.length < num) {
        randomCountryCodeIndex = Math.floor(Math.random() * countries.length);
        !codes.includes(countries[randomCountryCodeIndex]) && codes.push(countries[randomCountryCodeIndex])
    }
    return codes
}

export const getQuestions = (region, num) => {
    const allCodesInRegion = Object.keys(data[region]);

    const randomCodes = getRandomCountryCodes(allCodesInRegion, num);

    const questions = [];
    for (const code of randomCodes) {
        const country = data[region][code]
        questions.push([code, country])
    }
    console.log(questions)
    return questions;
}

const oneQuestion = (map, code, country, region, callback) => {

    $('#countryLabel').remove();
    $('body').append(`<div id="countryLabel" class="country country${region}">${country}</div>`);
    // setTimeout(() => {
        // remove previous question's feedbacks
        removeFeedbackLayer(map);
        setSelectEventListeners(map, code, increaseScore, callback, region)
    // }, 3000)
}

// export this timeOutFunction instance so that it can be cleared in exit.js
export const timeOutForShowScore = new timeOutFunction()


/**  this recursive code asks the last question in the questions array and in oneQuestion() function it re-sets
 * the event listener to the next question after a dblclick / taphold event. */
export const askQuestions = (map, region, questions, num, showScore) => {
    if (questions.length === 0) {
        return timeOutForShowScore.setTimeOutFunction(() => showScore(map, score, region, num), 4000)
    };

    const question = questions.pop()
    oneQuestion(map, question[0], question[1], region, () => {
        askQuestions(map, region, questions, num, showScore)
    })
}