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
const deleteBtn = document.querySelector('#delete');

clearBtn.addEventListener('click', clear);
digitBtns.forEach(button => button.addEventListener('click', getInput));
decimalBtn.addEventListener('click', getInput);
equalBtn.addEventListener('click', getEqual);
deleteBtn.addEventListener('click', getDeleted);

function getDeleted() {
    let str = screenDown.textContent;
    let opStr = displayOperator.textContent;
    let str2 = screenUp.textContent;
    if (secondNumber) {
        secondNumber = Number(screenDown.textContent = str.substring(0, str.length - 1));
    } if (str.length === 0) {
        operator = displayOperator.textContent = "";
        operatorOn = false;
    } if (str.length === 0 && opStr.length === 0) {
       firstNumber = Number(screenUp.textContent = str2.substring(0, str2.length - 1));
    }
};

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

    if (operator === "÷" && !secondNumber) {
        secondNumber = 1;
    }
    if (calculating) {
        operate(firstNumber, operator, secondNumber);
    }
};

function getEqual() {
    secondOperator = "";
    if (operator === "÷" && !secondNumber) {
        secondNumber = 1;
    }
    operate(firstNumber, operator, secondNumber);
};

function clear() {
    firstNumber = null;
    secondNumber = null;
    operator = "";
    secondOperator = "";
    operatorOn = false;
    calculating = false;
    screenUp.textContent = "";
    screenDown.textContent = "";
    displayOperator.textContent = "";
    decimalBtn.addEventListener('click', getInput);
    operatorBtns.forEach(button => button.removeEventListener('click', getOperator));
};

function getInput(event) {
    let input = event.target.textContent;
    if (input === ".") {
        decimalBtn.removeEventListener('click', getInput)
    } if (!operatorOn) {
        firstNumber = Number(screenUp.textContent += input);
        operatorBtns.forEach(button => button.addEventListener('click', getOperator));
    } if (operatorOn) {
        secondNumber = Number(screenDown.textContent += input);
    }
};

function operate(firstNumber, operator, secondNumber) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } if (operator === "−") {
        return subtract(firstNumber, secondNumber);
    } if (operator === "×") {
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