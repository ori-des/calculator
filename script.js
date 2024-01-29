let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let operatorOn = false;

const displayOperator = document.querySelector('#screen-text');
const screenUp = document.querySelector('#screen-text-up');
const screenDown = document.querySelector('#screen-text-down');
const digitBtns = document.querySelectorAll('.digit');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');
displayOperator.textContent = "Hi";

clearBtn.addEventListener('click', clear);

digitBtns.forEach(button => button.addEventListener('click', digit));
operatorBtns.forEach(button => button.addEventListener('click', getOperator));

function getOperator(event) {
    operatorOn = true;
    operator = event.target.textContent;
    displayOperator.textContent = operator;
}

function clear() {
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    operatorOn = false;
    screenUp.textContent = "";
    screenDown.textContent = "";
    displayOperator.textContent = "";

}

function digit(event) {
    let dig = event.target.textContent;
    if (!operatorOn) {
        console.log(dig);
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
    screenUp.textContent = a + b;
};

function subtract(a, b) {
    screenUp.textContent = a - b;
};

function multiply(a, b) {
    screenUp.textContent = a * b;
};

function divide(a, b) {
    screenUp.textContent = a / b;
};