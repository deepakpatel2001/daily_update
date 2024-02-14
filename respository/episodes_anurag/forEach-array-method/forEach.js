// Foreach ek method hai arrays ki jo kuch return to nahi karta par ha wo iterate karta hai pure elements par array ki.

// by anonymous function
let arr = ["ram", "shyam", "krishna", "madhav", "mohan"];
arr.forEach(function (val) {
  console.log(val);
});

// by arrow function
let arr1 = [53, 25, 74, 15, 63, 11];
arr1.forEach((val) => {
  console.log(val * 3);
});


// by implicit arrow function
let arr2 = [74, 15, 63, 11];
arr2.forEach((val) => (val * 3 + 9));


// change original array's value
let arr3 = [24, 25, 563, 13];
arr3.forEach((val, index) => (arr2[index] = val * 3 + 9));
console.log(arr3);