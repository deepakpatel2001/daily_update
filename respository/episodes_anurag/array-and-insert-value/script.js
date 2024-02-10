// ! first thing get completed means i have undersetand and get the idea taht both object and array get value same or behaves same

let arr1 = ["Anurag", "vishal", "rajesh", "deepak", "mohan"];

let arr2 = ["Anurag", "vishal", "rajesh", "deepak", "mohan"];

let string1 = "krishna Mohan"
let string2 = "krishna Mohan"


// ! second task get completed means we can able to do this but the size of the array will be exact the value which is passed as right manner.
arr1.firstName = "Krishna Mohan";
console.log(arr1);

let arr3 = arr1
arr3[3] = 28


// ! third task related to array's method so i know almost every method so let's get start. other than following we will discuss that after some time 
// push()
// pop()
// unshift()
// shift()
// includes()
// indexOf()
// slice()
// splice()

// ! concept of multiDimensional arrays

let mulDiArr = [
  ["anurag", "mohan", "krishna", "basudev", ["deepak", "radha", 'rani']],
  ["maa saraswati", "vinavadini", "gyanPradayni", "surDevi"],
  ["ram", 'parsuram', 'kapil muni', 'nar-narayan']
];

console.log(mulDiArr[0][2]) // krishna
console.log(mulDiArr[2][0]) // ram
console.log(mulDiArr[1][0]);// maa saraswati
console.log(mulDiArr[1][2]);// gyanPradayni

// now i want to access radha how i can do this

console.log(mulDiArr[0][4][1]); // radha