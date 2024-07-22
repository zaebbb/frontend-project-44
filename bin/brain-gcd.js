#!/usr/bin/env node
/* eslint-disable */

import readlineSync from 'readline-sync';

const gcd = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

// Функция для генерации случайного числа в заданном диапазоне [min, max]
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

const roundsCount = 3; // количество раундов игры

const playGame = () => {
  for (let i = 0; i < roundsCount; i++) {
    const number1 = generateRandomNumber(1, 100); // генерируем случайные числа от 1 до 100
    const number2 = generateRandomNumber(1, 100);
    const correctAnswer = gcd(number1, number2);

    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

playGame();