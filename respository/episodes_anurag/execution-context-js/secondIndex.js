let nameVariable = "ishan saini";
console.log(nameVariable);

function fun1() {
  console.log("Inside function-1");
  fun2();
  const fun3 = () => {
    console.log("Inside function-3");
  };
  fun3();
}


fun1();
function fun2() {
  console.log("Inside function-2");
}

console.log("End");