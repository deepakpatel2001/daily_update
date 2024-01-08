// var studentInformation = {
//     name : "raj",
//     age : 26,
//     gender: "Male",
//     discountFees : function(){
//         if(this.gender == "Male"){
//             this.discount = 20
//         }else{
//             this.discount = 30;
//         }
//     },
//     displayData : () =>{
//         studentInformation.discountFees();
//         console.log(studentInformation.name);
//         console.log(studentInformation.age);
//         console.log(studentInformation.gender);
//         console.log(studentInformation.discount);
//     }
// }

// studentInformation.displayData()

// var studentInformation1 = {
//     name : "Mohini",
//     age : 26,
//     gender: "Female",
//     discountFees : function(){
//         if(this.gender == "Male"){
//             this.discount = 20
//         }else{
//             this.discount = 30;
//         }
//     },
//     displayData : () =>{
//         studentInformation1.discountFees();
//         console.log(studentInformation1.name);
//         console.log(studentInformation1.age);
//         console.log(studentInformation1.gender);
//         console.log(studentInformation1.discount);
//     }
// }

// studentInformation1.displayData()


// see the problem if we want to use another student data then i have to create this object again and again adn all the information related to discountFees adn displayData() wheich is un


class StudentInformation{
    constructor(sName, sAge, sGender){
        (this.name = sName), (this.age = sAge), (this.gender = sGender);
    }
}

var s1 = new StudentInformation("deepak", 29, "Female");
console.log(s1);

class StudentInformation1{
    constructor(object){
        this.name = object.sName;
        this.age = object.sAge;
        this.gender = object.sGender;
    }
    displayData(){
        console.log("The name " + this.name);
        console.log("The age " + this.age);
        console.log("The gender " + this.gender);
    }
}

var s2 = new StudentInformation1({
  sName: "deepak",
  sAge: 29,
  sGender: "Female",
});

s2.displayData()