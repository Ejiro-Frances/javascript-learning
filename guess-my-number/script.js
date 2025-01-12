'use strict';
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const checkEl = document.querySelector('.check');

const displayMessage = function (message) {
  messageEl.textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

checkEl.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('🚫 No number!');

    //   when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    numberEl.textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } //   when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage('Too high!')
        : displayMessage('Too Low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the game!');

      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
  document.querySelector('.score').textContent = score;
  numberEl.textContent = '?';
  document.querySelector('.guess').value = '';
});
