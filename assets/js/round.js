import {
    resetMap,
    restartGame
} from './exit.js';

import {
    addNewGameBtn,
    removeContinentBtns,
    removeNewGameBtn
} from './buttons.js';

import { getQuestions, askQuestions, initializeScore } from './questions.js';
import { showHighScores } from './high-scores.js';
import timeOutFunction from './timeout.js';

export const restartRound = (map) => {
    removeNewGameBtn();
    restartGame(map)
}

const showScore = (map, score, region, num) => {
    resetMap(map);
    $('h1').empty().removeClass('question').addClass('choose').text(`Your Score: ${score} / ${num}`)
    $('#countryLabel').remove();
    $('#checkmarks').remove();

    const highScore = Number(window.localStorage.getItem(region));
    if (highScore < score) {
        window.localStorage.setItem(region, score)
    }

    const playedBefore = window.localStorage.getItem('playedBefore') === 'true' ? true : false;

    if (!playedBefore) {
        window.localStorage.setItem('playedBefore', 'true')
        addNewGameBtn(map)
    } else {
       showHighScores(map)
    } 
}

export const timeOutForMinZoom = new timeOutFunction();
export const timeOutForQuestion = new timeOutFunction();
export const timeOutForCountry = new timeOutFunction();

export const startRound = (map, region, num) => {
    initializeScore();

    // set minimum zoom level after animation finished.
    timeOutForMinZoom.setTimeOutFunction(() => map.setMinZoom(map.getZoom() - 0.5), 1000);
    
    $('h1').removeClass('choose').text('');
    timeOutForQuestion.setTimeOutFunction(() => $('h1').text('Find the country on the map!').addClass('question'), 1000)
    $('body').append('<ul id="checkmarks" class="checkmarks"></ul>');
    removeContinentBtns();

    const questions = getQuestions(region, num);

    // wait a second before displaying the first question
    timeOutForCountry.setTimeOutFunction(() => askQuestions(map, region, questions, num, showScore), 1000)
}