// var $ = require('jquery');
// function HangMan() {
$('document').ready(function(){
  getLevOneWord();
});


  function getLevOneWord() {
    var levOneWord = new Array('fall','cider','corn','acorn','candy','leaves');
    var newLevOneWord = levOneWord[parseInt(Math.random()* levOneWord.length)];
    return newLevOneWord;
  };

  function getLevTwoWord() {
    var levTwoWord = ['autumn','cranberry','hayride','harvest','pumpkin','football'];
    return levTwoWord[parseInt(Math.random()* levTwoWord.length)];
  };

  function getLevThreeWord() {
    var levThreeWord = ['qurterback','pilgrim','cornmaze','vampire','werewolf'];
    return levThreeWord[parseInt(Math.random()* levThreeWord.length)];
  };

  function getLevFourWord() {
    var levFourWord = ['thanksgiving','foraging','foliage','rustling','scarecrow'];
    return levFourWord[parseInt(Math.random()* levFourWord.length)];
  };

  function getLevFiveWord() {
    var levFiveWord = ['cornucopia','autumnal','persimmon','baldcypress','sassafras'];
    return levFiveWord[parseInt(Math.random()* levFiveWord.length)];
  };

  $('.new-word-button').on('click', function(){
    var wordString = getLevOneWord();
    debugger
    document.querySelector('.empty-word').innerHTML = wordString.split('');
    })


// module.exports = HangMan;
