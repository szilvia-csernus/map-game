import {
    data
} from '../data/countries.js'

import {
    resetMap,
    restartGame
} from './exit.js';
import {
    addSelectLayer,
    removeSelectLayer,
    addFeedbackLayer,
    removeFeedbackLayer,
    clickedCountryCode
} from './layers.js';
import {
    addNewGameBtn,
    removeContinentBtns
} from './buttons.js';

let score = 0;

// this function gets fired in the 'addFeedbackLayer' when user chooses the right answer.
const increaseScore = () => ++score;

/** remove previous select- and feedback layers' event listeners and add updated ones */
const setSelectEventListeners = (map, countryCode, increaseScore, callback) => {
    // add these event listeners to non-mobile (non-touch) devices only
    if (window.navigator.userAgentData.mobile === false) {
        map.on('click', () => {
            removeSelectLayer(map);
            removeFeedbackLayer(map);
            console.log('click', clickedCountryCode)
            addSelectLayer(map, clickedCountryCode);
        })

        const setDblClickFeedbackLayer = () => {
            removeSelectLayer(map);
            removeFeedbackLayer(map);
            addFeedbackLayer(map, countryCode, increaseScore)
            console.log('doubleclick', clickedCountryCode)
            console.log('callback fired')
            // This function calls the next question recursively. (See askQuestions function)
            callback()
            // cleans up event listener after it's been initiated
            return map.off('dblclick', setDblClickFeedbackLayer)
        }

        map.on('dblclick', setDblClickFeedbackLayer)

    } else {

    // touch events for mobile devices only

    const setTapHoldFeedbackLayer = () => {
        console.log('callback fired')
        removeSelectLayer(map);
        removeFeedbackLayer(map);
        addFeedbackLayer(map, countryCode, increaseScore)
        // This function calls the next question recursively. (See askQuestions function)
        callback()

    }
    const touchStartFunction = (startEvent) => {
        const moreFingersTouch = (startEvent.originalEvent.touches.length > 1);

        if (!moreFingersTouch) {
            const startX = startEvent.point.x
            const startY = startEvent.point.y;
            // console.log('start', startX, startY)
            console.log(startEvent)
            // console.log('start', startEvent.originalEvent.touches, startEvent.originalEvent.changedTouches, startEvent.originalEvent.targetTouches)

            const touchEndFunction = (endEvent) => {
                const endX = endEvent.point.x
                const endY = endEvent.point.y;
                console.log('end', endX, endY)
                const distance = ((endX - startX) ** 2 + (startY - endY) ** 2) ** (1 / 2)
                console.log('distance', distance)
                console.log(endEvent)
                // console.log('end', startEvent.originalEvent.touches, startEvent.originalEvent.changedTouches, startEvent.originalEvent.targetTouches)
                
                // if tap was not rather a swipe..
                if (distance < 5) {
                    // if user's tap is longer than 300ms
                    if ((endEvent.originalEvent.timeStamp - startEvent.originalEvent.timeStamp) > 300) {
                        console.log('taphold', clickedCountryCode)
                        
                        // we have to stop 'touchend' function before stepping into the recursive callback function!
                        map.off('touchend', touchEndFunction);
                
                        // remember that this calls a recursive function!
                        setTapHoldFeedbackLayer();

                    } else {
                        console.log('tap', clickedCountryCode)
                        // map.once('touchstart', touchStartFunction)
                        removeFeedbackLayer(map)
                        removeSelectLayer(map);
                        addSelectLayer(map, clickedCountryCode);
                        map.off('touchend', touchEndFunction);
                        map.once('touchstart', touchStartFunction)
               
                        //
                        // map.off('touchend', touchEndFunction);
                    }
                } else {
                    map.off('touchend', touchEndFunction);
                    map.once('touchstart', touchStartFunction)
                    
                }
                
            }
            map.on('touchend', touchEndFunction);
        }
    }

    map.once('touchstart', touchStartFunction)

    }
}

const getRandomCountryCode = (countries) => {
    let randomCountryCodeIndex = Math.floor(Math.random() * countries.length);
    return countries[randomCountryCodeIndex]
}

const getQuestions = (region) => {
    const codes = Object.keys(data[region]);

    const questions = [];
    for (let i = 0; i < 3; i++) {
        const randomCode = getRandomCountryCode(codes);
        const country = data[region][randomCode].countryName;
        questions.push([randomCode, country])
    }
    console.log(questions)
    return questions;
}

const oneQuestion = (map, code, country, region, callback) => {
    $('#countryLabel').text(country)
    setSelectEventListeners(map, code, increaseScore, callback)
}

/**  this recursive code asks the last question in the questions array and in oneQuestion() function it re-sets
 * the event listener to the next question after a dblclick / taphold event. */
const askQuestions = (map, region, questions, showScore) => {
    if (questions.length === 0) {
        return setTimeout(() => showScore(map), 1000)
    };

    const question = questions.pop()
    oneQuestion(map, question[0], question[1], region, () => {
        setTimeout(() => askQuestions(map, region, questions, showScore), 1000)
    })

}

export const restartRound = (map) => {
    $('#newGame').remove();
    restartGame(map)
}

export const startRound = (map, region) => {
    score = 0;

    $('h1').fadeIn('slow').removeClass('choose').text('Find the country on the map!').addClass('question');
    $('body').append(`<div id="countryLabel" class="country country${region}"></div>`)
    removeContinentBtns();

    const questions = getQuestions(region);

    const showScore = (map) => {
        resetMap(map);
        $('h1').empty().removeClass('question').addClass('choose').text(`Your Score: ${score} / 10`)
        $('#countryLabel').remove();
        addNewGameBtn(map)
    }

    askQuestions(map, region, questions, showScore)

}