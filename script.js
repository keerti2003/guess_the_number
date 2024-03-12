'use strict';

// Math.random gives decimal no. so we use math.trunc for integer
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//document.querySelector('.number').textContent = secretNum;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('No number !');
  } else if (guess === secretNum) {
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('.score').textContent = score;
    displayMessage('Correct Number !!!');
    // body is not a class. So no need to put '.' before 'body'
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      if (guess > secretNum) {
        displayMessage('Guess is high !');
      } else {
        displayMessage('Guess is low !');
      }
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('You lost the game !!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'black';
});
