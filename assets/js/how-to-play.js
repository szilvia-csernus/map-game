export const addHowToPlay = (isMobile) => {
    const message = isMobile ? "Touch " : "Double Click "
    $('body').append('<div id="howToPlayCanvas" class="howToPlayCanvas"></div>');
    $('#howToPlayCanvas').append(`<p class="firstRule">Find 10 countries on the map.</p>`)
    $('#howToPlayCanvas').append('<p class="secondRule">You can zoom in and out, pan & rotate the map.</p>')
    $('#howToPlayCanvas').append(`<p class="thirdRule">${message} to select a country.</p>`)
    $('#howToPlayCanvas').append(`<button id="okay" class="okay">OK</button>`)
}
