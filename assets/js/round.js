import {
    resetMap,
    restartGame
} from './exit.js';

import {
    addHighScoresBtn,
    addNewGameBtn,
    removeContinentBtns,
    removeNewGameBtn
} from './buttons.js';

import { getQuestions, askQuestions, resetScore } from './questions.js';
import TimeOut from './timeout.js';

export const restartRound = (map) => {
    removeNewGameBtn();
    restartGame(map);
};

const showScore = (map, score, region, num) => {
    resetMap(map);

    const previousScoreExists = !!window.localStorage.getItem(region);
    const highScore = Number(window.localStorage.getItem(region));

    let text;
    if (highScore < score && previousScoreExists) {
        text = "HIGH";
    } else {
        text = "Your";
    }

    highScore < score && window.localStorage.setItem(region, score);

    $('h1').empty().removeClass('question').addClass('choose').text(`${text} Score: ${score} / ${num}`);
    $('#countryLabel').remove();
    $('#checkmarks').remove();

    const playedBefore = window.localStorage.getItem('playedBefore') === 'true' ? true : false;

    if (playedBefore) {
        addHighScoresBtn(map);
    } else {
        window.localStorage.setItem('playedBefore', 'true');
    }

    addNewGameBtn(map);
};

export const timeOutForMinZoom = new TimeOut();
export const timeOutForQuestion = new TimeOut();
export const timeOutForCountry = new TimeOut();

let questions;
export const clearQuestions = () => questions = null;

export const startRound = (map, region, num) => {
    resetScore();

    // set minimum zoom level after animation finished.
    timeOutForMinZoom.setTimeOutFunction(() => map.setMinZoom(map.getZoom() - 0.5), 1000);
    
    $('h1').removeClass('choose').text('');
    timeOutForQuestion.setTimeOutFunction(() => $('h1').text('Find the country on the map!').addClass('question'), 1000);
    $('body').append('<ul id="checkmarks" class="checkmarks"></ul>');
    removeContinentBtns();

    questions = getQuestions(region, num);

    // wait a second before displaying the first question
    timeOutForCountry.setTimeOutFunction(() => askQuestions(map, region, questions, num, showScore), 1000);
};