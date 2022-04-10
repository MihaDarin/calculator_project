//-----------------------------------------Numbers----------------------------------------//

let numbers = document.querySelectorAll(".numItem");
numbers.forEach((number) => number.addEventListener("click", setNumber));

let currentNumber = document.getElementById("currentNumber");

function setNumber() {
  calculationResult.textContent += +this.id;
}

//-----------------------------------------Operators----------------------------------------//

let operators = document.querySelectorAll(".operator");
operators.forEach((item) => item.addEventListener("click", setOperator));

let operator;
function setOperator() {
  operator = this.id;
  currentNumber.textContent = calculationResult.textContent;
  calculationResult.textContent = "";
}

//-----------------------------------------Operations----------------------------------------//

function add() {
  calculationResult.textContent =
    +currentNumber.textContent + +calculationResult.textContent;
}
function substract() {
  calculationResult.textContent =
    +currentNumber.textContent - +calculationResult.textContent;
}
function multiply() {
  calculationResult.textContent =
    +currentNumber.textContent * +calculationResult.textContent;
}
function divide() {
  calculationResult.textContent =
    +currentNumber.textContent / +calculationResult.textContent;
}
function operate() {
  if (operator === "+") {
    add();
    currentNumber.textContent = calculationResult.textContent;
  } else if (operator == "-") {
    substract();
    currentNumber.textContent = calculationResult.textContent;
  } else if (operator == "*") {
    multiply();
    currentNumber.textContent = calculationResult.textContent;
  } else if (operator == "/") {
    divide();
    currentNumber.textContent = calculationResult.textContent;
  }
}

//-----------------------------------------Result and Clear----------------------------------------//

let equal = document.getElementById("equal");
equal.addEventListener("click", operate);

let calculationResult = document.getElementById("result");

let clear = document.getElementById("clear");
clear.addEventListener("click", clearArea);

function clearArea() {
  currentNumber.textContent = "";
  calculationResult.textContent = "";
}
