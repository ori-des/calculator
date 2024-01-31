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
    } if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}

function add(a, b) {
    if (secondOperator !== "") {
        firstNumber = screenUp.textContent = a + b;
        operator = secondOperator;
        displayOperator.textContent = operator;
        screenDown.textContent = "";
        secondNumber = 0;
        operatorOn = true;
        calculating = false;
    } else if (secondOperator === "") {
        firstNumber = screenUp.textContent = a + b;
        secondNumber = 0;
        operator = "";
        displayOperator.textContent = "";
        screenDown.textContent = "";
        operatorOn = false;
        calculating = false;
    }
};

function subtract(a, b) {
    if (secondOperator !== "") {
        firstNumber = screenUp.textContent = a - b;
        operator = secondOperator;
        displayOperator.textContent = operator;
        screenDown.textContent = "";
        secondNumber = 0;
        operatorOn = true;
        calculating = false;
    } else if (secondOperator === "") {
        firstNumber = screenUp.textContent = a - b;
        secondNumber = 0;
        operator = "";
        displayOperator.textContent = "";
        screenDown.textContent = "";
        operatorOn = false;
        calculating = false;
    }
};

function multiply(a, b) {
    if (secondOperator !== "") {
        firstNumber = screenUp.textContent = a * b;
        operator = secondOperator;
        displayOperator.textContent = operator;
        screenDown.textContent = "";
        secondNumber = 0;
        operatorOn = true;
        calculating = false;
    } else if (secondOperator === "") {
        firstNumber = screenUp.textContent = a * b;
        secondNumber = 0;
        operator = "";
        displayOperator.textContent = "";
        screenDown.textContent = "";
        operatorOn = false;
        calculating = false;
    }
};

function divide(a, b) {
    if (secondOperator !== "") {
        firstNumber = screenUp.textContent = a / b;
        operator = secondOperator;
        displayOperator.textContent = operator;
        screenDown.textContent = "";
        secondNumber = 0;
        operatorOn = true;
        calculating = false;
    } else if (secondOperator === "") {
        firstNumber = screenUp.textContent = a / b;
        secondNumber = 0;
        operator = "";
        displayOperator.textContent = "";
        screenDown.textContent = "";
        operatorOn = false;
        calculating = false;
    }
};