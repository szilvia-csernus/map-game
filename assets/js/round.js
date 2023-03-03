import {
    data
} from '../data/countries.js'

import { clickedCountryCode } from './game.js';

/** add select layer to the map */
const addSelectLayer = (map, countryCode) => {
    map.addLayer({
        filter: ['==', ['get', 'iso_3166_1'], countryCode],
        id: 'country-select-line',
        minzoom: 1,
        maxzoom: 7,
        paint: {
            'line-color': "#2ec62e",
            'line-width': 2
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "line"
    });
    map.addLayer({
        filter: ['==', ['get', 'iso_3166_1'], countryCode],
        id: 'country-select-fill',
        minzoom: 1,
        maxzoom: 7,
        paint: {
            'fill-color': "#fff",
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "fill"
    });
}

/** remove other country selection if there is any */
export const removeSelectLayer = (map) => {
    map.getLayer('country-select-fill') && map.removeLayer('country-select-fill');
    map.getLayer('country-select-line') && map.removeLayer('country-select-line');
}

/** this layer renders the country green/red according to the answer given */
const addFeedbackLayer = (map, countryCode) => {
    map.addLayer({
        filter: ['==', ['get', 'iso_3166_1'], clickedCountryCode],
        id: 'country-feedback-line',
        minzoom: 1,
        maxzoom: 7,
        paint: {
            'line-color': "#fff",
            'line-width': 2
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "line"
    });
    if (countryCode === clickedCountryCode) {
        map.addLayer({
            filter: ['==', ['get', 'iso_3166_1'], clickedCountryCode],
            id: 'country-feedback-fill',
            minzoom: 1,
            maxzoom: 7,
            paint: {
                'fill-color': "#3aa956"
            },
            source: "country-boundaries",
            'source-layer': "country_boundaries",
            type: "fill"
        });
    } else {
        map.addLayer({
            filter: ['==', ['get', 'iso_3166_1'], clickedCountryCode],
            id: 'country-feedback-fill',
            minzoom: 1,
            maxzoom: 7,
            paint: {
                'fill-color': "#a93a42"
            },
            source: "country-boundaries",
            'source-layer': "country_boundaries",
            type: "fill"
        });
    }
}

/** remove other country selection if there is any */
export const removeFeedbackLayer = (map) => {
    map.getLayer('country-feedback-fill') && map.removeLayer('country-feedback-fill');
    map.getLayer('country-feedback-line') && map.removeLayer('country-feedback-line');
}

/** add select- and feedback layers and remove previous ones */
const setSelectEventListeners = (map, countryCode, callback) => {
    
    // map.on('click', () => {
    //     removeSelectLayer(map);
    //     console.log('click', clickedCountryCode)
    //     addSelectLayer(map, clickedCountryCode);
    // })

    // const setDblClickFeedbackLayer = () => {
    //     removeFeedbackLayer(map);
    //     addFeedbackLayer(map, countryCode)
    //     console.log('doubleclick', clickedCountryCode)
    //     callback()
    //     // cleans up event listener after it's initiated
    //     return map.off('dblclick', setDblClickFeedbackLayer)
    // }

    // map.on('dblclick', setDblClickFeedbackLayer)

    const setTapHoldFeedbackLayer = () => {
        console.log('callback fired')
        removeSelectLayer(map);
        removeFeedbackLayer(map);
        addFeedbackLayer(map, countryCode)
        callback()
        
    }

    const touchStartFunction = (startEvent) => {
        console.log('start', startEvent.originalEvent.timeStamp)

        const touchEndFunction = (endEvent) => {
            console.log('end', endEvent.originalEvent.timeStamp)

            // if user's tap is longer than 500ms then initiate the feedback layer
            if ((endEvent.originalEvent.timeStamp - startEvent.originalEvent.timeStamp) > 500) {
                // console.log('taphold', clickedCountryCode)
                // remember that this calls a recursive function!
                setTapHoldFeedbackLayer();
                
            } else {
                // console.log('tap', clickedCountryCode)
                map.once('touchstart', touchStartFunction)
                removeFeedbackLayer(map)
                removeSelectLayer(map);
                addSelectLayer(map, clickedCountryCode);
            }
        }
        map.once('touchend', touchEndFunction);
    }

    map.once('touchstart', touchStartFunction) 
    
}

const getRandomCountryCode = (countries) => {
    let randomCountryCodeIndex = Math.floor(Math.random() * countries.length);
    return countries[randomCountryCodeIndex]
}

const getQuestions = (region) => {
    const codes = Object.keys(data[region]);

    const questions = [];
    for (let i = 0; i < 10; i++) {
        const randomCode = getRandomCountryCode(codes);
        const country = data[region][randomCode].countryName;
        questions.push([randomCode, country])
    }
    console.log(questions)
    return questions;
}

const oneQuestion = (map, code, country, region, callback) => {
    $('#countryLabel').addClass('country').addClass(`country${region}`).text(country).fadeIn('slow');
    
    setSelectEventListeners(map, code, callback)
}

// this recursive code asks the last question in the array and in oneQuestion() function it sets
// the event listener to set the next question after a dblclick / taphold event, as long as
// the questions array is not empty.
const askQuestions = (map, region, questions) => {
    if (questions.length === 0)  {
        return
    };
    const question = questions.pop()
    oneQuestion(map, question[0], question[1], region, () => askQuestions(map, region, questions))
}


export const startRound = (map, region) => {
    $('.continentCanvas').empty();
    $('.mainTitle h1').fadeIn('slow').removeClass('choose').text(`Find the country on the map!`).addClass('question');
    const countryLabel = document.createElement('p');
    countryLabel.id = 'countryLabel';
    $('.mainTitle').append(countryLabel)

    const questions = getQuestions(region);

    askQuestions(map, region, questions)
    
}