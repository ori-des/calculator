let firstNumber = 0;
let secondNumber = 0;
let operator = "";

const display = document.querySelector('#screen-text');
const screen = document.querySelector('#screen-text-up');
const digitBtns = document.querySelectorAll('.digit');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');
display.textContent = "Hi";

clearBtn.addEventListener('click', clear);

digitBtns.forEach(button => button.addEventListener('click', digit));
operatorBtns.forEach(button => button.addEventListener('click'), )

function clear() {
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    screen.innerText = "";
}

function digit(event) {
    let dig = event.target.innerText;
    firstNumber = screen.textContent += dig;
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