#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const playEvenGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswersCount = 0;
    while (correctAnswersCount < 3) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${randomNumber}`);
        const userAnswer = readlineSync.question('Your answer: ');

        const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

playEvenGame();