const assert = require("chai").assert;
const HangMan = require("../lib/game-time");
 


describe("HangMan", function(){

  it('should be a function', function(){
    assert.isFunction(HangMan);
  });

  it('should instantiate a new Hangman game', function () {
    var hangMan = new HangMan();
    assert.isObject(hangMan);
    });
  });

describe("hangMan", function(){

  it('should have a method called "getRandomIndex()"', function(){
    var hangMan = new HangMan();
    assert.isFunction(hangMan.getRandomIndex);
  });

  it('should return a random number integer between 0 and 5', function(){
    var hangMan = new HangMan();
    assert.isNumber(hangMan.getRandomIndex());
  });

  it('should return an array with string values', function(){
    var hangMan = new HangMan();
    assert.isString(hangMan.getWord());
  });

  it.skip('should have a function called "placeUnderscores()"', function(){
    var hangMan = new HangMan();
    assert.isFunction(hangMan.placeUnderscores);
  });
});
