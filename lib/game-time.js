var $ = require('jquery');
// function HangMan() {
require('./dom-interaction');

function HangMan(){
  this.wordArray = this.getLevOneWordArr();
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

$('document').ready(function(){
  var wordToGuess = hangman.getWord();
  innerTextOfHiddenWord.innerHTML = wordToGuess;
  placeUnderscores();
});

$('.new-word-button').on('click', function(){
  var wordToGuess = hangman.getWord();
  innerTextOfHiddenWord.innerHTML = wordToGuess;
   placeUnderscores();
  })

  function placeUnderscores () {
    var wordToGuess = hangman.getWord();
    var wordLength = wordToGuess.length;
    var placeholders = ''
  for (var i = 0; i < wordLength; i++) {
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
  var wordToGuess = hangman.getWord();
  debugger
  var splitWord = wordToGuess.split('');
  console.log(splitWord)
  var wordLength = splitWord.length
  // var placeholders = splitWord;
  for (var i = 0; i < wordLength; i++) {
    // var stringLetterText = stringLetter.innerHTML;
      if (wordToGuess.charAt(i) === stringLetter) {
        placeholders[i] = stringLetter;
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
