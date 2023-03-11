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

export const restartRound = (map) => {
    removeNewGameBtn();
    restartGame(map)
}

export const startRound = (map, region, num) => {
    initializeScore();
    // set minimum zoom level after animation finished.
    setTimeout(() => map.setMinZoom(map.getZoom()), 1000);
    
    $('h1').fadeIn('slow').removeClass('choose').text('');
    setTimeout( () => $('h1').text('Find the country on the map!').addClass('question'), 1000);
    $('body').append('<ul id="checkmarks" class="checkmarks"></ul>');
    removeContinentBtns();

    const questions = getQuestions(region, num);

    const showScore = (map, score) => {
        resetMap(map);
        $('h1').empty().removeClass('question').addClass('choose').text(`Your Score: ${score} / ${num}`)
        $('#countryLabel').remove();
        $('#checkmarks').remove();

        const highScore = window.localStorage.getItem(region);
        if (highScore < score) {
            window.localStorage.setItem(region, score)
        }

        const playedBefore = window.localStorage.getItem('playedBefore');
        if (!playedBefore) {
            window.localStorage.setItem('playedBefore', 'true')
            addNewGameBtn(map)
        } else {
           showHighScores(map)
        }
        
        
    }

    // wait a second before displaying the first country
    setTimeout( () => askQuestions(map, region, questions, showScore), 1000)

}