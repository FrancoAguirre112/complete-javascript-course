'use strict';

const p1Section = document.querySelector('.player--0');
const p1Name = document.querySelector('#name--0');
const p1Score = document.querySelector('#score--0');
const p1CurrentScore = document.querySelector('#current--0');

const p2Section = document.querySelector('.player--1');
const p2Name = document.querySelector('#name--1');
const p2Score = document.querySelector('#score--1');
const p2CurrentScore = document.querySelector('#current--1');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const dice = document.querySelector('.dice');

let turn = 1;

const rollDice = function () {
  let roll = Math.floor(Math.random() * 6) + 1;
  if (turn !== 3) {
    dice.src = `dice-${roll}.png`;
  }

  if (turn === 1) {
    if (roll === 1) {
      p1Section.classList.remove('player--active');
      p2Section.classList.add('player--active');
      p1CurrentScore.textContent = 0;
      turn = 2;
      return;
    }
    p1CurrentScore.textContent = Number(p1CurrentScore.textContent) + roll;
  } else if (turn === 2) {
    if (roll === 1) {
      p2Section.classList.remove('player--active');
      p1Section.classList.add('player--active');
      p2CurrentScore.textContent = 0;
      turn = 1;
      return;
    }
    p2CurrentScore.textContent = Number(p2CurrentScore.textContent) + roll;
  }
};

const holdDice = function () {
  if (turn === 1) {
    p1Score.textContent =
      Number(p1CurrentScore.textContent) + Number(p1Score.textContent);
    if (Number(p1Score.textContent) >= 100) {
      p1Section.classList.add('player--winner');
      p1Name.classList.add('player--winner');
      turn = 3;
      return;
    }
    p1CurrentScore.textContent = 0;
    p1Section.classList.remove('player--active');
    p2Section.classList.add('player--active');
    turn = 2;
  } else if (turn === 2) {
    p2Score.textContent =
      Number(p2CurrentScore.textContent) + Number(p2Score.textContent);
    if (Number(p2Score.textContent) >= 100) {
      p2Section.classList.add('player--winner');
      p2Name.classList.add('player--winner');
      turn = 3;
      return;
    }
    p2CurrentScore.textContent = 0;
    p2Section.classList.remove('player--active');
    p1Section.classList.add('player--active');
    turn = 1;
  }
};

const newGame = function () {
  turn = 1;
  p2Section.classList.remove('player--active');
  p2Section.classList.remove('player--winner');
  p2Name.classList.remove('player--winner');
  p2Score.textContent = 0;
  p2CurrentScore.textContent = 0;

  p1Section.classList.remove('player--winner');
  p1Name.classList.remove('player--winner');
  p1Section.classList.add('player--active');
  p1Score.textContent = 0;
  p1CurrentScore.textContent = 0;
};

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdDice);
btnNew.addEventListener('click', newGame);
