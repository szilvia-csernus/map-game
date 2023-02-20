// Mapbox GL JS object

    mapboxgl.accessToken =
        'pk.eyJ1Ijoic3ppbHZpMSIsImEiOiJjbGR4Z2M5YzEwaDVkNDBwaGcwOWIzcHg4In0.PTFFlTTPfA3PnnA01vzcZw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/szilvi1/cldvz9vlb000y01qrbvjld10b', // add "?optimize=true" at the end if want to improve performance
        projection: 'globe', // Display the map as a globe
        zoom: 1.5,
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


    function addHoverLayer(map) {

        map.addSource('country-boundaries', {
            type: 'vector',
            url: 'mapbox://mapbox.country-boundaries-v1',
            generateId: true
        });        

        map.addLayer({
            filter: ['has', 'color_group'],
            id: "my-country-fill",
            minzoom: 1.5,
            maxzoom: 5.5,
            paint: {
                'fill-color': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    "#fff", // paint it white on hover
                    // [
                    //     "interpolate",
                    //     ["linear", 1],
                    //     ["get", "color_group"],
                    //     1,
                    //     "#845EC2", // violet
                    //     2,
                    //     "#F7C8A8", // peach
                    //     3,
                    //     "#FF6F91", // fuchsia
                    //     4,
                    //     "#D65DB1", // magenta
                    //     5,
                    //     "#f475b4", // pink
                    //     6,
                    //     "#FFC75F", // yellow
                    //     7,
                    //     "#FF9671", // orange
                    // ],
                    // "#FF6F91", // fuchsia
                    "hsla(0, 0%, 99%, 0)"
                ]
            },
            source: "country-boundaries",
            'source-layer': "country_boundaries",
            type: "fill"
        })

        // Set scroll and drag functions
        map["dragPan"].enable();
        map["scrollZoom"].enable();
        map["boxZoom"].enable();
        map["dragRotate"].enable();
        map["keyboard"].enable();
        map["doubleClickZoom"].enable();
        map["touchZoomRotate"].enable();

        // When the user moves their mouse over the state-fill layer, we'll update the
        // feature state for the feature under the mouse.


        let hoveredStateId = null;

        map.on('mousemove', 'my-country-fill', (e) => {
            map.getCanvas().style.cursor = 'pointer';
            // console.log(e.features[0].properties.name_en)
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
        map.on('mouseleave', 'my-country-fill', () => {
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
    };



// Starter code for rotating globe function is borrowed from mapbox.com Mabpbox GLJ Examples. 

// Rotation speed 
const secondsPerRevolution = 200;

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

// Restart spinning the globe when interaction is complete
map.on('mouseup', () => {
    userInteracting = false;
    spinGlobe();
});

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
// map.on('rotateend', () => {
//     userInteracting = false;
//     spinGlobe();
// });

// When animation is complete, start spinning if there is no ongoing interaction
map.on('moveend', () => {
    spinGlobe();
});

const playBtn = document.getElementById('btnPlay');
playBtn.addEventListener('click', (e) => {
    spinEnabled = !spinEnabled;
    if (spinEnabled) {
        spinGlobe();
    } else {
        map.stop(); // Immediately end ongoing animation
    }
    const europeBtn = document.createElement('button');
    europeBtn.setAttribute('class', 'continentBtn');
    europeBtn.setAttribute('id', 'europeBtn');
    europeBtn.textContent = 'Europe';
    playBtn.remove();
    document.getElementsByClassName('mainCanvas')[0].appendChild(europeBtn)
    $('#europeBtn').click(function() {
        console.log('click');
        map.flyTo({
            center: [15, 45],
            zoom: 4,
            // pitch: 45
        })
        addHoverLayer(map);
    })
    // $('#europeBtn').click(function() {
    //     console.log('click');
    //     map.fitBounds([
    //         [-11.034908,31.142452],[46.661510,68.865250]
    //     ])
    // })
});

spinGlobe();

