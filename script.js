let firstNumber = null;
let secondNumber = null;
let operator = "";
let secondOperator = "";
let operatorOn = false;
let calculating = false;

const displayOperator = document.querySelector('#screen-text');
const screenUp = document.querySelector('#screen-text-up');
const screenDown = document.querySelector('#screen-text-down');
const digitBtns = document.querySelectorAll('.digit');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equal');
const decimalBtn = document.querySelector('#decimal');
const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', clear);
digitBtns.forEach(button => button.addEventListener('click', getInput));
operatorBtns.forEach(button => button.addEventListener('click', getOperator));
decimalBtn.addEventListener('click', getInput);
equalBtn.addEventListener('click', getEqual);

function getOperator(event) {
    decimalBtn.addEventListener('click', getInput);
    if (!operatorOn) {
        operator = event.target.textContent;
    } if (operatorOn) {
        secondOperator = event.target.textContent;
        calculating = true;
    }
    operatorOn = true;
    displayOperator.textContent = operator;
    if (calculating && secondNumber) {
        operate(firstNumber, operator, secondNumber);
      }
};

function getEqual() {
    secondOperator = "";
    operate(firstNumber, operator, secondNumber);
};

function clear() {
    firstNumber = 0;
    secondNumber = null;
    operator = "";
    secondOperator = "";
    operatorOn = false;
    calculating = false;
    screenUp.textContent = "";
    screenDown.textContent = "";
    displayOperator.textContent = "";
};

function getInput(event) {
    let input = event.target.textContent;
    if (input === ".") {
        decimalBtn.removeEventListener('click', getInput)
    } if (!operatorOn) {
        firstNumber = Number(screenUp.textContent += input);
    } if (operatorOn) {
        secondNumber = Number(screenDown.textContent += input);
    }
};

function operate(firstNumber, operator, secondNumber) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } if (operator === "÷") {
        return divide(firstNumber, secondNumber);
    }
};

function add(a, b) {
    firstNumber = screenUp.textContent = +(a + b).toFixed(2);
    secondNumber = null;
    screenDown.textContent = "";
    calculating = false;
    if (secondOperator !== "") {
        operator = secondOperator;
        displayOperator.textContent = operator;
    } else if (secondOperator === "") {
        operator = "";
        displayOperator.textContent = "";
        operatorOn = false;
    }
};

function subtract(a, b) {
    firstNumber = screenUp.textContent = +(a - b).toFixed(2);
    secondNumber = null;
    screenDown.textContent = "";
    calculating = false;
    if (secondOperator !== "") {
        operator = secondOperator;
        displayOperator.textContent = operator;
    } else if (secondOperator === "") {
        operator = "";
        displayOperator.textContent = "";
        operatorOn = false;
    }
};

function multiply(a, b) {
    firstNumber = screenUp.textContent = +(a * b).toFixed(2);
    secondNumber = null;
    screenDown.textContent = "";
    calculating = false;
    if (secondOperator !== "") {
        operator = secondOperator;
        displayOperator.textContent = operator;
    } else if (secondOperator === "") {
        operator = "";
        displayOperator.textContent = "";
        operatorOn = false;
    }
};

function divide(a, b) {
    if (b === 0) {
        screenUp.textContent = "lol";
    } else {
        firstNumber = screenUp.textContent = +(a / b).toFixed(2);
    }
    secondNumber = null;
    screenDown.textContent = "";
    calculating = false;
    if (secondOperator !== "") {
        operator = secondOperator;
        displayOperator.textContent = operator;
    } else if (secondOperator === "") {
        operator = "";
        displayOperator.textContent = "";
        operatorOn = false;
    }
};