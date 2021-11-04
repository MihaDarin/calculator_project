let buttons = document.querySelectorAll('.calc');
let plusOperator = document.querySelector('.operator');
plusOperator.addEventListener('click', operation);
let result = document.getElementById('result');
let total = document.getElementById('=');
total.addEventListener('click', totalClick);
let array = [];
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        console.log(button.id);
        result.textContent += button.id;
        array.splice(0, 0, button.id);
        console.log(array);
    });
});

function summ(array){
    let summa = array.reduce((prev, curr) => prev + curr, 0);
    return summa;
}
console.log (summ(array));

function minus(array){
    let substract = array.reduce((prev, curr) => prev - curr, 0);
    return substract
}
console.log (minus(array));

function multiply(array){
    let mult = array.reduce((prev, curr) => prev * curr, 1);
    return mult;
}
console.log (multiply(array));

function divide(array){
    let divider = array.reduce((prev,curr) => prev / curr, 1);
    return divider;
}
console.log (divide(array));

function operation(){
    if(plusOperator.id == "+"){
       summ(array)
        console.log(summ(array));
    }
};
function totalClick(){
    if(total){
        result.textContent = summ(array);
    }
};