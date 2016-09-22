var $ = require('jquery');
require('./dom-interaction');

function HangMan(){
  this.wordArray = this.getWordArray();
  this.phArray = [];
  this.wordToGuess = null;
}

HangMan.prototype.getRandomIndex = function(){
  return parseInt(Math.random() * this.wordArray.length);
};

HangMan.prototype.getWordArray = function(){
  var levelNumber = parseInt($('.game-level').html());
  if(levelNumber === 1){return this.wordArray = ['autumn','cranberry','hayride','harvest','pumpkin','football'];}
  if(levelNumber === 2){return this.wordArray = ['quarterback','pilgrim','cornmaze','vampire','werewolf','thanksgiving'];}
  if(levelNumber === 3){return this.wordArray = ['foraging','foliage','cornucopia','persimmon','baldcypress','sassafras'];}
};

HangMan.prototype.getWord = function(){
  return this.wordArray[this.getRandomIndex()];
};

var hangman = new HangMan();
var innerTextOfHiddenWord = document.querySelector('.empty-word');
console.log(hangman);

$(document).ready(enableButtons);

$('.new-word-button').on('click', newGame);

$('.keyboard-container').on('click', winningTheGame);

$('.up').on('click', function() {
  var levelNumber = parseInt($('.game-level').html());
  if(levelNumber === 3){
    $('.up').attr("disabled", true);
  } else {
  levelUp();
  }
});

$('.down').on('click', function() {
  var levelNumber = parseInt($('.game-level').html());
  if(levelNumber === 1){
    $('.down').attr("disabled", true);
  } else {
  levelDown();
  }
});

$('.letter').on('click', function() {
  var stringLetter = this.innerHTML;
  $(this).attr("disabled", true);
  checkLetter(stringLetter);
  incorrectGuess(stringLetter);
  console.log(stringLetter);
});

function newGame() {
  hangman.wordToGuess = hangman.getWord();
  innerTextOfHiddenWord.innerHTML = hangman.wordToGuess;
  var playerMessage = document.querySelector('.player-message');
  playerMessage.innerHTML = "You have -five- guesses or the mummy gets you!";
  placeUnderscores();
  console.log(hangman.wordToGuess);
  $('.letter').attr("disabled", false);
  $('.mummy').css('margin-left', '0%');
  $('.kid').attr('src', '../images/kid.png');
  $('.kid').css('margin-right', '10px');
  $('.kid').css('transition-duration', '.3s');
  disableButtons();
  resetGuesses();
}

function enableButtons() {
  $('.new-word-button').attr("disabled", false);
  $('.up').attr("disabled", false);
  $('.down').attr("disabled", false);
}

function disableButtons() {
  $('.new-word-button').attr("disabled", true);
  $('.up').attr("disabled", true);
  $('.down').attr("disabled", true);
}

function levelUp() {
  var levelNumber = parseInt($('.game-level').html());
  levelNumber++;
  $('.game-level').text(levelNumber);
  hangman.getWordArray();
  resetArray();
}

function levelDown() {
  var levelNumber = parseInt($('.game-level').html());
  levelNumber--;
  $('.game-level').text(levelNumber);
  hangman.getWordArray();
  resetArray();
}

function resetGuesses() {
  var incorrectGuessText = document.querySelector('.incorrect-guesses');
  incorrectGuessText.innerHTML = 0;
}

function resetArray() {
  hangman.phArray.length = 0;
}

function placeUnderscores() {
  var wordLength = hangman.wordToGuess.length;
  var placeholders = '';
  for (var i = 0; i < wordLength; i++) {
    hangman.phArray.push('_');
    placeholders += '_';
  }
  innerTextOfHiddenWord.innerHTML = placeholders;
}

function checkLetter(stringLetter) {
  var splitWord = hangman.wordToGuess.split('');
  console.log(splitWord);
  var wordLength = splitWord.length;
  for (var i = 0; i < wordLength; i++) {
    if (hangman.wordToGuess.charAt(i) === stringLetter) {
      hangman.phArray[i] = stringLetter;
      innerTextOfHiddenWord.innerHTML = hangman.phArray.join('');
    }
  }
}

function winningTheGame() {
  var playerMessage = document.querySelector('.player-message');
  var phArray = hangman.phArray.join('');
  var wordToGuess = hangman.wordToGuess;
  if (phArray === wordToGuess) {
    console.log("you win!");
    $('.letter').attr("disabled", true);
    playerMessage.innerHTML = "You survived! Click new word to play again!";
    resetArray();
    enableButtons();
  } else {
    console.log("keep guessing");
  }
}

function incorrectGuess(stringLetter, incorrectGuessCount) {
  var incorrectGuessText = document.querySelector('.incorrect-guesses');
  incorrectGuessCount = parseInt(incorrectGuessText.innerHTML);
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
    $('.kid').css('margin-right', '-100%');
    $('.kid').css('transition-delay', '.5s');
    $('.kid').css('transition-duration', '3s');
    playerMessage.innerHTML = "Oh no! The mummy got you!";
    $('.letter').attr("disabled", true);
    enableButtons();
    resetArray();
  }
}

module.exports = HangMan;
