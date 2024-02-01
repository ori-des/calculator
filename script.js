let firstNumber = 0;
let secondNumber = 0;
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
const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', clear);
digitBtns.forEach(button => button.addEventListener('click', digit));
operatorBtns.forEach(button => button.addEventListener('click', getOperator));
equalBtn.addEventListener('click', getEqual);

function getOperator(event) {
    if (!operatorOn) {
        operator = event.target.textContent;
    } if (operatorOn) {
        secondOperator = event.target.textContent;
        calculating = true;
    }
    operatorOn = true;
    displayOperator.textContent = operator;
    if (calculating) {
        operate(firstNumber, operator, secondNumber);
      }
}

function getEqual() {
    secondOperator = "";
    operate(firstNumber, operator, secondNumber);
}

function clear() {
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    secondOperator = "";
    operatorOn = false;
    calculating = false;
    screenUp.textContent = "";
    screenDown.textContent = "";
    displayOperator.textContent = "";
}

function digit(event) {
    let dig = event.target.textContent;
    if (!operatorOn) {
        firstNumber = Number(screenUp.textContent += dig);
    } if (operatorOn) {
        secondNumber = Number(screenDown.textContent += dig);
    } 
}

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
}

function add(a, b) {
    firstNumber = screenUp.textContent = a + b;
    secondNumber = 0;
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
    firstNumber = screenUp.textContent = a - b;
    secondNumber = 0;
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
    secondNumber = 1;
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
    firstNumber = screenUp.textContent = +(a / b).toFixed(2);
    console.log(typeof firstNumber);
    secondNumber = 1;
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