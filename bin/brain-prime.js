#!/usr/bin/env node
/* eslint-disable */

import readlineSync from 'readline-sync';

// Функция для проверки является ли число простым
function isPrime(num) {
    if (num <= 1) return false; // отрицательные числа и 0, 1 не являются простыми
    if (num <= 3) return true; // 2 и 3 - простые числа
    if (num % 2 === 0 || num % 3 === 0) return false; // исключаем кратные 2 и 3

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false; // проверяем деление на числа вида 6k ± 1
        i += 6;
    }
    return true;
}

// Функция для генерации случайного числа
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Функция для запуска игры
export function startGame() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    
    const rounds = 3; // количество раундов
    for (let i = 0; i < rounds; i++) {
        const number = generateRandomNumber(1, 100); // генерируем случайное число от 1 до 100
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');

        const correctAnswer = isPrime(number) ? 'yes' : 'no';
        if (userAnswer.toLowerCase() === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}! You've won!`);
}

startGame()
