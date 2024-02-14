// pehli baat to ye hai ki ye ek method hai jo kaam aati hai array ke elements ko transform karne me or ye ek new Array return karta hai balki old waale ko manipulate nahi karta hai.

const numbers = [5, 45, 25,40]

const newArr = numbers.map((number) => {
  return number ** 4;
});

console.log(newArr);

// capitalize the first letter of the number array string

let fruits = ["mohan", "krishna", "Radha", "kush", "madhav"]

let capitalizeArr = fruits.map((fruit) => {
    return fruit.charAt(0).toUpperCase() + fruit.slice(1)
})
console.log(capitalizeArr);

// custom mapMethod 

let randomData = [3, 11, 34, 12, 32, 10, 9];

function randomCallback(x) {
  return x ** 3;
}

function customFilter(arr, cb) {
  let newArray = [];

  for (let index = 0; index < arr.length; index++) {
    newArray.push(cb(arr[index]))
  }

  return newArray;
}

console.log(customFilter(randomData, randomCallback));