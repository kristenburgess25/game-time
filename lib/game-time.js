// var $ = require('jquery');
// function HangMan() {
require('./dom-interaction');

function HangMan(){
  this.wordArray = this.getLevTwoWordArr();
  this.word = this.getLevTwoWord();
};

HangMan.prototype.getRandomIndex = function(){
  return parseInt(Math.random() * this.wordArray.length);
};

HangMan.prototype.getLevTwoWordArr = function(){
  return this.wordArray = ['autumn','cranberry','hayride','harvest','pumpkin','football'];
};

HangMan.prototype.getLevTwoWord = function(){
  return this.wordArray[this.getRandomIndex()];
};


var hangman = new HangMan();
var innerTextOfHiddenWord = document.querySelector('.empty-word');
console.log(hangman);

$('document').ready(function(){
  var wordToGuess = hangman.getLevTwoWord();
  innerTextOfHiddenWord.innerHTML = wordToGuess.split('');
  replaceText();
});

$('.new-word-button').on('click', function(){
  var wordToGuess = hangman.getLevTwoWord();
  innerTextOfHiddenWord.innerHTML = wordToGuess.split('');
   replaceText();
  })

  function replaceText () {
    var wordToGuess = hangman.getLevTwoWord();
    var wordLength = wordToGuess.length;
    var splitWord = wordToGuess.split('');
    var placeholders = ''
  for (var i = 0; i < wordLength; i++) {
    placeholders += '_';
  }
    innerTextOfHiddenWord.innerHTML = placeholders;

  };

$('.letter').on('click', function() {
  var stringLetter = this.innerHTML;
  checkLetter();
  console.log(stringLetter);
});

function checkLetter(splitWord) {
  var placeholders = '';
  var stringLetter = this.innerHTML;
  var wordToGuess = hangman.getLevTwoWord();

  var splitWord = wordToGuess.split('');
for (var i = [0]; i < splitWord; i++)
debugger; {
if (splitWord.charAt[i] == stringLetter) {
  placeholders[i] = stringLetter;
  return stringLetter;
    }
  }
};





module.exports = HangMan;



  // function getLevTwoWord() {
  //   var levTwoWord = ['autumn','cranberry','hayride','harvest','pumpkin','football'];
  //   return levTwoWord[parseInt(Math.random()* levTwoWord.length)];
  // };
