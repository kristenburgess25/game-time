// var $ = require('jquery');
function HangMan() {

  function getLevOneWord() {
    var levOneWord = new Array('fall','cider','corn','acorn','hay','leaves');
    return levOneWord[parseInt(Math.random()* levOneWord.length)];
  };

  function getLevTwoWord() {
    var levTwoWord = new Array('autumn','cranberry','hayride','harvest','pumpkin','football');
    return levTwoWord[parseInt(Math.random()* levTwoWord.length)];
  };

  function getLevThreeWord() {
    var levThreeWord = new Array('qurterback','pilgrim','cornmaze','vampire','werewolf');
    return levThreeWord[parseInt(Math.random()* levThreeWord.length)];
  };

  function getLevFourWord() {
    var levFourWord = new Array('thanksgiving','foraging','foliage','rustling','scarecrow');
    return levFourWord[parseInt(Math.random()* levFourWord.length)];
  };

  function getLevFiveWord() {
    var levFiveWord = new Array('cornucopia','autumnal','persimmon','baldcypress','sassafras');
    return levFiveWord[parseInt(Math.random()* levFiveWord.length)];
  };

}

// module.exports = HangMan;
