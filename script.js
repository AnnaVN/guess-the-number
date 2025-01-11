'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#4B0082';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = "That's not a number!";
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct!';
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        y: 0.6,
      },
    });
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#2E8B57';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.highscore').textContent =
      score > highscore ? score : highscore;
    // if (score > highscore) {
    //   highscore = score;
    //   document.querySelector('.highscore').textContent = highscore;
    // }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? "It's too high!" : "It's too low!";
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'No more guesses. You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
