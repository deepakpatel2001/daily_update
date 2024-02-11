let first = "Learner"
let last = "Deeply"

console.log(first);
console.log(last);

sayHi();

function sayHi() {
    let sayHiVariable = "Hello hi"
    console.log(sayHiVariable);
    addition(5,6)
}

function addition(a, b) {
    let additionVariable = "Hello addition";
    console.log(`addition will be ${a+b}`);
    console.log(additionVariable);
    subtraction(9, 4);
}

function subtraction(x,y){
    let subtractionVariable = "Hello subtraction";
    console.log(`subraction will be ${x-y}`);
    console.log(subtractionVariable);
    multiply(14,12)
}

function multiply(p,q){
    let multiplier = "Hello multiplication";
    console.log(`multiply will be ${p * q}`);
    console.log(multiplier);
    division(6,3);
    return p*q
}

function division(f,g) {
    let division = "Hello division";
    console.log(division);
    console.log(`multiply will be ${f / g}`);
}