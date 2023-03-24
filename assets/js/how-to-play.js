export const addHowToPlay = (hasMouseFn, fast, callback = () => {}) => {
    // remove the icon so that user can't click it again when instructions are already rendered on the page.
    $('#questionMark').remove();

    const message = hasMouseFn ? "Double Click " : "Tap ";
    const fastClass = fast ? 'fast' : '';
    $('body').append('<div id="howToPlayBackground" class="howToPlayBackground"></div>');
    $('#howToPlayBackground').append(`<div id="howToPlayCanvas" class="howToPlayCanvas"></div>`);
    $('#howToPlayCanvas').append(`<p class="firstRule ${fastClass}">Select a region.</p>`);
    $('#howToPlayCanvas').append(`<p class="secondRule ${fastClass}">Find 10 countries on the map.</p>`);
    $('#howToPlayCanvas').append(`<p class="thirdRule ${fastClass}">You can zoom in and out, pan & rotate the map.</p>`);
    $('#howToPlayCanvas').append(`<p class="fourthRule ${fastClass}">${message} to select a country.</p>`);
    $('#howToPlayCanvas').append(`<button id="okay" class="okay ${fastClass}">OK</button>`);
    $('#okay').click(function () {
        removeHowToPlay();
        addHowToPlayIcon(hasMouseFn, true);
        callback();
    });
};

export const removeHowToPlay = () => {
    $('#howToPlayBackground').remove();
};

export const addHowToPlayIcon = (hasMouseFn) => {
    if (!document.getElementById('questionMark')) {
        $('body').append('<img id="questionMark" class="questionMark" src="./assets/icons/questionMark.svg" alt="how to play icon"></img>');
        $('#questionMark').click(function () {
            // remove the icon so that user can't click it again when instructions are already rendered on the page.
            $('#questionMark').remove();
            console.log('click event listener');
            addHowToPlay(hasMouseFn, true);
        });
    }
};