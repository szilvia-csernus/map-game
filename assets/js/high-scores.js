import { restartGame } from "./exit.js"

export const showHighScores = (map) => {
    
    const asia = window.localStorage.getItem('Asia')
    const europe = window.localStorage.getItem('Europe')
    const africa = window.localStorage.getItem('Africa')
    const americas = window.localStorage.getItem('Americas')

    $('body').append('<div id="highScoresBackground" class="highScoresBackground"></div>');
    $('#highScoresBackground').append(`<div id="highScoresCanvas" class="highScoresCanvas"></div>`);
    $('#highScoresCanvas').append(`<div id="highScoresTitle" class="highScoresTitle">Your best scores:</div>`);

    europe && $('#highScoresCanvas').append(`<p class="score scoreEurope">Europe:  ${europe}</p>`);
    asia && $('#highScoresCanvas').append(`<p class="score scoreAsia">Asia:  ${asia}</p>`);
    africa && $('#highScoresCanvas').append(`<p class="score scoreAfrica">Africa:  ${africa}</p>`);
    americas && $('#highScoresCanvas').append(`<p class="score scoreAmericas">Americas: ${americas}</p>`);
    
    $('#highScoresCanvas').append($(`<button id="highScoresOkay" class="highScoresOkay">OK</button>`))
    $('#highScoresOkay').click(() => {
        $('#highScoresBackground').remove();
        restartGame(map)
    })
}

