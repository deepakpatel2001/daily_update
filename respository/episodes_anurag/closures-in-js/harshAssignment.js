function myFunction(secondValue) {
  return function (firstVal) {
    // let total = 1
    // for(let i=1; i<=secondValue; i++){
    //     total = firstVal * total
    // }
    return firstVal ** secondValue; // second another way to this
  };
}

const cube = myFunction(3);
console.log(cube(2));
const quarter = myFunction(4);
console.log(quarter(2));

// second another way to do this

for (var i = 0; i < 3; i++) {
  function printVal(i) {
    setTimeout(() => {
      console.log(i);
    }, 300);
  }
  printVal(i);
}

/////////////////////////////////////////////////////////////////
// assignment completed successfully.
function func() {
  let firstCount = 0;
  return function () {
    if (firstCount > 0) {
      console.log("me pehle hi call ho gaya hu");
    } else {
      console.log("Hi it's my first call");
      firstCount++;
    }
  };
}

const myFunc = func();
myFunc();
myFunc();

const myFunc2 = func();
myFunc2();
myFunc2();
