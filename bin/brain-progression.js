#!/usr/bin/env node

import readlineSync from 'readline-sync';

// Функция для генерации случайной арифметической прогрессии
function generateProgression() {
    const length = Math.floor(Math.random() * 6) + 5; // случайная длина от 5 до 10
    const start = Math.floor(Math.random() * 20) + 1; // случайное начальное число от 1 до 20
    const difference = Math.floor(Math.random() * 5) + 1; // случайная разница от 1 до 5

    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * difference);
    }

    const hiddenIndex = Math.floor(Math.random() * length);
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    return {
        question: progression.join(' '),
        answer: hiddenValue.toString()
    };
}

// Функция для запуска игры
export default function brainProgression() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!\n`);

    console.log('What number is missing in the progression?');

    let correctAnswersCount = 0;
    const maxAttempts = 3;

    while (correctAnswersCount < maxAttempts) {
        const { question, answer } = generateProgression();

        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer === answer) {
            console.log('Correct!');
            correctAnswersCount++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${name}!\n`);
            break;
        }
    }

    if (correctAnswersCount === maxAttempts) {
        console.log(`Congratulations, ${name}!`);
    }
}

// Вызов функции для запуска игры при выполнении скрипта напрямую
brainProgression();