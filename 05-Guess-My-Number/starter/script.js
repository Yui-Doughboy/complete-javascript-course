'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number 🎉';
/*
// how does this work the code that chagnes the content of the text
// is after the console.log this goes against my coding logic that i
// learned pIEWFAL;SDJFG;Lksadjf;owiJEG;LQHRG;LAWJSD;FGLAKSJD

// ANSWER: the only thing console .log does is print the info into
//    console so the text on the webstie is currently Start guessing...
//    when that line is being executed however at line 5 it changes
//    the content to Correct Number but the computer does this
//    in an instant so u don't see it happen

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//   }
// });
