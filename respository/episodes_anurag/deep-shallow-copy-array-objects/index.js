/* ! here both referencing to the same address but now this is the problem that we want to update a value of the second array but first also get refer to resolve this problem we go with the shallow and deep copy.

let arr = [
    ["deep", "mohan", "vasudev", ["deepak", "mohini", "vasu"]]
]

let newArr = arr
console.log(newArr);

newArr[0][2] = "Krishna"

*/


// examples of shallow copies
let arr = [["deep", "mohan", "vasudev", ["deepak", "mohini", "vasu"]]];

console.log(arr);

/* here we are performing the shallow copy: 1 way usigng Object.assign()
let targetArr = []
Object.assign(targetArr, arr)
console.log(targetArr);

targetArr[0][3][0] = "Patel"
*/


// * ---------------------------------------------------------------


/* here we are performing the shallow copy: 2nd way using spread operator
let targetArr = [...arr]
console.log(targetArr);

targetArr[0][3][0] = "Patel"
*/


// ! if we want to perform the deep clone because by using spread and object.assign we can only do one level of cloning then we have a method which is structuredClone(arrName)

let targetArr = structuredClone(arr)

targetArr[0][3][0] = "Patel";
console.log(targetArr);

// ! second another way is to do this is using the json stringify and json parse