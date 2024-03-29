// reduce ek esa function hai jo basically kaam me aata hai kisi bhi computation me isme 4 parameter hote hai with/without an initial value,

let array = [1, 2, 3, 4, 5, 6];

// wihtout initial value and my own created callback function noob practice.
function calculateSum() {
  console.log(array.reduce(myCallBackFunc));
}

function myCallBackFunc(firstIndex, secondIndex) {
  return firstIndex + secondIndex;
}

calculateSum();

// second right and pro practice with passing arrow function and the callback

const multiplier = array.reduce((acc, val) => {
  return acc * val;
}, 1);

console.log(multiplier);

// third way using the indexes

const multiplier1 = array.reduce((acc, val) => {
  return acc * val;
});

console.log(multiplier1);

// custom reduce method

const myReduceArray = [2, 4, 6, 8, 10];

function myReduce(arr, callback) {
  let accumulator

  if (accumulator == undefined) {
    for (let i = 1; i < arr.length; i++) {
        if (accumulator == undefined) {
          accumulator = callback(arr[i - 1], arr[i]);
        }else{
            accumulator = callback(accumulator, arr[i]);
        }
    }
  }else{
    for (let i = 0; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i]);
    }
  }
  return accumulator
}

function callback(prev, current) {
  return prev + current;
}

const rest = myReduce(myReduceArray, callback);
console.log(rest);