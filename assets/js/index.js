import {
    addPlayBtn,
    removePlayBtn
} from './buttons.js';
// import {
//     firewall
// } from './firewall.js';
import {
    addRotation
} from './spin.js';

// globe zoom level depending on screen size
export const initialZoom = () => {
    if (window.innerWidth < 600) {
        return 1;
    } else {
        return 1.5;
    }
};

// exclude disputed areas as well as worldviews with conflicting interests:
// Russia regarding Crimea, Serbia regarding Kosovo, 
// Morocco regarding Western Sahara and  
// Argentina regarding Falkland Islands.
export const worldviewFilters = [
    ["has", "color_group"],
    ["match", ["get", "disputed"],
        ["true"], false, true
    ],
    ["match", ["get", "worldview"],
        ["RU"], false, true
    ],
    ["match", ["get", "worldview"],
        ["CN"], false, true
    ],
    ["match", ["get", "worldview"],
        ["MA"], false, true
    ],
    ["match", ["get", "worldview"],
        ["AR"], false, true
    ]
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
            style: 'mapbox://styles/szilvi1/cldvz9vlb000y01qrbvjld10b',
            projection: 'globe', // Display the map as a globe
            zoom: initialZoom(),
            minZoom: 1,
            maxZoom: 7,
            center: [50, 40],
            interactive: false,
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
        }));

        map.on('load', () => {
            addTilesetSource(map);
            callback(map);
        });

        // if connection fails go to the error page
        map.on('error', () => {
            window.location.href = '../error.html';
        });
    }
};

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
    });
};

// the loaded map fades in with animation
const addMapIntroAnimation = () => {
    $('.map').addClass('animate-appear-map');
};

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
        });
    });
    addRotation(map);
};


window.document.onload = 
    // only create map object if within Mapbox allowance.
    // UPDATE 15/Nov/2023: Unfortunately, the COUNT API, which I was using to count page loads, has been taken off the internet 
    // by its new owner. As this API acted as my "firewall" which allowed loading the map only if it was within the free tier 
    // with Mapbox, the game stopped loading as it never passed through my firewall. For this reason, to allow the map and game 
    // to load again, I disabled my firewall function until I find another API to serve this purpose.
    //firewall( () => {
        // If another event cancels the touch event the default would be to jump back within the code when the player returns.
        // This default behaviour would mess up the event listeners & game flow, that's the reason for preventDefault(). 
        $('body').on('touchcancel', e => e.preventDefault());
        createMapObject((map) => {
            addMapIntroAnimation();
            // stop showing previous animation 
            $('#preMapContainer').remove();
            startGame(map);
    //    });
});