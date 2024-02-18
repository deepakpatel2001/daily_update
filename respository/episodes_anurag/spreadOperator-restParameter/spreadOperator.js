let arr = [23,34,11,54,46]

let arr1 = [...arr]
// console.log(arr1);

function test(){
    console.log(arguments);
    let init = 0
    for(let i=0; i<arr.length; i++){
        init += arr[i]
    }
    return init
}

let res = test(...arr1)
console.log(res);