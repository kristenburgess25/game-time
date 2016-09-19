var $ = require('jquery');
// function HangMan() {
require('./dom-interaction');

function DoItAll() {

function HangMan(wordArray, word){
  this.wordArray = this.getLevOneWordArr();
  this.word = this.getWord();
};

// this.wordArray = this.getLevOneWordArr();
// this.word = this.getWord();

var levOneWordArr = ['autumn','cranberry','hayride','harvest','pumpkin','football']

HangMan.prototype.getRandomIndex = function(){
  return parseInt(Math.random() * this.wordArray.length);
};

HangMan.prototype.getLevOneWordArr = function(){
  return this.wordArray = ['autumn','cranberry','hayride','harvest','pumpkin','football'];
};

HangMan.prototype.getWord = function(){
  return this.wordArray[this.getRandomIndex()];
};

HangMan.prototype.placeUnderscores = function(){
  var wordToGuess = hangMan.getWord();
  var wordLength = wordToGuess.length;
  var placeholders = ''
for (var i = 0; i < wordLength; i++) {
  placeholders += '_';
}
  innerTextOfHiddenWord.innerHTML = placeholders;

};


var hangMan = new HangMan();
var innerTextOfHiddenWord = document.querySelector('.empty-word');
console.log(hangMan);

$('document').ready(function(){
  var wordToGuess = hangMan.getWord();
  innerTextOfHiddenWord.innerHTML = wordToGuess;
  replaceText();
});

$('.new-word-button').on('click', function(){
  var wordToGuess = hangMan.getWord();
  innerTextOfHiddenWord.innerHTML = wordToGuess;
   placeUnderscores();
  })

  function placeUnderscores () {
$('.letter').on('click', function() {
  var stringLetter = this.innerHTML;
  checkLetter();
  console.log(stringLetter);
})
};

//placeholders and arrays can't comunnicate right now
//do the split array
//append the split array to the page with spans around each object in the array
//should be looping through the placeholders, not through the letters...should be looping through both?
//replacing undrescores with values
//

//WIP checkLetter functions
function checkLetter(stringLetter) {


  var wordToGuess = hangman.getLevOneWord();
  debugger
  var splitWord = wordToGuess.split('');
  console.log(splitWord)
  var wordLength = splitWord.length
  // var placeholders = splitWord;
  for (var i = 0; i < wordLength; i++) {
      if (wordToGuess.charAt(i) === stringLetter) {
        splitWord[i] = stringLetter.innerHTML;
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
}
module.exports = DoItAll;
