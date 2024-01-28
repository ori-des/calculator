let firstNumber;
let secondNumber;
let operator;

const display = document.querySelector('#screen-text');
const screen = document.querySelector('#screen-text-up');
const buttons = document.querySelectorAll('.digit');
const clearBtn = document.querySelector('#clear');
display.textContent = "Hi";

clearBtn.addEventListener('click', function() {
    screen.innerText = '';
})

buttons.forEach(function(button) {
    button.addEventListener('click', digit)
})

function digit(event) {
    screen.textContent = event.target.innerText;
}

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