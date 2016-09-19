const assert = require("chai").assert;
const HangMan = require("../lib/game-time");



describe ("HangMan", function(){

  var hangMan = new HangMan();

  it('should be a function', function(){
    assert.isFunction(hangMan.getLevOne;
  });

  it('should return a random number integer between 0 and 5', function(){
    assert.isNumber(hangMan.getRandomIndex());
  });

  it('should return an array with string values', function(){
    assert.isString(hangMan.getLevOneWord());
  });

  it('should instantiate a new Hangman game', function () {
    assert.isObject(hangMan);
  });

  it('should have a method called "placeUnderscores()"', function(){
    assert.isFunction(hangMan.placeUnderscores);
  })
});
