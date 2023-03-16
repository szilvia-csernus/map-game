import { addPlayBtn, removePlayBtn } from './buttons.js';
import { addRotation } from './spin.js';

export const initialZoom = () => {
    if (window.innerWidth < 415) {
        return 1
    } else if (window.innerWidth < 800) {
        return 1.5
    } else return 1.7
}

export const worldviewFilters = [
    [ "match", ["get", "disputed"], ["true"], false, true],
    [ "match", ["get", "worldview"], ["RU"], false, true],
    [ "match", ["get", "worldview"], ["MA"], false, true]
  ];

/** Creating the map object with Mapbox GL JS - Map custom designed in Mapbox's Studio tool. 
 * Creating a map object fires as a 'load' using the Mapbox-provided allowance of 
 * 50.000 loads / month. This is created once and used throughout the whole lifecycle of the app.
*/
const createMapObject = (callback) => {
    if (!mapboxgl.supported()) {
        window.location.replace('../no-support.html');
        } else {
    mapboxgl.accessToken =
        'pk.eyJ1Ijoic3ppbHZpMSIsImEiOiJjbGR4Z2M5YzEwaDVkNDBwaGcwOWIzcHg4In0.PTFFlTTPfA3PnnA01vzcZw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/szilvi1/cldvz9vlb000y01qrbvjld10b', // add "?optimize=true" at the end if to improve performance
        projection: 'globe', // Display the map as a globe
        zoom: initialZoom(),
        minZoom: 1,
        maxZoom: 7,
        center: [50, 40],
        attributionControl: false,
        dragPan: false,
        scrollZoom: false,
        boxZoom: false,
        dragRotate: false,
        keyboard: false,
        doubleClickZoom: false,
        touchZoomRotate: false
    }).addControl(new mapboxgl.AttributionControl({
        customAttribution: '<span class="developer">&copy; App development by Szilvia Csernusne Berczes</span>'
        }));;

    map.on('load', () => {
        addTilesetSource(map);
        callback(map)
    })

    map.on('error', () => {
        window.location.href = '../error.html';
    })
}
}

/**  adds tileset source for country boundaries, region and country name data */
const addTilesetSource = (map) => {

    map.addSource('country-boundaries', {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
        filter: [
            "all",
            ...worldviewFilters
        ],
        generateId: true
    })
};

const addIntroAnimation = () => {
    $('.map').addClass('animate-appear-map');
}

let gameFile;

export const startGame = (map) => {
    addPlayBtn(() => {
        // delay loading the rest of the code until button is clicked.
        // import game.js only once
        if (!gameFile) {
            gameFile = import('./game.js'); // returns a promise
        }
        gameFile.then(module => {
            removePlayBtn();
            module.game(map);
        })
    });
    addRotation(map);
}

createMapObject((map) => {
    addIntroAnimation();
    startGame(map);
})