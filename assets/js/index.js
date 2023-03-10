export const initialZoom = () => {
    if (window.innerWidth < 415) {
        return 1
    } else if (window.innerWidth < 800) {
        return 1.5
    } else return 1.7
}

import { addPlayBtn, removePlayBtn } from './buttons.js'
import { addHowToPlay } from './how-to-play.js'

const mapColours = {
    1: "#845EC2", // violet
    2: "#F7C8A8", // peach
    3: "#FF6F91", // fuchsia
    4: "#D65DB1", // magenta
    5: "#f475b4", // pink
    6: "#FFC75F", // yellow
    7: "#FF9671", // orange
}

/** Creating the map object with Mapbox GL JS - Map custom designed in Mapbox's Studio tool. 
 * Creating a map object fires as a 'load' using the Mapbox-provided allowance of 
 * 50.000 loads / month. This is created once and used throughout the whole lifecycle of the app.
*/
const createMapObject = (callback) => {

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
        customAttribution: '<span class="developer">&copy; App development by Szilvia Csernus</span>'
        }));;

    map.on('load', () => {
        addTilesetSource(map);
        callback(map)
    })
}

/**  adds tileset source for country boundaries, region and country name data */
const addTilesetSource = (map) => {

    map.addSource('country-boundaries', {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
        filter: [
            "all",
            [
              "match",
              ["get", "worldview"],
              ["US"],
              false,
              true
            ]
          ],
        generateId: true
    })

    map.addLayer({
        id: 'patch-for-ukraine-fill',
        filter: 
            [
              "match",
              ["get", "iso_3166_1"],
              ["UA"],
              true,
              false
          ],
        minzoom: 1,
        maxzoom: 7,
        paint: {
            'fill-color': "#f475b4"
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "fill"
    })

    map.addLayer({
        id: 'patch-for-ukraine-line',
        filter:
        [
          "match",
          ["get", "iso_3166_1"],
          ["UA"],
          true,
          false
      ],
        minzoom: 1,
        maxzoom: 7,
        paint: {
            'line-color': "#fff",
            'line-width': 1
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "line"
    });

};

const addRotation = (map, button, callback) => {
    // Code for rotating globe function is adapted from an example by mapbox.com. 
    // https://docs.mapbox.com/mapbox-gl-js/example/globe-spin/

    const secondsPerRevolution = 150;

    let spinEnabled = true;
    
    function spinGlobe() {
        const zoom = map.getZoom();
        if (spinEnabled) {
            let distancePerSecond = 360 / secondsPerRevolution;
            const center = map.getCenter();
            center.lng -= distancePerSecond;
            // Smoothly animate the map over one second.
            // When this animation is complete, it calls a 'moveend' event.
            map.easeTo({
                center,
                duration: 1000,
                easing: (n) => n
            });
        }
    }

    // When animation is complete (1s), start spinning again.
    map.on('moveend', () => spinGlobe());

    button.click(function() {
        spinEnabled = !spinEnabled;
        callback();
    });

    spinGlobe();
}

const addIntroAnimation = () => {
    $('.map').addClass('animate-appear-map');
}

let game;

export const startGame = (map) => {
    addPlayBtn();
    addRotation(map, $('#playBtn'), () => {
        // import game.js only once
        if (!game) {
            game = import('./game.js');
        }
        game.then(module => {
            removePlayBtn();
            module.game(map);
        })
    });
}

createMapObject((map) => {
    addIntroAnimation();
    startGame(map);
})