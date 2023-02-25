// const loadGame = () => {
//     const game = document.createElement('script');
//     game.src = './assets/js/game.js';
//     game.defer = true;
//     document.body.appendChild(game);
// }
const loadMap = () => {
    const scriptMap = document.createElement('script');
    scriptMap.src = './assets/js/scriptMap.js';
    // scriptMap.setAttribute('onload', 'loadGame()');
    scriptMap.defer = true;
    document.body.appendChild(scriptMap);
}
// const loadJQuery = () => {
//     const scriptJQuery = document.createElement('script');
//     scriptJQuery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js';
//     scriptJQuery.setAttribute('onload', 'loadMap()');
//     scriptJQuery.defer = true;
//     document.body.appendChild(scriptJQuery);
// }
const loadMapGL = () => {
    const scriptMapGL = document.createElement('script');
    scriptMapGL.src = 'https://api.mapbox.com/mapbox-gl-js/v2.12.0/mapbox-gl.js?optimize=true';
    scriptMapGL.setAttribute('onload', 'loadMap()');
    document.body.appendChild(scriptMapGL);
    
}

window.addEventListener('DOMContentLoaded', (event) => {
    const cssMapGL = document.createElement('link');
    cssMapGL.setAttribute('rel', 'stylesheet');
    cssMapGL.setAttribute('href', 'https://api.mapbox.com/mapbox-gl-js/v2.12.0/mapbox-gl.css');
    cssMapGL.setAttribute('onload', 'loadMapGL()');
    document.body.appendChild(cssMapGL);
})