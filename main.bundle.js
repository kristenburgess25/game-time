/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const hangMan = __webpack_require__(1);
	__webpack_require__(2);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// var $ = require('jquery');
	// function HangMan() {
	__webpack_require__(2);

	function getLevOneWord() {
	  var levOneWord = new Array('fall', 'cider', 'corn', 'acorn', 'candy', 'leaves');
	  var newLevOneWord = levOneWord[parseInt(Math.random() * levOneWord.length)];
	  return newLevOneWord;
	};

	function getLevTwoWord() {
	  var levTwoWord = ['autumn', 'cranberry', 'hayride', 'harvest', 'pumpkin', 'football'];
	  return levTwoWord[parseInt(Math.random() * levTwoWord.length)];
	};

	function getLevThreeWord() {
	  var levThreeWord = ['qurterback', 'pilgrim', 'cornmaze', 'vampire', 'werewolf'];
	  return levThreeWord[parseInt(Math.random() * levThreeWord.length)];
	};

	function getLevFourWord() {
	  var levFourWord = ['thanksgiving', 'foraging', 'foliage', 'rustling', 'scarecrow'];
	  return levFourWord[parseInt(Math.random() * levFourWord.length)];
	};

	function getLevFiveWord() {
	  var levFiveWord = ['cornucopia', 'autumnal', 'persimmon', 'baldcypress', 'sassafras'];
	  return levFiveWord[parseInt(Math.random() * levFiveWord.length)];
	};

	// module.exports = HangMan;

/***/ },
/* 2 */
/***/ function(module, exports) {

	

	$('document').ready(function () {
	  var wordString = getLevOneWord();
	  document.querySelector('.empty-word').innerHTML = wordString.split('');
	});

	$('.new-word-button').on('click', function () {
	  var wordString = getLevOneWord();
	  document.querySelector('.empty-word').innerHTML = wordString.split('');
	});

/***/ }
/******/ ]);