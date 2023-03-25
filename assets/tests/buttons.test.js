const addPlayBtn = require('../js/buttons.js');

describe('add Play Button function', () => {
    describe('adds "Play" button to screen', () => {
        test('should display a button with "playBtn" id.', () => {
            expect(addPlayBtn()).toBe(43)
        })
    })
    describe('adds click listener', () => {

    })
    describe('adds mouseup listener', () => {

    })
})