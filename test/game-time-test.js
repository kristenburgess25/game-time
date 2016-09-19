const assert = require("chai").assert;
const HangMan = require("../lib/game-time");



describe ("Hang Man", function(){

  var hangMan = new HangMan();

  it('should be a function', function(){
    assert.isFunction(hangMan.getLevOneWord);
  });

  it('should return a random number integer between 0 and 5', function(){
    assert.isNumber(hangMan.getRandomIndex());
  });

  it('should return an array with string values', function(){
    assert.isString(hangMan.getLevOneWord());
  });

  it('should instantiate a new Hangman game', function () {
    var hangman = new HangMan();
    assert.isObject(hangman);
  })

  // it('should return an expected string if given the correct index', function(){
  //   var hangman = new Hangman();
  //   hangman.getLevTwoWord();
  //
  // });



  // it('should return a string within levTwo word Array', function() {
  //   var 1 = Math.random()* levTwoWord.length);
  //   assert.equal(hangMan.getLevTwoWord, 'cranberry');
  // })

});
