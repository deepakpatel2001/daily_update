// ye method use hoti hai taaki hum filter kar sake element ko according to some condition either true or false basis, condition ke true hone par naye array me element ko add kar diya jaata hai or agar element flase huyi to fir add nahi karta and then this continous work karta hai, ek baat or ki hum chaining bhi kar sakte hai kyunki jo bhi return hota hai wo hame aaram se line ko repetition se bachata hai.

// first example:-

let months = ["jan", "feb", "March", "may", "december"];

const data = months.filter((val) => {
  return val.includes("M") || val.includes("m");
});

console.log(data);

// second example:- 

let students = [
  {
    name: "Krishna",
    age: 16,
  },
  {
    name: "Mohan",
    age: 32,
  },
  {
    name: "Shiva",
    age: 17,
  },
  {
    name: "Madhav",
    age: 36,
  },
  {
    name: "Ram",
    age: 13,
  },
];
const res = students
  .filter((studentAge) => {
    return studentAge.age >= 18;
  })
  .map((studentName) => {
    return studentName.name;
  });

console.log(res);


// custom filter method wihout using the prototype

let randomData = [23, 11, 34,12, 32, 10, 9]

function randomCallback(x){
    return x > 18;
}

function customFilter(arr, cb){
    let newArray = [];

    for (let index = 0; index < arr.length; index++) {
        const res = cb(arr[index])
        if(res){
            newArray.push(arr[index])
        }
    }

    return newArray;
}

console.log(customFilter(randomData, randomCallback));