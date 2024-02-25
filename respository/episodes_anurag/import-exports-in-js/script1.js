import { love, myName } from './script2.js';

console.log('hi');
console.log(myName);

function test() {
    console.log('testing of export and import...');
}

export {myName, test}
export default love

// we can not send two default exports from an file
// hame aajadi hai * ki so that we can access directly, it returns a object and then object ko fir ham .dot notation ka use karke access kar sakte hai
// jo bhi variable rehte hai modules ke wo module scope ke hokar reh jaate hai.
// name export ko hum ek saath acces kar sakte hai {} in brackets ke andar naam dekar.
// import karte waqt hame .js to likhna hi padta hai
// defer apne aap lag jata hai index.js me
// function ko hum directly export kar sakte hai using the name and default export
// hum eport and import karte waqt naam badal sakte hai variable ka import ram as shyam from './index.js'
// ek baat or ki jab hamare main me console likha hoga to wo baad me run hoga agar hamare main me koi file import kiya hai to, kyunki hamara v8 engine pehle hi check karega ki bhai me hu na, pehle me scan karunga ki agar koi file import kari hai to me pehel bahi chalaunga then console print karunga.