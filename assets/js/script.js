// Mapbox GL JS object
mapboxgl.accessToken =
    'pk.eyJ1Ijoic3ppbHZpMSIsImEiOiJjbGR4Z2M5YzEwaDVkNDBwaGcwOWIzcHg4In0.PTFFlTTPfA3PnnA01vzcZw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/szilvi1/cldvz9vlb000y01qrbvjld10b', // add "?optimize=true" at the end if want to improve performance
    projection: 'globe', // Display the map as a globe
    zoom: 1.5,
    center: [30, 40],
});


map.on('load', () => {

    map.addSource('country-boundaries', {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
        generateId: true
    });

    // my country data for capitals
    // map.addSource('countries', {
    //     type: 'geojson',
    //     data: '../../assets/data/countries.geojson'
    // });

    map.addLayer({
        // filter: ['has', 'color_group'],
        id: "my-country-fill",
        paint: {
            'fill-color': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                "#fff",
                // "#9BDEAC", // fill it green on hover
                [
                    "interpolate",
                    ["exponential", 1],
                    ["get", "color_group"],
                    1,
                    "#845EC2", // violet
                    2,
                    "#F7C8A8", // peach
                    3,
                    "#FF6F91", // fuchsia
                    4,
                    
                    "#D65DB1", // magenta
                    6,
                    "#FFC75F", // yellow
                    7,
                    "#FF9671", // orange
    
                ],
                
            ]
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "fill"
    })

    map.addLayer({
        id: "my-countries-line",
        paint: {
            'line-color': "#fff",
            'line-width': 0.5

        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "line"
    })

    // map.addLayer({

    //     id: "my-region-fill",
    //     paint: {
    //         'fill-color': 'green'
    //     },
    //     source: "country-boundaries",
    //     'source-layer': "country_boundaries",
    //     type: "fill"
    // })




    // add source for simplified country boundaries

    // map.addSource('countries', {
    //     type: 'geojson',
    //     data: '../../assets/data/countries-new.geojson',
    //     generateId: true
    // });


    // map.addLayer({
    //     id: 'country-fill',
    //     type: 'fill',
    //     source: 'countries',
    //     layout: {},
    //     paint: {
    //         'fill-color': '#627BC1',
    //         'fill-opacity': [
    //             'case',
    //             ['boolean', ['feature-state', 'hover'], false],
    //             0.5,
    //             0
    //         ]
    //     }
    // });

    // map.addLayer({
    //     id: 'country-borders',
    //     type: 'line',
    //     source: 'countries',
    //     layout: {},
    //     paint: {
    //         'line-color': '#627BC1',
    //         'line-width': 1
    //     }
    // });

    // map.on('click', e => {
    //     console.log('event', e)
    //     const features = map.queryRenderedFeatures(e.point, {layers: ['country-fill']});
    //     console.log(features);
    // })


    // When the user moves their mouse over the state-fill layer, we'll update the
    // feature state for the feature under the mouse.


    let hoveredStateId = null;

    map.on('mousemove', 'my-country-fill', (e) => {
        map.getCanvas().style.cursor = 'pointer';
        console.log(e.features[0].properties.name_en)
        if (e.features.length > 0) {
            if (hoveredStateId) {

                map.setFeatureState({
                    source: 'country-boundaries',
                    sourceLayer: 'country_boundaries',
                    id: hoveredStateId
                }, {
                    hover: false
                });
                console.log(map.getFeatureState({
                    source: 'country-boundaries',
                    sourceLayer: 'country_boundaries',
                    id: hoveredStateId
                }))
            }

            hoveredStateId = e.features[0].id;
            map.setFeatureState({
                source: 'country-boundaries',
                sourceLayer: 'country_boundaries',
                id: hoveredStateId
            }, {
                hover: true
            });
            console.log(map.getFeatureState({
                source: 'country-boundaries',
                sourceLayer: 'country_boundaries',
                id: hoveredStateId
            }))

        }
    });

    // When the mouse leaves the state-fill layer, update the feature state of the
    // previously hovered feature.
    map.on('mouseleave', 'my-country-fill', () => {
        console.log(hoveredStateId)
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
});





$(document).ready(function () {
    $('.map').addClass('makeVisible');
    $('.mainTitle').addClass('makeVisible');
    $('.btnPlay').addClass('makeVisible')
})