// setTimeOut function

setTimeout(`console.log("Hello Mohini ji")`, 2000) // yaha hum ek string bhi pass kar sakte hai ki but agar aap string pass karoge to aapko ek error dikhega ki not defined, and all. hame yaha ek id milti hai is setTimeout variable ki or us id ki madad se hum is settimeout ko rok sakte hai,

// we can store and can see the id for the setTimeOut variable

let time1 = setTimeout(`console.log("Hello Mohini ji")`, 2000);
console.log(time1);

// it is suggested that we shold pass the function in the settimeout instead of passing the string, for example


// most used way
let result = setTimeout( function() {
    console.log("Mohan Ji me theek hu");
}, 2200);


// second another way of passing the function to the setTimeout 
function result2(){
    console.log("Me hu callback function");
}

setTimeout(result2, 2500);

// here i'm stoping the setTimeout for starting
let timer1 = setTimeout(result2, 2500);
clearTimeout(timer1)
// this will also work for the setTimeout clearInterval(timer1)


// *-----------------------------------------------------------------

setTimeout(function(){
    console.log("Hello mera sab theek chal raha hai");
})

setTimeout(function () {
  console.log("Hello mera second time sab theek chal raha hai");
}, 0);

console.log("Hi me pehle chalung dono timeout se because i'm synchronous ");


// !----------------------------------------------------------------

let count = 0;

var result3 = setInterval(function() {
    count++;
    console.log(count);

}, 100)

clearInterval(result3) // ye use kiya jata hai stop karne ko setInterval ko.

