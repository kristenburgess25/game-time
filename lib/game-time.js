var $ = require('jquery');
require('./dom-interaction');

function HangMan(wordArray, phArray, wordToGuess){
  this.wordArray = this.getLevOneWordArr();
  this.phArray = [];
  this.wordToGuess = null;
};

HangMan.prototype.getRandomIndex = function(){
  return parseInt(Math.random() * this.wordArray.length);
};

HangMan.prototype.getLevOneWordArr = function(){
  return this.wordArray = ['autumn','cranberry','hayride','harvest','pumpkin','football'];
};

HangMan.prototype.getWord = function(){
  return this.wordArray[this.getRandomIndex()];
};

var hangman = new HangMan();
var innerTextOfHiddenWord = document.querySelector('.empty-word');
console.log(hangman);

$('.new-word-button').on('click', function(){
  hangman.wordToGuess = hangman.getWord();
  innerTextOfHiddenWord.innerHTML = hangman.wordToGuess;
   placeUnderscores();
   console.log(hangman.wordToGuess);
   $('.letter').attr("disabled", false);
 });

 $('.letter').on('click', function() {
   var stringLetter = this.innerHTML;
   $(this).attr("disabled", true);
   checkLetter(stringLetter);
   console.log(stringLetter);
 });


function placeUnderscores () {
    // var wordToGuess = hangman.getWord();
  var wordLength = hangman.wordToGuess.length;
  var placeholders = '';
  for (var i = 0; i < wordLength; i++) {
    hangman.phArray.push('_');
    placeholders += '_';
  }
    innerTextOfHiddenWord.innerHTML = placeholders;

  };

//WIP checkLetter functions
function checkLetter(stringLetter) {
  debugger
  // var correctGuessText = document.querySelector('.correct-guesses');
  // var incorrectGuessText = document.querySelector('.incorrect-guesses');
  // var correctGuessCount = 0;
  // var incorrectGuessCount = 0;
  var splitWord = hangman.wordToGuess.split('');
  console.log(splitWord);
  var wordLength = splitWord.length;
  var wordIndex = splitWord.indexOf(stringLetter);
  //for correct guess//
  for (var i = 0; i < wordLength; i++) {
    if (hangman.wordToGuess.charAt(i) === stringLetter) {
      hangman.phArray[i] = stringLetter;
        innerTextOfHiddenWord.innerHTML = hangman.phArray.join('');
    }
    if (wordIndex === -1) {
      alert("Guess again!");
      break;
    }
  }
};
//
// function correctGuess(){
//   var correctGuessCount = 0;
//
//
//
// };
//
// function incorrectGuess(){};

module.exports = HangMan;
