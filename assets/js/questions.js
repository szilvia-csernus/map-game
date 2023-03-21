import {
    data
} from '../data/countries-with-continent.js';

import {
    addFeedbackLayer,
    removeFeedbackLayer,
    clickedCountryCode,
    clickEventHandler,
    initializeClickedCountryCode
} from './layers.js';

import { isMobile } from './game.js';
import TimeOut from './timeout.js';

let score = 0;

// this function gets fired in the 'addFeedback' when user chooses the right answer.
const increaseScore = () => ++score;

export const initializeScore = () => score = 0;

const addFeedback = (map, countryCode, increaseScore, callback) => {
    const correct = countryCode === clickedCountryCode ? true : false;
    addFeedbackLayer(map, correct, countryCode, callback);
    if (correct) {
        increaseScore();
        $('#checkmarks').append('<li ><svg class="correct"><use href="./assets/icons/correct.svg#icon"></use></svg></li>');
    } else {
        $('#checkmarks').append('<li ><svg class="incorrect"><use href="./assets/icons/incorrect.svg#icon"></use></svg></li>');
    }
};

export let setDblClickFeedbackLayer = () => {};

const setClickSelectEventListeners = (map, countryCode, increaseScore, callback) => {

    setDblClickFeedbackLayer = (event) => {
        
        clickEventHandler(event);

        // if clicked item has no id then we just ignore it.
        console.log(event);
        console.log(clickedCountryCode);

        if (clickedCountryCode) {
            map.off('dblclick', 'country-hover', setDblClickFeedbackLayer);
            removeFeedbackLayer(map);
            addFeedback(map, countryCode, increaseScore, callback);
        }
        
    };
    map.on('dblclick', 'country-hover', setDblClickFeedbackLayer);
};

export let touchStartFunction = () => {};
export let touchEndFunction = () => {};

const setTouchSelectEventListeners = (map, countryCode, increaseScore, callback) => {
    const setTapHoldFeedbackLayer = () => {
       
        removeFeedbackLayer(map);
        addFeedback(map, countryCode, increaseScore, callback);
    };

    let startX, startY, startTime, endX, endY, endTime;

    touchEndFunction = (endEvent) => {
        console.log('end event', endEvent);
        // if touch started with one finger but continued with more, reset listening
        if (endEvent.originalEvent.touches.length > 1) {
            map.off('touchstart', 'country-touch', touchStartFunction);
            map.off('touchend', 'country-touch', touchEndFunction);
            map.on('touchstart', 'country-touch', touchStartFunction);
            return;
        }
        
        endX = endEvent.point.x;
        endY = endEvent.point.y;
        endTime = endEvent.originalEvent.timeStamp;

        // the distance btw the start and end of the touch action
        const distance = ((endX - startX) ** 2 + (startY - endY) ** 2) ** (1 / 2);

        // if tap was not rather a swipe..
        if (distance < 10) {
            // if user's tap is longer than 100ms
            if ((endTime - startTime) > 50) {
                
                clickEventHandler(endEvent);
                // we have to stop 'touchend' function before stepping into the recursive callback function!
                
                console.log('taphold', clickedCountryCode, endTime - startTime);

                // if the tap was on a valid country
                if (clickedCountryCode) {
                     // don't listen to furter touches until next question
                    map.off('touchstart', 'country-touch', touchStartFunction);
                    map.off('touchend', 'country-touch', touchEndFunction);

                    // remember that this calls a recursive function!!
                    setTapHoldFeedbackLayer();
                    
                } else {
                    // if touch target was invalid, reset touch function
                    map.off('touchstart', 'country-touch', touchStartFunction);
                    map.off('touchend', 'country-touch', touchEndFunction);
                    map.on('touchstart', 'country-touch', touchStartFunction);
                }

            } else 
            {
                map.off('touchstart', 'country-touch', touchStartFunction);
                map.off('touchend', 'country-touch', touchEndFunction);
                map.once('touchstart', 'country-touch', touchStartFunction);
            }
        } else {
            // if touch was a swipe / drag / pan action, reset touchstart action
            map.off('touchstart', 'country-touch', touchStartFunction);
            map.off('touchend', 'country-touch', touchEndFunction);
            map.on('touchstart', 'country-touch', touchStartFunction);
        }
    };

    touchStartFunction = (startEvent) => {
        console.log('start event', startEvent);
        const moreFingersTouch = (startEvent.originalEvent.touches.length > 1);

        startX = startEvent.point.x;
        startY = startEvent.point.y;
        startTime = startEvent.originalEvent.timeStamp;

        if (moreFingersTouch) {
            // if touch was with more fingers, stop and restart touch listening.
            // we are not interested when the touch ends hence no 'touchend' fn in this scenario.

            map.off('touchstart', 'country-touch', touchStartFunction);
            map.on('touchstart', 'country-touch', touchStartFunction);    
        } else {
            // if the touch was with one finger only
            map.on('touchend', 'country-touch', touchEndFunction);        
        }
    };

    map.on('touchstart', 'country-touch', touchStartFunction);
    map.on('touchcancel', 'country-touch', () => {
        map.off('touchstart', 'country-touch', touchStartFunction);
        map.off('touchend', 'country-touch', touchEndFunction);
    })
};

/** remove previously clicked country's layers and add updated event listeners */
const setSelectEventListeners = (map, countryCode, increaseScore, callback) => {
    removeFeedbackLayer(map);
    if (!isMobile) {
        setClickSelectEventListeners(map, countryCode, increaseScore, callback);
    } else {
        setTouchSelectEventListeners(map, countryCode, increaseScore, callback);
    }
};

/** generate unique indecies from the countries array and 
 * return an array with the given number of country codes.*/
const getRandomCountryCodes = (countries, num) => {
    let codes = [];
    let randomCountryCodeIndex;
    while (codes.length < num) {
        randomCountryCodeIndex = Math.floor(Math.random() * countries.length);
        !codes.includes(countries[randomCountryCodeIndex]) && codes.push(countries[randomCountryCodeIndex]);
    }
    return codes;
};

export const getQuestions = (region, num) => {
    const allCodesInRegion = Object.keys(data[region]);

    const randomCodes = getRandomCountryCodes(allCodesInRegion, num);

    const questions = [];
    for (const code of randomCodes) {
        const country = data[region][code];
        questions.push([code, country]);
    }
    console.log(questions);
    return questions;
};

const oneQuestion = (map, code, country, region, callback) => {

    $('#countryLabel').remove();
    $('body').append(`<div id="countryLabel" class="country country${region}">${country}</div>`);

    initializeClickedCountryCode();
    // remove previous question's feedbacks
    removeFeedbackLayer(map);
    setSelectEventListeners(map, code, increaseScore, callback);

};

// export this TimeOut instance so that it can be cleared in exit.js
export const timeOutForShowScore = new TimeOut();


/**  this recursive code asks the last question in the questions array and in oneQuestion() function it re-sets
 * the event listener to the next question after a dblclick / taphold event. */
export const askQuestions = (map, region, questions, num, showScore) => {
    if (questions.length === 0) {
        return timeOutForShowScore.setTimeOutFunction(() => showScore(map, score, region, num), 1500);
    }

    const question = questions.pop();
    oneQuestion(map, question[0], question[1], region, () => {
        askQuestions(map, region, questions, num, showScore);
    });
};