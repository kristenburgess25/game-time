var $ = require('jquery');
// function HangMan() {
require('./dom-interaction');


function HangMan(){
  this.wordArray = this.getLevOneWordArr();
  this.word = this.getLevOneWord();
};

HangMan.prototype.getRandomIndex = function(){
  return parseInt(Math.random() * this.wordArray.length);
};

HangMan.prototype.getLevOneWordArr = function(){
  return this.wordArray = ['autumn','cranberry','hayride','harvest','pumpkin','football'];
};

HangMan.prototype.getLevOneWord = function(){
  return this.wordArray[this.getRandomIndex()];
};

var hangman = new HangMan();
var innerTextOfHiddenWord = document.querySelector('.empty-word');
console.log(hangman);

$('document').ready(function(){
  var wordToGuess = hangman.getLevOneWord();
  innerTextOfHiddenWord.innerHTML = wordToGuess;
  replaceText();
});

$('.new-word-button').on('click', function(){
  var wordToGuess = hangman.getLevOneWord();
  innerTextOfHiddenWord.innerHTML = wordToGuess;
   replaceText();
  })

  function replaceText () {
    var wordToGuess = hangman.getLevOneWord();
    var wordLength = wordToGuess.length;
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


//WIP checkLetter functions
function checkLetter(stringLetter) {
  debugger
  var wordToGuess = hangman.getLevOneWord();
  var wordLength = wordToGuess.length;
  var splitWord = wordToGuess.split('');
    for (var i = 0; i < wordLength; i++) {
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
