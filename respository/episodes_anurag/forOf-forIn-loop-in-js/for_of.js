let array = [2,34,54,65,66]

// traditional approach
for(let i=0; i<array.length; i++){
    console.log(array[i] *5);
}

// this is the second approach for of loop
for(let arr of array){
    console.log(arr*5+565);
}

// testing the for of loop for the strings,

let string = "Jay ho mere desh ki"
for(let i=0; i<string.length; i++){
    console.log(string[i]);
}

// THis is okay but this is not suitable for the pure objects