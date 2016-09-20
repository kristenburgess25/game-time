var $ = require('jquery');
// function HangMan() {
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
  return this.wordArray = ['aautumn','craanberry','haayride','haarvest','pumpkin','football'];
};

HangMan.prototype.getWord = function(){
  return this.wordArray[this.getRandomIndex()];
};

var hangman = new HangMan();
var innerTextOfHiddenWord = document.querySelector('.empty-word');
console.log(hangman);

// $('document').ready(function(){
//   // var wordToGuess = hangman.getWord();
//   innerTextOfHiddenWord.innerHTML = wordToGuess;
//   placeUnderscores();
// });
// HangMan.prototype.newWord = function(){
$('.new-word-button').on('click', function(){
  hangman.wordToGuess = hangman.getWord();
  innerTextOfHiddenWord.innerHTML = hangman.wordToGuess;
   placeUnderscores();
   console.log(hangman.wordToGuess);
 })
;

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

$('.letter').on('click', function() {
  var stringLetter = this.innerHTML;
  checkLetter(stringLetter);
  console.log(stringLetter);
});


//WIP checkLetter functions
function checkLetter(stringLetter) {
  // var wordToGuess = hangman.getWord();
  debugger
  var splitWord = hangman.wordToGuess.split('');
  console.log(splitWord)
  var wordLength = splitWord.length
  // var placeholders = splitWord;
  for (var i = 0; i < wordLength; i++) {
    // var stringLetterText = stringLetter.innerHTML;
      if (hangman.wordToGuess.charAt(i) === stringLetter) {
        hangman.phArray[i] = stringLetter;
      }
    }

}

// function checkLetter(splitWord) {
//   var placeholders = '';
//   var stringLetter = this.innerHTML;
//   var wordToGuess = hangman.getLevOneWord();
//
//   var splitWord = wordToGuess.split('');
//     for (var i = [0]; i < splitWord; i++) {
//       if (splitWord.charAt[i] == stringLetter) {
//         placeholders[i] = stringLetter;
//         return stringLetter;
//     }
//   }
// };





module.exports = HangMan;
