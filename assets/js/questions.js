import {
    data
} from '../data/countries-with-region.js';

import {
    addFeedbackLayer,
    removeFeedbackLayer,
    clickedCountryCode,
    clickEventHandler,
    resetClickedCountryCode
} from './layers.js';

import { hasMouseFn } from './buttons.js';
import TimeOut from './timeout.js';
import { disableMapInteraction, restartGame } from './exit.js';

let score = 0;

// this function gets fired in the 'addFeedback' when user chooses the right answer.
const increaseScore = () => ++score;

export const resetScore = () => score = 0;

const addFeedback = (map, countryCode, increaseScore, callback) => {
    disableMapInteraction(map);
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

    let startX, startY, startTime, endX, endY, endTime, force;

    touchEndFunction = (endEvent) => {
        map.off('touchend', 'country-touch', touchEndFunction);
        endX = endEvent.point.x;
        endY = endEvent.point.y;
        endTime = endEvent.originalEvent.timeStamp;

        // the distance btw the start and end of the touch action
        const distance = ((endX - startX) ** 2 + (startY - endY) ** 2) ** (1 / 2);
        console.log('end event', endEvent);
        
        if (
            // if touch ended  with one finger only
            (endEvent.originalEvent.touches.length <= 1) &&  
            // if tap was not rather a swipe..
            distance < 10 && 
            // if tap was longer than 50ms or was a strong tap 
            ((endTime - startTime) > 50 || force > 0.8)
            )

        {
            clickEventHandler(endEvent);
            
            console.log('taphold', clickedCountryCode, endTime - startTime);

            // if the tap was on a valid country
            if (clickedCountryCode) {
                console.log(clickedCountryCode)
                // don't listen to furter touches until next question
                map.off('touchstart', 'country-touch', touchStartFunction);

                // remember that this calls a recursive function!!
                setTapHoldFeedbackLayer();
            } 
        }
    };

    touchStartFunction = (startEvent) => {
        console.log('start event', startEvent);
        const moreFingersTouch = (startEvent.originalEvent.touches.length > 1);

        startX = startEvent.point.x;
        startY = startEvent.point.y;
        startTime = startEvent.originalEvent.timeStamp;
        force = startEvent.originalEvent.targetTouches[0].force ? startEvent.originalEvent.targetTouches[0].force : 0;

        if (!moreFingersTouch) {
            map.on('touchend', 'country-touch', touchEndFunction);
        } 
    };

    map.on('touchstart', 'country-touch', touchStartFunction);
    // if another event cancels the touch event
    map.on('touchcancel', 'country-touch', restartGame);

};

/** remove previously clicked country's layers and add updated event listeners */
const setSelectEventListeners = (map, countryCode, increaseScore, callback) => {
    removeFeedbackLayer(map);
    if (hasMouseFn) {
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

const enableMapInteraction = (map) => {
    // Set scroll and drag functions
    map.dragPan.enable();
    map.scrollZoom.enable();
    map.touchZoomRotate.enable();
}


const oneQuestion = (map, code, country, region, callback) => {
    enableMapInteraction(map);
    resetClickedCountryCode();
    // remove previous question's feedbacks
    removeFeedbackLayer(map);

    $('#countryLabel').remove();
    $('body').append(`<div id="countryLabel" class="country country${region}">${country}</div>`);

    setSelectEventListeners(map, code, increaseScore, callback);

};

// export this TimeOut instance so that it can be cleared in exit.js
export const timeOutForShowScore = new TimeOut();


/**  this recursive code asks the last question in the questions array and in oneQuestion() function it re-sets
 * the event listener to the next question after a dblclick / taphold event. */
export const askQuestions = (map, region, questions, num, showScore) => {
    if (questions.length === 0) {
        return timeOutForShowScore.setTimeOutFunction(() => showScore(map, score, region, num), 1000);
    }

    const question = questions.pop();
    oneQuestion(map, question[0], question[1], region, () => {
        askQuestions(map, region, questions, num, showScore);
    });
};