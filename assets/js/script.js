const initialZoom = () => {
    if (window.innerWidth < 415) {
        return 1
    } else if (window.innerWidth < 800) {
        return 1.5
    } else return 2
}

const mapColours = {
    1: "#845EC2", // violet
    2: "#F7C8A8", // peach
    3: "#FF6F91", // fuchsia
    4: "#D65DB1", // magenta
    5: "#f475b4", // pink
    6: "#FFC75F", // yellow
    7: "#FF9671", // orange
}

// Creating the map object with Mapbox GL JS - Map custom designed in Mapbox's Studio tool.
const createMapObject = (callback) => {

    mapboxgl.accessToken =
        'pk.eyJ1Ijoic3ppbHZpMSIsImEiOiJjbGR4Z2M5YzEwaDVkNDBwaGcwOWIzcHg4In0.PTFFlTTPfA3PnnA01vzcZw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/szilvi1/cldvz9vlb000y01qrbvjld10b', // add "?optimize=true" at the end if want to improve performance
        projection: 'globe', // Display the map as a globe
        zoom: initialZoom(),
        minZoom: 1,
        maxZoom: 6,
        center: [30, 40],
        dragPan: false,
        scrollZoom: false,
        boxZoom: false,
        dragRotate: false,
        keyboard: false,
        doubleClickZoom: false,
        touchZoomRotate: false
    });

    map.on('load', () => callback(map))

}

const addRotation = (map, callback) => {
    // Starter code for rotating globe function is provided by mapbox.com in Mabpbox GLJS Examples. 

    // Rotation speed 
    const secondsPerRevolution = 180;

    // Above zoom level 4, do not rotate.
    const maxSpinZoom = 4;
    // Rotate at intermediate speeds between zoom levels 3 and 5.
    const slowSpinZoom = 3;

    let userInteracting = false;
    let spinEnabled = true;

    function spinGlobe() {
        const zoom = map.getZoom();
        if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
            let distancePerSecond = 360 / secondsPerRevolution;
            if (zoom > slowSpinZoom) {
                // Slow spinning at higher zooms
                const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                distancePerSecond *= zoomDif;
            }
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

    // Pause spinning on interaction
    map.on('mousedown', () => {
        userInteracting = true;
    });

    map.on('rotateend', () => {
        userInteracting = false;
        spinGlobe();
    });

    // When animation is complete, start spinning if there is no ongoing interaction
    map.on('moveend', () => {
        spinGlobe();
    });

    $('#btnPlay').click(function () {
        spinEnabled = !spinEnabled;
        if (spinEnabled) {
            spinGlobe();
        } else {
            map.stop(); // Immediately end ongoing animation
        }

        callback();

    });

    spinGlobe();
}

const addIntroAnimation = () => {
    $('header').addClass('animate-header');
    $('.btnPlay').addClass('animate-button');
    $('.map').addClass('animate-appear-map');
}

let game;

const startGame = (map) => {
        addRotation(map, () => {
             // import game.js only once
            if (!game) {
                game = import('./game.js');
                }
            game.then(module => {
                module.game(map);
            })
        });
}

createMapObject((map) => {
    addIntroAnimation();
    startGame(map);
})