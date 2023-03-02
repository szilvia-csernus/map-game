export const initialZoom = () => {
    if (window.innerWidth < 415) {
        return 1
    } else if (window.innerWidth < 800) {
        return 1.5
    } else return 1.7
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
        attributionControl: false,
        dragPan: false,
        scrollZoom: false,
        boxZoom: false,
        dragRotate: false,
        keyboard: false,
        doubleClickZoom: false,
        touchZoomRotate: false
    }).addControl(new mapboxgl.AttributionControl({
        customAttribution: 'App development and map design by &copy; Szilvia Csernus'
        }));;


    map.on('load', () => {
        addTilesetSource(map);
        callback(map)
    })

}

const addTilesetSource = (map) => {

    map.addSource('country-boundaries', {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
        generateId: true
    })

};

const addRotation = (map, callback) => {
    // Base code for rotating globe function is provided by mapbox.com in Mabpbox GLJS Examples. 
    // Rotation speed 
    const secondsPerRevolution = 180;

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

    // When animation is complete, start spinning if there is no ongoing interaction
    map.on('moveend', () => spinGlobe());

    $('.playBtn').click(function () {
        spinEnabled = !spinEnabled;
        // map.stop(); // Immediately end ongoing animation
        
        callback();
    });

    spinGlobe();
}

const addIntroAnimation = () => {
    $('.map').addClass('animate-appear-map');
}

let game;

export const startGame = (map) => {
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