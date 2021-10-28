

function sumNumbers(num1, num2){
    return num1 + num2
}

function minusNumbers(num1, num2){
    return num1 - num2
}

function multiplyNumbers(num1, num2){
    return  num1 * num2
}

function divideNumbers(num1, num2){
    return num1 / num2
}

function operate(num1, num2){
    return sumNumbers(num1, num2);
    return minusNumbers(num1, num2);
    return multiplyNumbers(num1, num2);
    return divideNumbers(num1, num2);
}

console.log(operate(4, 2));