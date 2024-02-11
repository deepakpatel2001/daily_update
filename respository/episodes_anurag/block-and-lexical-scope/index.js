// * lexical scope ka matalb hota hai ki bhai inner element can access the itself value and also the parent and grandparent means at teh global level.
// debugger;
let firstName = "Deepak";
const secondName = "Patel";

add();
function add() {
  const a = 10;
  const b = 20;
  const addRes = a + b;
  console.log("add result is " + addRes);
//   console.log(meGlobalHu);

  function subtract() {
    console.log(firstName);
    const c = 20;
    const d = 10;
    const subtractRes = addRes - c - d;
    console.log("subtract result is " + subtractRes);

    if (true) {
      let greeting = "Hii " + firstName;
      var mohan = "another person"
      console.log(greeting);
      meGlobalHu = 150;
    }

    console.log(mohan);

    function multiply() {
      console.log(secondName);
      let e = 14;
      let f = subtractRes;
      const multRes = e * f;
      console.log("multiply's result is " + multRes);
      console.log(mohan);

      function division() {
        console.log(c);
        let g = 240;
        let h = multRes;

        const divRes = g / h;
        console.log("division result is " + divRes);
      }
      division();
    }
    multiply();
  }
  subtract();

  meGlobalHu = 150;
}
