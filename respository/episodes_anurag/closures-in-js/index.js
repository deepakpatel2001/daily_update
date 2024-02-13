// starting learning closures
// Step1 - we can create a function and can call it 

function startlearning(){
    console.log("started");
}

startlearning()

// ===========================================================================================================================================================


// Step2 - we can return a value from function and we need to store return value so we use a variable.

function returnNumber(num1, num2){
    return num1+num2;
}

const add = returnNumber(12, 13)
console.log(add);

// ===========================================================================================================================================================

// step3 - as we can return number then we can return a array also 

function returnArray(num1, num2){
    return arguments
}

const arr = returnArray(14, 20)
console.log(arr);
console.log(arr[0])
console.log(arr[1])

// ===========================================================================================================================================================

// step4 as we can return the array so we can also able to return the object

function returnObject(name, surname){
    return {
      firstName: name,
      lastName: surname,
    };
}

const obj = returnObject("Mohan", "Sharma")
console.log(obj);
console.log(obj.firstName);
console.log(obj.lastName);

// ===========================================================================================================================================================

// step5 as we can return the object then function is also an object so we can return a function, let's start do this,

// 1 way where we are creating a function an then returning, so let's do this

// function fun(){
//     function add(){
//         const result = 15 + 16
//         return result
//     }
//     return add
// }

// const funResult = fun()
// console.log(funResult());

// 2 way instead creating the function we directly going to use function as return without name by a anonymous function

function fun() {
  
  return function() {
    const result = 15 + 16;
    return result;
  };
}

const funResult = fun();
console.log(funResult);
console.log(funResult());

// ===========================================================================================================================================================

// step6: now we are going to deep down some more lexical scoping

function lexFun(num1, num2) {
  const number1 = num1;
  const number2 = num2
  function lexInnerFun() {
    console.log(number1 + number2);
  };
  lexInnerFun()
}

const returnLexFun = lexFun(18,19)
console.log(returnLexFun); 

// ===========================================================================================================================================================

// step7 : now we wiil move some more in depth as we are accessing the variable of outerFunction in innerFuncion okay, then can we returnt the function inner with value of outerFunction tbebn what will happen let's go

function outerFunction(){
    let closnumber1 = 10;
    let closnumber2 = 244;

    function innerFunctionClose(){
        const result = closnumber1 + closnumber2;
        return result;
    }

    closnumber1 = 100 // this line indicaing that we are going to use the referecence of the outerfunction's variable
    return innerFunctionClose;
}

const innerFunctionData = outerFunction()
console.log(innerFunctionData);
console.log(innerFunctionData());


/* Special Note: bro hear if you go to console and then check the tab sources and there you will find an scope like closure, CLOSURE!

What is Closure?
Clsoure is nothing but when teh innerfunction accessing the outerfunction's value and then returning it's itself and we know that outerFunction data will be finished but the inner function is still accessing the outerfunction's value, ye kaise ho gaya kyunki outer uda to inner ki bhi value udh jaani chahiye thi par abhi to mil rahi hai to ye kamaal sirf ek clsoures ka hai, ab yaha jo inner function ke variables ko value mile hai wo reference hai outer function ke data, or ek important baat ki jab koi function koi dusra function return karta hai to wo ek higher order function kehlata hai means yaha outerFunction is the HOF.
*/