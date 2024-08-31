// Script for Number Guessing Game

// Variables
let min = 1;
let max = 100;
let attempts = 0;

let winningNumber = getRandomNumber(min, max);

// DOM Elements
const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const restartBtn = document.getElementById('restart-btn');

// Event Listeners
submitBtn.addEventListener('click', submitGuess);
restartBtn.addEventListener('click', restartGame);

// Functions

// Generate random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Handle user guess
function submitGuess() {
    const guess = parseInt(guessInput.value);
    attempts++;
    attemptsDisplay.textContent = attempts;

    if (isNaN(guess) || guess < min || guess > max) {
        setFeedback(`Enter a number between ${min} and ${max}.`, 'red');
    } else if (guess === winningNumber) {
        setFeedback(`Congratulations! ${guess} is correct. You guessed it in ${attempts} attempts.`, 'green');
        guessInput.disabled = true;
        submitBtn.disabled = true;
    } else if (guess < winningNumber) {
        setFeedback(`Your Number is low! Try again.`, 'grey');
    } else {
        setFeedback(`Your Number is High! try again.`, 'grey');
    }
}

// Set feedback message
function setFeedback(message, color) {
    feedback.textContent = message;
    feedback.style.color = color;
}

// Restart the game
function restartGame() {
    attempts = 0;
    attemptsDisplay.textContent = attempts;
    guessInput.disabled = false;
    submitBtn.disabled = false;
    guessInput.value = '';
    feedback.textContent = '';
    winningNumber = getRandomNumber(min, max);
}
