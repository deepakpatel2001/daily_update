let userInfo = {
    firstName : 'John',
    secondName : 'Doe',
    age : 21,
    number : 9876543
}

// hame agar objects ke data ko continous way me access karna hai to fir ham jaayenge ek loop ke saath jiska naam hai for-in loop, for-of loop was did this then it showing an error related that you can't iterate over the objects using for-of loop,

// for(var key in userInfo){
//     console.log(userInfo[key]);
// }

// ! Note one thing that when we use for in loop then it takes too much time for iterate over all teh keys,

// alternate of for-in loop, it is most best as compare to for-in loop

const keysOfObject = Object.keys(userInfo); //return all the keys of the obj.
for(let data of keysOfObject){
    console.log(userInfo[data]);
}

const directValues = Object.values(userInfo) // return value of the objects
console.log(directValues);
for(let data of directValues){
    console.log(data);
}

const keyValues = Object.entries(userInfo)
console.log(keyValues);