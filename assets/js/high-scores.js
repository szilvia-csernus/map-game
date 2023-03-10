import { restartGame } from "./exit.js"

export const showHighScores = (map) => {

    // only safe input gets loaded from localStorage
    const asiaNr = Number(window.localStorage.getItem('Asia'));
    const asia = (asiaNr <= 10 && asiaNr > 0) ? asiaNr : false;
    const europeNr = Number(window.localStorage.getItem('Europe'));
    const europe = (europeNr <= 10 && europeNr > 0) ? europeNr : false;
    const africaNr = Number(window.localStorage.getItem('Africa'));
    const africa = (africaNr <= 10 && africaNr > 0) ? africaNr : false;
    const americasNr = Number(window.localStorage.getItem('Americas'));
    const americas = (americasNr <= 10 && americasNr > 0) ? americasNr : false;

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

