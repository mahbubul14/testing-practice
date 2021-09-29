// const stringLength = require ('./string-length')

// test('String length is okay', () => {
//     expect(stringLength('hello')).toBe(5)
// });

// test('Error! String length is not fullfill the requirement', () => {
//     expect(() => {stringLength('Welcome to my website');}).toThrow('string too long');
// });

const stringLength = require('./string-length')

test("the length is right", () => {
    expect(stringLength('hello man')).toBe(9)

});

test("should throw an error if string too long", ()=> {
    expect(() => {stringLength('this is great to see !');}).toThrow('String too long!');
});

test("should throw an error if string empty", ()=> {
    expect(() => {stringLength('');}).toThrow('String empty');
});