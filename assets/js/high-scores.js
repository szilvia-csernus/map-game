export const showHighScores = () => {

    // only safe input gets loaded from localStorage
    const asiaNr = Number(window.localStorage.getItem('Asia'));
    const asia = (asiaNr <= 10 && asiaNr > 0) ? asiaNr : false;
    const europeNr = Number(window.localStorage.getItem('Europe'));
    const europe = (europeNr <= 10 && europeNr > 0) ? europeNr : false;
    const africaNr = Number(window.localStorage.getItem('Africa'));
    const africa = (africaNr <= 10 && africaNr > 0) ? africaNr : false;
    const americasNr = Number(window.localStorage.getItem('Americas'));
    const americas = (americasNr <= 10 && americasNr > 0) ? americasNr : false;

    // adds background & canvas
    $('body').append('<div id="highScoresBackground" class="highScoresBackground"></div>');
    $('#highScoresBackground').append(`<div id="highScoresCanvas" class="highScoresCanvas"></div>`);
    $('#highScoresCanvas').append(`<div id="highScoresTitle" class="highScoresTitle">Your best scores:</div>`);

    // adds region scores
    if (europe) {
        $('#highScoresCanvas').append(`<p class="score scoreEurope">Europe:  ${europe}</p>`);
    }
    if (asia) {
        $('#highScoresCanvas').append(`<p class="score scoreAsia">Asia:  ${asia}</p>`);
    }
    if (africa) {
        $('#highScoresCanvas').append(`<p class="score scoreAfrica">Africa:  ${africa}</p>`);
    }
    if (americas) {
        $('#highScoresCanvas').append(`<p class="score scoreAmericas">Americas: ${americas}</p>`);
    }
    
    // adds 'OK' button & click event listener
    $('#highScoresCanvas').append($(`<button id="highScoresOkay" class="highScoresOkay">OK</button>`));
    $('#highScoresOkay').click(() => {
        $('#highScoresBackground').remove();
    });
};

