let operators = document.querySelectorAll(".operator");
operators.forEach((item) => item.addEventListener("click", setOperator));

let numbers = document.querySelectorAll(".numItem");
numbers.forEach((number) => number.addEventListener("click", setNumber));

let preResult = document.getElementById("preResult");
let result = document.getElementById("result");

let equal = document.getElementById("equal");
equal.addEventListener("click", operate);

let clear = document.getElementById("clear");
clear.addEventListener("click", clearArea);

function setNumber() {
  result.textContent += +this.id;
  console.log(result.textContent);
}

let operator;
function setOperator() {
  operator = this.id;
  preResult.textContent = result.textContent;
  result.textContent = "";
  console.log(operator);
}
function add() {
  console.log(+preResult.textContent + +result.textContent);
  result.textContent = +preResult.textContent + +result.textContent;
}
function substract() {
  console.log(+preResult.textContent - +result.textContent);
  result.textContent = +preResult.textContent - +result.textContent;
}
function multiply() {
  console.log(+preResult.textContent * +result.textContent);
  result.textContent = +preResult.textContent * +result.textContent;
}
function divide() {
  console.log(+preResult.textContent / +result.textContent);
  result.textContent = +preResult.textContent / +result.textContent;
}
function operate() {
  if (operator == "+") {
    add();
    preResult.textContent = result.textContent;
  } else if (operator == "-") {
    substract();
    preResult.textContent = result.textContent;
  } else if (operator == "*") {
    multiply();
    preResult.textContent = result.textContent;
  } else if (operator == "/") {
    divide();
    preResult.textContent = result.textContent;
  }
}

function clearArea() {
  preResult.textContent = "";
  result.textContent = "";
}
