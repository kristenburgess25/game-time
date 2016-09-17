// var $ = require('jquery');
// function HangMan() {
// require('./dom-interaction');

function HangMan(){
  this.wordArray = this.getLevTwoWordArr();
  this.word = this.getLevTwoWord();
}

HangMan.prototype.getRandomIndex = function(){
  return parseInt(Math.random() * this.wordArray.length);
}

HangMan.prototype.getLevTwoWordArr = function(){
  return this.wordArray = ['autumn','cranberry','hayride','harvest','pumpkin','football'];
}

HangMan.prototype.getLevTwoWord = function(){
  return this.wordArray[this.getRandomIndex()];
}

module.exports = HangMan;



  // function getLevTwoWord() {
  //   var levTwoWord = ['autumn','cranberry','hayride','harvest','pumpkin','football'];
  //   return levTwoWord[parseInt(Math.random()* levTwoWord.length)];
  // };
