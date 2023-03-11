export const addHowToPlay = (isMobile, callback = () => {}) => {
     // remove the icon so that user can't click it again when instructions are already rendered on the page.
     removeHowToPlayIcon();
    
    const message = isMobile ? "Touch " : "Double Click "
    console.log('addHowToPlay')
    $('body').append('<div id="howToPlayBackground" class="howToPlayBackground"></div>');
    $('#howToPlayBackground').append('<div id="howToPlayCanvas" class="howToPlayCanvas"></div>');
    $('#howToPlayCanvas').append(`<p class="firstRule">Find 10 countries on the map.</p>`);
    $('#howToPlayCanvas').append('<p class="secondRule">You can zoom in and out, pan & rotate the map.</p>');
    $('#howToPlayCanvas').append(`<p class="thirdRule">${message} to select a country.</p>`);
    $('#howToPlayCanvas').append(`<button id="okay" class="okay">OK</button>`);
    $('#okay').click(function () {
        removeHowToPlay();
        addHowToPlayIcon(isMobile);
        callback()
    })
}

export const removeHowToPlay = () => {
    $('#howToPlayBackground') && $('#howToPlayBackground').remove();
}

export const addHowToPlayIcon = (isMobile) => {
    $('body').append('<img id="questionMark" class="questionMark" src="./assets/icons/questionMark.svg" alt="how to play icon"></img>');
    $('#questionMark').click(function() {
        // remove the icon so that user can't click it again when instructions are already rendered on the page.
        removeHowToPlayIcon();
        console.log('click event listener')
        addHowToPlay(isMobile)
    })
}

const removeHowToPlayIcon = () => {
    $('#questionMark') && $('#questionMark').remove();
}
