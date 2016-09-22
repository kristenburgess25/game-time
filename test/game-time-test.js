const assert = require("chai").assert;
const HangMan = require("../lib/game-time");

describe("HangMan", function(){

  it('should be a function', function(){
    assert.isFunction(HangMan);
  });

  it('should instantiate a new Hangman game', function () {
    var hangman = new HangMan();
    assert.isObject(hangman);
    });
  });

describe("hangman", function(){

  it('should have a method called "getRandomIndex()"', function(){
    var hangman = new HangMan();
    assert.isFunction(hangman.getRandomIndex);
  });

  it.skip('should return a random number integer between 0 and 10', function(){
    var hangman = new HangMan();
    assert.isNumber(hangman.getRandomIndex());
  });

  it.skip('should return an array with string values', function(){
    var hangman = new HangMan();
    assert.isString(hangman.getWord());
  });


  it.skip('should have a function called newGame()"', function(){
    var hangman = new HangMan();
    assert.isFunction(hangman.newGame);
  });

  it.skip('should have a method called "placeUnderscores()"', function(){
    var hangman = new HangMan();
    assert.isFunction(hangman.placeUnderscores);
  });

});
