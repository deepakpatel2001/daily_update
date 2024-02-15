let arr = [0, undefined, null, ""]
// first example:- it will return false because it is containing falsy value.

let rest = arr.some((val) => {
    return val
})

console.log(rest);



// second example:- it will return true because it is containing falsy and truthy value because it is containing lvoe which is truthy value and on occurence of first truthy value it will return directly true and never go move forward.

let arr1 = [0, undefined, "love", 23];
let result = arr1.some((val) => {
  return val;
});

console.log(result);


let arr2 = [34,25,96,12,32,26];
let result3 = arr2.some((val) => {
    return val>99
});

console.log(result3);


let arr3 = [34,25,96,12,32,26];
let result4 = arr3.some((val) => {
    return val<26
});

console.log(result4);