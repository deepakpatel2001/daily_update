console.log("HEllo brother i'll run frist");

setTimeout(function() {
    console.log("Hello Ji me first setTimeout Hu");
}, 3000)

console.log("Me first settimeout ke baad waala hu");

for (let i = 0; i <= 3; i++) {
  console.log(i);
}

setTimeout(function() {
    for(let i=0; i<=3; i++){
        console.log( "Inner loop of setTimout second" + i);
    }
}, 4000)

let numberVal = 140;
console.log(numberVal);