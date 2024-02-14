// reduce ek esa function hai jo basically kaam me aata hai kisi bhi computation me isme 4 parameter hote hai with/without an initial value,

let array = [1, 2, 3, 4, 5, 6]

// wihtout initial value and my own created callback function noob practice.
function calculateSum(){
    console.log(array.reduce(myCallBackFunc));
}

function myCallBackFunc(firstIndex, secondIndex){
    return firstIndex + secondIndex
}

calculateSum()

// second right and pro practice with passing arrow function and the callback

const multiplier = array.reduce((acc, val) => {
    return acc * val
}, 1)

console.log(multiplier);


// third way using the indexes 

const multiplier1 = array.reduce((acc, val) => {
    return acc *val;
})

console.log(multiplier1);