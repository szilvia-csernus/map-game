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
    });

    // my country data for capitals
    // map.addSource('countries', {
    //     type: 'geojson',
    //     data: '../../assets/data/countries.geojson'
    // });

    map.addLayer({
        filter: ['has', 'color_group'],
        id: "my-country-fill",
        paint: {
            'fill-color': [
                "interpolate",
                ["exponential", 1],
                ["get", "color_group"],
                1,
                "hsl(295, 78%, 73%)",
                3,
                "hsl(44, 86%, 60%)",
                7,
                "hsl(235, 86%, 60%)",
            ]
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "fill"
    })

    // map.addLayer({
    //     id: "my-countries-line",
    //     paint: {
    //         'line-color': "#fff",
    //         'line-width': 0.5
            
    //     },
    //     source: "country-boundaries",
    //     'source-layer': "country_boundaries",
    //     type: "line"
    // })

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

    map.addSource('countries', {
        type: 'geojson',
        data: '../../assets/data/countries-new.geojson',
    });


    map.addLayer({
        id: 'country-fill',
        type: 'fill',
        source: 'countries',
        layout: {},
        paint: {
            'fill-color': '#627BC1',
            'fill-opacity': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                1,
                0.5
            ]
        }
    });

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


    // map.addSource('states', {
    //     'type': 'geojson',
    //     'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'
    // });

    // map.addLayer({
    //     'id': 'state-fill',
    //     'type': 'fill',
    //     'source': 'states',
    //     'layout': {},
    //     'paint': {
    //         'fill-color': '#627BC1',
    //         'fill-opacity': [
    //             'case',
    //             ['boolean', ['feature-state', 'hover'], false],
    //             1,
    //             0.5
    //         ]
    //     }
    // });

    
    // map.addLayer({
    //     'id': 'state-borders',
    //     'type': 'line',
    //     'source': 'states',
    //     'layout': {},
    //     'paint': {
    //         'line-color': '#627BC1',
    //         'line-width': 1
    //     }
    // });

    // When the user moves their mouse over the state-fill layer, we'll update the
    // feature state for the feature under the mouse.

    let hoveredStateId = null;
    map.on('mouseover', 'country-fill', (e) => {
        console.log(e.features[0].properties.name)
        if (e.features.length > 0) {
            if (hoveredStateId !== null) {
                map.setFeatureState({
                    id: hoveredStateId,
                    source: 'countries',
                   
                }, {
                    hover: false
                });
            }
            hoveredStateId = e.features[0].properties.name;
            map.setFeatureState({
                id: hoveredStateId,
                source: 'countries',
               
            }, {
                hover: true
            });
        }
    });

    // When the mouse leaves the state-fill layer, update the feature state of the
    // previously hovered feature.
    map.on('mouseleave', 'country-fill', () => {
        if (hoveredStateId !== null) {
            map.setFeatureState({
                source: 'countries',
                
                id: hoveredStateId
            }, {
                hover: false
            });
        }
        hoveredStateId = null;
    });

});





$(document).ready(function () {
    $('.map').addClass('makeVisible');
    $('.mainTitle').addClass('makeVisible');
    $('.btnPlay').addClass('makeVisible')
})