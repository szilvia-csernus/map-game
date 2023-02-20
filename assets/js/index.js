const loadGame = () => {
    const game = document.createElement('script');
    game.src='./assets/js/game.js';
    game.defer = true;
    document.body.appendChild(game);
}
// const loadSpinning = () => {
//     const scriptSpinning = document.createElement('script');
//     scriptSpinning.src='./assets/js/scriptSpinning.js';
//     scriptSpinning.setAttribute('onload','loadGame()');
//     scriptSpinning.defer = true;
//     document.body.appendChild(scriptSpinning);
// }
const loadMap = () => {
    const scriptMap = document.createElement('script');
    scriptMap.src='./assets/js/scriptMap.js';
    scriptMap.setAttribute('onload','loadGame()');
    scriptMap.defer = true;
    document.body.appendChild(scriptMap);
}
const loadMapGL = () => {
    // const cssMapGL = document.createElement('link');
    // cssMapGL.setAttribute('href','https://api.mapbox.com/mapbox-gl-js/v2.12.0/mapbox-gl.js');
    // cssMapGL.setAttribute('rel','stylesheet');
    // document.body.appendChild(cssMapGL);
    const scriptMapGL = document.createElement('script');
    scriptMapGL.src='https://api.mapbox.com/mapbox-gl-js/v2.12.0/mapbox-gl.js?optimize=true';
    scriptMapGL.setAttribute('onload','loadMap()');
    scriptMapGL.defer = true;
    document.body.appendChild(scriptMapGL);
}

window.addEventListener('DOMContentLoaded', (event) =>{
    // const scriptJQuery = document.createElement('script');
    // scriptJQuery.src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js';
    // document.body.appendChild(scriptJQuery);
    
    // <link
    //   href="https://api.mapbox.com/mapbox-gl-js/v2.12.0/mapbox-gl.css"
    //   rel="stylesheet" defer
    // />
    const cssMain = document.createElement('link');
    cssMain.setAttribute('href','../assets/css/style.css');
    cssMain.setAttribute('rel',"stylesheet");
    document.body.appendChild(cssMain);
    loadMapGL();
    
    
    

})