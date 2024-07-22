#!/usr/bin/env node
/* eslint-disable */

import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to generate a random arithmetic question and its correct answer
const generateQuestion = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const number1 = getRandomInt(1, 20);
  const number2 = getRandomInt(1, 20);
  
  const question = `${number1} ${operator} ${number2}`;
  
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      break;
  }
  
  return { question, correctAnswer };
};

// Function to start and run the game
const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');

  const rounds = 3;
  let correctCount = 0;

  for (let i = 0; i < rounds; i++) {
    const { question, correctAnswer } = generateQuestion();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      correctCount++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

// Run the game
runGame();