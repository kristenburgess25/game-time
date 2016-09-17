

$('document').ready(function(){
  var wordString = getLevOneWord();
  document.querySelector('.empty-word').innerHTML = wordString.split('');
});

$('.new-word-button').on('click', function(){
  var wordString = getLevOneWord();
  document.querySelector('.empty-word').innerHTML = wordString.split('');
  })
