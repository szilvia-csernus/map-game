import {
    data
} from '../data/countries.js'

import {
    resetMap,
    restartGame
} from './exit.js';
import {
    addFeedbackLayer,
    removeFeedbackLayer,
    clickedCountryCode
} from './layers.js';
import {
    addNewGameBtn,
    removeContinentBtns,
    removeNewGameBtn
} from './buttons.js';

let score = 0;

// this function gets fired in the 'addFeedback' when user chooses the right answer.
const increaseScore = () => ++score;

const addFeedback = (map, countryCode, increaseScore) => {
    const correct = countryCode === clickedCountryCode ? true : false;
    addFeedbackLayer(map, correct);
    if (correct) {
        increaseScore();
        $('#checkmarks').append('<li ><svg class="correct"><use href="./assets/icons/correct.svg#icon"></use></svg></li>')
    } else {
        $('#checkmarks').append('<li ><svg class="incorrect"><use href="./assets/icons/incorrect.svg#icon"></use></svg></li>')
    }
}

const setClickSelectEventListeners = (map, countryCode, increaseScore, callback) => {

    const setDblClickFeedbackLayer = () => {
        removeFeedbackLayer(map);
        addFeedback(map, countryCode, increaseScore)
        console.log('doubleclick', clickedCountryCode)
        console.log('callback fired')
        // This function calls the next question recursively. (See askQuestions function)
        callback()
        // cleans up event listener after it's been initiated
        return map.off('dblclick', setDblClickFeedbackLayer)
    }

    map.on('dblclick', setDblClickFeedbackLayer)
}

const setTouchSelectEventListeners = (map, countryCode, increaseScore, callback) => {
    const setTapHoldFeedbackLayer = () => {
        console.log('callback fired')
        removeFeedbackLayer(map);
        addFeedback(map, countryCode, increaseScore)
        // This function calls the next question recursively. (See askQuestions function)
        callback()

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
                if ((endEvent.originalEvent.timeStamp - startEvent.originalEvent.timeStamp) > 250) {
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

/** remove previous select- and feedback layers' event listeners and add updated ones */
const setSelectEventListeners = (map, countryCode, increaseScore, callback) => {
    // add these event listeners to non-mobile (non-touch) devices only
    removeFeedbackLayer(map);
    if (!window.navigator.maxTouchPoints > 0) {
        setClickSelectEventListeners(map, countryCode, increaseScore, callback)
    } else {
        setTouchSelectEventListeners(map, countryCode, increaseScore, callback)
    }
}

/** generate unique indecies from the countries array and 
 * return an array with the given number of elements.*/
const getRandomCountryCodes = (countries, num) => {
    let codes = [];
    let randomCountryCodeIndex;
    while (codes.length < num) {
        randomCountryCodeIndex = Math.floor(Math.random() * countries.length);
        !codes.includes(countries[randomCountryCodeIndex]) && codes.push(countries[randomCountryCodeIndex])
    }
    return codes
}

const getQuestions = (region, num) => {
    const allCodesInRegion = Object.keys(data[region]);

    const randomCodes = getRandomCountryCodes(allCodesInRegion, num);

    const questions = [];
    console.log(data[region])
    for (const code of randomCodes) {
        const country = data[region][code]
        questions.push([code, country])
    }
    console.log(questions)
    return questions;
}

const oneQuestion = (map, code, country, region, callback) => {
    $('#countryLabel').remove();
    setTimeout(() => {
        $('body').append(`<div id="countryLabel" class="country country${region} animate-bump">${country}</div>`);
        removeFeedbackLayer(map);
        setSelectEventListeners(map, code, increaseScore, callback)
    }, 1000)
}

/**  this recursive code asks the last question in the questions array and in oneQuestion() function it re-sets
 * the event listener to the next question after a dblclick / taphold event. */
const askQuestions = (map, region, questions, showScore) => {
    if (questions.length === 0) {
        return setTimeout(() => showScore(map), 1500)
    };

    const question = questions.pop()
    oneQuestion(map, question[0], question[1], region, () => {
        askQuestions(map, region, questions, showScore)
    })

}

export const restartRound = (map) => {
    removeNewGameBtn();
    restartGame(map)
}

export const startRound = (map, region, num) => {
    score = 0;
    // set minimum zoom level after animation finished.
    setTimeout(() => map.setMinZoom(map.getZoom()), 1000);
    
    $('h1').fadeIn('slow').removeClass('choose').text('');
    setTimeout( () => $('h1').text('Find the country on the map!').addClass('question'), 1000);
    $('body').append('<ul id="checkmarks" class="checkmarks"></ul>');
    removeContinentBtns();

    const questions = getQuestions(region, num);

    const showScore = (map) => {
        resetMap(map);
        $('h1').empty().removeClass('question').addClass('choose').text(`Your Score: ${score} / ${num}`)
        $('#countryLabel').remove();
        $('#checkmarks').remove();
        addNewGameBtn(map)
    }

    // wait a second before displaying the first country
    setTimeout( () => askQuestions(map, region, questions, showScore), 1000)

}