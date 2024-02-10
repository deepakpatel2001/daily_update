let object1 = {
  userName: "deepak",
  userNameLastName: "patel",
};

let userInfo = { // here i have created the object
  userName: "deepak",
  userNameLastName: "patel",
  pata: {
    city: "indore",
    state: "M.P.",
    moreinfo: {
        age : 28,
        population : 234324234
    }
  }
};

console.log(userInfo.userName); // accessable the userInfo's username read

userInfo.userName = "Mohan"

console.log(userInfo.userName); // here updated value will be print and     all time it will be fixed for the object

delete userInfo.userName; // here i have deleted the userName- key

// ! important freeze vs seal method in object

Object.seal(userInfo) // * by using this we are not able to delete the key and also not able to add new value in the userInfo object but we can update the object value and key, means only update can be done.

Object.freeze(userInfo) // * now we will not able to perform crud opertion in the userInfoo object. by using this we will also not able to update the value in the userInfo object
