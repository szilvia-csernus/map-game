import { addNewGameBtn } from "./buttons.js"

export const showHighScores = (map) => {
    
    const asia = window.localStorage.getItem('Asia')
    const europe = window.localStorage.getItem('Europe')
    const africa = window.localStorage.getItem('Africa')
    const americas = window.localStorage.getItem('Americas')

    $('body').append('<div id="highScoresBackground" class="highScoresBackground"></div>');
    $('#highScoresBackground').append(`<div id="highScoresCanvas" class="highScoresCanvas"></div>`);
    $('#highScoresCanvas').append(`<div id="highScoresTitle" class="highScoresTitle">Your highest scores:</div>`);
    europe && $('#highScoresCanvas').append(`<p class="score">Europe: ${europe}</p>`);
    asia && $('#highScoresCanvas').append(`<p class="score">Asia: ${asia}</p>`);
    africa && $('#highScoresCanvas').append(`<p class="score">Africa: ${africa}</p>`);
    americas && $('#highScoresCanvas').append(`<p class="score">Americas: ${americas}</p>`);
    
    addNewGameBtn(map)
    $('#highScoresCanvas').append($('#newGame').addClass('repositionBtn'))
}

