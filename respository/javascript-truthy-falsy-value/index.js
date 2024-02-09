let a = 0;
let b = 3;
let c = 9;

console.log(a && b); // ye hame truthy and falsy value return karta hai matlab is case me 0 ek falsy value hai to && operator ke kaaran wo use pehle hi false mila to usne 0 print kara next agar me a ko 1 bana du to fir hame jo badi value milti hai wo print hoti hai.

console.log(b && c);


console.log(a || b); // is case me hame true & false milta hai jaise ki ek bhi condition true huyi to hame true waali value milti hai

console.log(c || b);


// conclusion:- sabse pehel to dono ke dono truthy and falsy value return karte hai, dusri baat agar hamne && operator use kiya hai to fir hame second condition tak move karna padta hai then second waali value return hokar aa jaati hai whether wo first waale se chhoti hi kyun na ho, or agar hum baat kare OR operator ki to agar first value use truthy mili then wo next check hi nahi karega or agar use first value false mili to wo fir next value ko print karega.