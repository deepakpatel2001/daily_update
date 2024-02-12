// ! first way to use the HOF and Callback

// function callbackFun(){
//     console.log("Hello Callback Ji,");
// }

// function HOF(cbf){
//     console.log("Hear we will get full code");
//     console.log(cbf);

//     cbf()
// }

// HOF(callbackFun)

// ! second way is anonymous function pass, which is used mostly

function HOF(cbf) {
  console.dir("Hear we will get full code");
  console.dir(cbf);

  cbf();
}

HOF(function () {
  console.dir("Hello Callback Ji,");
});


// Checking funcion is object or not
var string = "string value"

console.log(HOF instanceof Object);
console.log([1,2,3,4] instanceof Object);

console.log(string instanceof Object);

// third way using the variable

var callBackVariable = () => {
    console.log("Hi i'm callback value");
}

function higherOrderFunction(cbv){
    console.log(cbv);
    cbv()
}
higherOrderFunction(callBackVariable)