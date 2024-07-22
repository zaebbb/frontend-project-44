#!/usr/bin/env node

import readlineSync from 'readline-sync';

// Функция для нахождения наибольшего общего делителя (НОД)
const gcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

const runBrainGcd = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Find the greatest common divisor of given numbers.');

    // Цикл вопросов
    let correct = true;
    while (correct) {
        const number1 = Math.floor(Math.random() * 100) + 1;
        const number2 = Math.floor(Math.random() * 100) + 1;

        console.log(`Question: ${number1} ${number2}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = gcd(number1, number2).toString();

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            correct = false;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

runBrainGcd()