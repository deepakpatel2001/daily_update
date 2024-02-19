let arr = [12, 31, 101, 11, 15];

//older way

function total() {
    let accumulator = 1;
    for (let index = 0; index < arguments.length; index++) {
        accumulator = cb(accumulator, arguments[index]);
    }
    return accumulator;
}
function cb(acc, val) {
    return acc * val;
}
const res = total(12, 31, 101, 11, 15);
// console.log(res);


// new updated way
let arr1 = [1, 2, 3, 4, 5, 6, 7]
let sum = (...arr1) /* rest parameter */ => arr1.reduce((acc, val) => acc+val, 0)
console.log(sum(...arr1));// spread operator


