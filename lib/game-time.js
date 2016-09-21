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
   $('.mummy').css('margin-left', '0%');
 });

 $('.letter').on('click', function() {
   var stringLetter = this.innerHTML;
   $(this).attr("disabled", true);
   checkLetter(stringLetter);
   incorrectGuess(stringLetter);
   winningTheGame(stringLetter);
   console.log(stringLetter);
 });


function placeUnderscores() {
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
  // debugger
  var splitWord = hangman.wordToGuess.split('');
  console.log(splitWord);
  var wordLength = splitWord.length;
  //for correct guess//
  for (var i = 0; i < wordLength; i++) {
    if (hangman.wordToGuess.charAt(i) === stringLetter) {
      hangman.phArray[i] = stringLetter;
        innerTextOfHiddenWord.innerHTML = hangman.phArray.join('');
    }
  }
};

function winningTheGame(stringLetter) {
  var splitWord = hangman.wordToGuess;
  var innerTextOfHiddenWord = splitWord.value;
  if (innerTextofHidenWord === splitWord) {
  playerMessage.innerHTML = "You escaped the mummy!";
  }
}

function incorrectGuess(stringLetter, incorrectGuessCount) {
  // debugger
  var correctGuessText = document.querySelector('.correct-guesses');
  var incorrectGuessText = document.querySelector('.incorrect-guesses');
  var incorrectGuessCount = parseInt(incorrectGuessText.innerHTML);
  // var correctGuessCount = 0;
  var splitWord = hangman.wordToGuess.split('');
  var wordIndex = splitWord.indexOf(stringLetter);
  if (wordIndex === -1) {
    incorrectGuessCount++;
    incorrectGuessText.innerHTML = incorrectGuessCount;
  }
  var playerMessage = document.querySelector('.player-message');
  if (incorrectGuessCount === 1){
    $('.mummy').css('margin-left', '20%');
    playerMessage.innerHTML = "You have -four- guesses or the mummy gets you!";
  }
  if (incorrectGuessCount === 2){
    $('.mummy').css('margin-left', '30%');
    playerMessage.innerHTML = "You have -three- guesses or the mummy gets you!";
  }
  if (incorrectGuessCount === 3){
    $('.mummy').css('margin-left', '40%');
    playerMessage.innerHTML = "You have -two- guesses or the mummy gets you!";
  }
  if (incorrectGuessCount === 4){
    $('.mummy').css('margin-left', '50%');
    playerMessage.innerHTML = "You have -one- guess or the mummy gets you!";
  }
  if (incorrectGuessCount === 5){
    $('.mummy').css('margin-left', '60%');
    $('.kid').attr('src', '../images/kidX.png');
    playerMessage.innerHTML = "Oh no! The mummy got you!";
    $('.letter').attr("disabled", true);
  }

};



module.exports = HangMan;
