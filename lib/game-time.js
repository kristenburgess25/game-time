// var $ = require('jquery');
function HangMan() {

var levOneWords = [
  "fall",
  "cider",
  "corn",
  "acorn",
  "hay",
  "leaves"
];

var levTwoWords = [
  "autumn",
  "cranberry",
  "hayride",
  "harvest",
  "pumpkin",
  "football",
];

var levThreeWords = [
  "quarterback",
  "pilgrim",
  "cornmaze",
  "vampire",
  "werewolf",
];

var levFourWords = [
  "thanksgiving",
  "foraging",
  "foliage",
  "rustling",
  "scarecrow",
];

var levFiveWords = [
  "cornucopia",
  "autumnal",
  "persimmon",
  "baldcypress",
  "sassafras",
];

this.randomWordLevOne = function() {
  var LevOneRandomWord = levOneWords;
  return word[parseInt(Math.random()* word.length)];
};

// function randomWordLevTwo() {
//   var LevTwoRandomWord = levTwoWords;
//   return word[parseInt(Math.random()* word.length)];
// };
//
// function randomWordLevThree() {
//   var LevThreeRandomWord = levThreeWords;
//   return word[parseInt(Math.random()* word.length)];
// };
//
// function randomWordLevFour() {
//   var LevFourRandomWord = levFourWords;
//   return word[parseInt(Math.random()* word.length)];
// };
//
// function randomWordLevFive() {
//   var LevFiveRandomWord = levFiveWords;
//   return word[parseInt(Math.random()* word.length)];
// };

// function allRandomFunctions() {
//   randomWordLevOne();
//
// }


// function getAllLevelRandomWords() {
//   randomWordLevOne
// };
}

module.exports = HangMan;
