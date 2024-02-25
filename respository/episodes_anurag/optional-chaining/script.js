const userData = {
    name: 'Deepak Patel',
    favSub: 'sanskrit',
    age: 23,
    address: {
        state: 'Madhya Pradesh',
        homeTown: 'Vidisha',
    },
};

console.log(userData.address?.name?.kiran);
console.log('Hello World!');

// same as happend with the arrays

const myArr = [
    { name: 'John', age: 23 },
    { name: 'Jasmin', age: 22 },
    { name: 'Mohini', age: 21 },
];

console.log(myArr[3]?.krishna?.love?.sunidhi)
console.log("You are right");