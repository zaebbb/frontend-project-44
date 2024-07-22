#!/usr/bin/env node
/* eslint-disable */

import readlineSync from 'readline-sync';

// Функция для генерации случайной арифметической прогрессии
// Функция для генерации случайного числа в заданном диапазоне [min, max]
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция для генерации арифметической прогрессии
const generateProgression = (length) => {
  const start = generateRandomNumber(1, 20); // начальное число случайно от 1 до 20
  const diff = generateRandomNumber(1, 10); // разность случайно от 1 до 10

  let progression = [];
  let hiddenIndex = generateRandomNumber(0, length - 1); // случайная позиция для скрытого элемента

  for (let i = 0; i < length; i++) {
    const nextNumber = start + i * diff;
    if (i === hiddenIndex) {
      progression.push('..'); // добавляем место для скрытого элемента
    } else {
      progression.push(nextNumber);
    }
  }

  const correctAnswer = start + hiddenIndex * diff; // правильный ответ на скрытый элемент
  return { progression, correctAnswer };
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

const roundsCount = 3; // количество раундов игры
const minLength = 5; // минимальная длина прогрессии

const playGame = () => {
  for (let i = 0; i < roundsCount; i++) {
    const length = generateRandomNumber(minLength, 10); // случайная длина прогрессии от 5 до 10 чисел
    const { progression, correctAnswer } = generateProgression(length);

    console.log(`Question: ${progression.join(' ')}`);
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