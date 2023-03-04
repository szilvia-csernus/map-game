import {
    data
} from '../data/countries.js'

import {
    clickedCountryCode,
    game,
    resetMap
} from './game.js';

let score = 0;

// this function gets fired in the 'addFeedbackLayer' when user chooses the right answer.
const increaseScore = () => ++score;

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

/** this layer renders the country green/red according to the answer given 
 * as well as increases the score if the answer is correct.
 */
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
        increaseScore();
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

/** remove previous select- and feedback layers' event listeners and add updated ones */
const setSelectEventListeners = (map, countryCode, increaseScore, callback) => {

    map.on('click', () => {
        removeSelectLayer(map);
        console.log('click', clickedCountryCode)
        addSelectLayer(map, clickedCountryCode);
    })

    const setDblClickFeedbackLayer = () => {
        removeFeedbackLayer(map);
        addFeedbackLayer(map, countryCode, increaseScore)
        console.log('doubleclick', clickedCountryCode)
        callback()
        // cleans up event listener after it's initiated
        return map.off('dblclick', setDblClickFeedbackLayer)
    }

    map.on('dblclick', setDblClickFeedbackLayer)


    // touch events for mobile devices

    const setTapHoldFeedbackLayer = () => {
        console.log('callback fired')
        removeSelectLayer(map);
        removeFeedbackLayer(map);
        addFeedbackLayer(map, countryCode, increaseScore)
        callback()

    }

    const touchStartFunction = (startEvent) => {
        const startX = startEvent.point.x
        const startY = startEvent.point.y;
        // console.log('start', startX, startY)
        console.log(startEvent)
        // console.log('start', startEvent.originalEvent.touches, startEvent.originalEvent.changedTouches, startEvent.originalEvent.targetTouches)
        const moreFingersTouch = (startEvent.originalEvent.touches.length > 1)

        const touchEndFunction = (endEvent) => {
            const endX = endEvent.point.x
            const endY = endEvent.point.y;
            // console.log('end', endX, endY)
            const distance = ((endX - startX) ** 2 + (endY - endY) ** 2) ** (1 / 2)
            // console.log('distance', distance)
            console.log(endEvent)
            // console.log('end', startEvent.originalEvent.touches, startEvent.originalEvent.changedTouches, startEvent.originalEvent.targetTouches)

            // if user's tap is longer than 500ms but the movement is shorter 
            // than 5mm then initiate the feedback layer
            if ((endEvent.originalEvent.timeStamp - startEvent.originalEvent.timeStamp) > 500 && distance < 5 && !moreFingersTouch) {
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
    $('#countryLabel').addClass(`country${region}`).text(country).addClass('animate-appear');
    setSelectEventListeners(map, code, increaseScore, callback)
}

// this recursive code asks the last question in the array and in oneQuestion() function it sets
// the event listener to set the next question after a dblclick / taphold event, as long as
// the questions array is not empty.
const askQuestions = (map, region, questions, showScore) => {
    if (questions.length === 0) {
        return showScore()
    };

    const question = questions.pop()
    oneQuestion(map, question[0], question[1], region, () => askQuestions(map, region, questions, showScore))
}

const restartRound = (map) => {
    $('.newGame').removeClass('animate-appear');

    game(map)
}

export const startRound = (map, region) => {
    score = 0;
    $('.continentCanvas').empty();
    $('h1').fadeIn('slow').removeClass('choose').text(`Find the country on the map!`).addClass('question');


    const questions = getQuestions(region);

    const showScore = (map) => {
        resetMap(map);
        $('h1').empty().removeClass('question').addClass('choose').text(`Your Score: ${score} / 10`)
        $('#countryLabel').removeClass('animate-appear').empty();
        $('.newGame').addClass('animate-appear').text('New Game').click(function () {
            restartRound(map)
        })
    }

    askQuestions(map, region, questions, showScore)

}