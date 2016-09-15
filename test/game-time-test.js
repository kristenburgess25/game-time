const HangMan = require("../lib/game-time");
const assert = require("chai").assert;



describe ("randomWordLevOne", function (){
  var hangMan = new HangMan();
  it('should be a function', function (){
    assert.isFunction(hangMan.randomWordLevOne, true);
  });

//   it('should generate a random word');
//   var Word = new word();
});
