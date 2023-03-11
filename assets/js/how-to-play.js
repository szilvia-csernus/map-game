export const addHowToPlay = (isMobile, fast, callback = () => {}) => {
    // remove the icon so that user can't click it again when instructions are already rendered on the page.
    $('#questionMark').remove();

    const message = isMobile ? "Touch " : "Double Click "
    const fastClass = fast ? 'fast' : '';
    $('body').append('<div id="howToPlayBackground" class="howToPlayBackground"></div>');
    $('#howToPlayBackground').append(`<div id="howToPlayCanvas" class="howToPlayCanvas"></div>`);
    $('#howToPlayCanvas').append(`<p class="firstRule ${fastClass}">Find 10 countries on the map.</p>`);
    $('#howToPlayCanvas').append(`<p class="secondRule ${fastClass}">You can zoom in and out, pan & rotate the map.</p>`);
    $('#howToPlayCanvas').append(`<p class="thirdRule ${fastClass}">${message} to select a country.</p>`);
    $('#howToPlayCanvas').append(`<button id="okay" class="okay ${fastClass}">OK</button>`);
    $('#okay').click(function () {
        removeHowToPlay();
        addHowToPlayIcon(isMobile, true);
        callback()
    })
}

export const removeHowToPlay = () => {
    $('#howToPlayBackground').remove();
}

export const addHowToPlayIcon = (isMobile) => {
    if (!document.getElementById('questionMark')) {
        $('body').append('<img id="questionMark" class="questionMark" src="./assets/icons/questionMark.svg" alt="how to play icon"></img>');
        $('#questionMark').click(function () {
            // remove the icon so that user can't click it again when instructions are already rendered on the page.
            $('#questionMark').remove();
            console.log('click event listener')
            addHowToPlay(isMobile, true)
        })
    }
}