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
const createMapObject = () => {
    mapboxgl.accessToken =
        'pk.eyJ1Ijoic3ppbHZpMSIsImEiOiJjbGR4Z2M5YzEwaDVkNDBwaGcwOWIzcHg4In0.PTFFlTTPfA3PnnA01vzcZw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/szilvi1/cldvz9vlb000y01qrbvjld10b', // add "?optimize=true" at the end if want to improve performance
        projection: 'globe', // Display the map as a globe
        zoom: initialZoom(),
        minZoom: 1.5,
        maxZoom: 5,
        center: [30, 40],
        dragPan: false,
        scrollZoom: false,
        boxZoom: false,
        dragRotate: false,
        keyboard: false,
        doubleClickZoom: false,
        touchZoomRotate: false
    });
    return map
}

// add tileset source for country boundaries, region and country name data
const addTilesetSource = (map) => {
    map.addSource('country-boundaries', {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
        generateId: true
    })

    // Set scroll and drag functions
    map["dragPan"].enable();
    map["scrollZoom"].enable();
    map["boxZoom"].enable();
    map["dragRotate"].enable();
    map["keyboard"].enable();
    map["doubleClickZoom"].enable();
    map["touchZoomRotate"].enable();

};

// Adding interactive layer to the map. 

const addHoverLayer = (map) => {

    // select region's countries to be hoverable
    map.addLayer({
        id: 'country-hover',
        minzoom: 1.5,
        maxzoom: 5.5,
        paint: {
            'fill-color': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                "#fff", // paint it white on hover
                "hsla(0, 0%, 100%, 0)"
            ]
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "fill"
    })
}

const addBlurLayer = (map) => {
    // add a blur to countries outside the region
    map.addLayer({
        id: `country-blur`,
        minzoom: 1.5,
        maxzoom: 5.5,
        paint: {
            'fill-color': "hsla(0, 0%, 70%, 0.5)"
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "fill"
    })

    // add hover-effect: when the user moves their mouse over the state-fill layer, 
    // we'll update the feature state for the feature under the mouse.


    let hoveredStateId = null;

    map.on('mousemove', `country-hover`, (e) => {
        map.getCanvas().style.cursor = 'pointer';
        console.log(e.features[0].properties.subregion)
        if (e.features.length > 0) {
            if (hoveredStateId) {

                map.setFeatureState({
                    source: 'country-boundaries',
                    sourceLayer: 'country_boundaries',
                    id: hoveredStateId
                }, {
                    hover: false
                });
                // console.log(map.getFeatureState({
                //     source: 'country-boundaries',
                //     sourceLayer: 'country_boundaries',
                //     id: hoveredStateId
                // }))
            }

            hoveredStateId = e.features[0].id;
            map.setFeatureState({
                source: 'country-boundaries',
                sourceLayer: 'country_boundaries',
                id: hoveredStateId
            }, {
                hover: true
            });
            // console.log(map.getFeatureState({
            //     source: 'country-boundaries',
            //     sourceLayer: 'country_boundaries',
            //     id: hoveredStateId
            // }))

        }
    });

    // When the mouse leaves the state-fill layer, update the feature state of the
    // previously hovered feature.
    map.on('mouseleave', `country-hover`, () => {
        // console.log(hoveredStateId)
        if (hoveredStateId) {

            map.setFeatureState({
                source: 'country-boundaries',
                sourceLayer: 'country_boundaries',
                id: hoveredStateId
            }, {
                hover: false
            });
            hoveredStateId = null;
        }

        map.getCanvas().style.cursor = '';
    });

    // return (map.getFeatureState({
    //     source: 'country-boundaries',
    //     sourceLayer: 'country_boundaries',
    //     id: hoveredStateId
    // }))
};


const addRotate = (map, callback) => {
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

    // // Restart spinning the globe when interaction is complete
    // map.on('mouseup', () => {
    //     userInteracting = false;
    //     spinGlobe();
    // });

    // These events account for cases where the mouse has moved
    // off the map, so 'mouseup' will not be fired.
    // map.on('dragend', () => {
    //     userInteracting = false;
    //     spinGlobe();
    // });
    // map.on('pitchend', () => {
    //     userInteracting = false;
    //     spinGlobe();
    // });
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

const replacePlayBtnToContinentBtns = (callback) => {
    $('#btnPlay').remove();

    $('body').append('<div class="continentCanvas"></div>')

    // add continent buttons
    $('.continentCanvas').append('<button id="europeBtn" class="continentBtn">Europe</button>');
    $('.continentCanvas').append('<button id="asiaBtn" class="continentBtn">Asia</button>');
    $('.continentCanvas').append('<button id="africaBtn" class="continentBtn">Africa</button>');
    $('.continentCanvas').append('<button id="americasBtn" class="continentBtn">Americas</button>');
    callback()
}

// $('#europeBtn').click(function() {
//     console.log('click');
//     map.fitBounds([
//         [-11.034908,31.142452],[46.661510,68.865250]
//     ])
// })



const addClickListenersToContinentBtns = (map) => {   

    const addFlyOnClick = (button, region, center, zoom = 4) => {
        button.click(function () {
            map.flyTo({
                center,
                zoom
            })
            // clear previous filters if any
            map.setFilter('country-hover', null);
            map.getLayer('country-blur') && map.setFilter('country-blur', null);

            // set hoverable filter for region and blur filter outside region
            map.setFilter('country-hover', ['==', ['get', 'region'], region]);
            addBlurLayer(map);
            map.setFilter('country-blur', ['!=', ['get', 'region'], region])
        })
    }
    addTilesetSource(map);
    addHoverLayer(map);
    addFlyOnClick($('#europeBtn'), 'Europe', [14.213562, 53.541532], 3.5);
    addFlyOnClick($('#asiaBtn'), 'Asia', [84.090042, 42.298643], 3);
    addFlyOnClick($('#africaBtn'), 'Africa', [17.015762, 8.895926], 3);
    addFlyOnClick($('#americasBtn'), 'Americas', [-70.582352, -3.374284], 3);
}

const addIntroAnimation = () => {
    $('header').addClass('animate-header');
    $('.btnPlay').addClass('animate-button');
    $('.map').addClass('animate-appear-map');
}

addIntroAnimation();
const map = createMapObject();

addRotate(map, () => replacePlayBtnToContinentBtns(() => addClickListenersToContinentBtns(map)))