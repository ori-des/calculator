let firstNumber;
let secondNumber;
let operator;

const display = document.querySelector('#screen-text');
display.textContent = "Hi";

function operate(firstNumber, operator, secondNumber) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}

function add(a, b) {
    display.textContent = a + b;
};

function subtract(a, b) {
    display.textContent = a - b;
};

function multiply(a, b) {
    display.textContent = a * b;
};

function divide(a, b) {
    display.textContent = a / b;
};