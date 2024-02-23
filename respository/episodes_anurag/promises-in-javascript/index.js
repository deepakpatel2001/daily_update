const prom = new Promise((res, rej) => {
    return res('Hello world!');
});

setTimeout(() => {
    console.log("Me setTimeOut function hu");
}, 0);

prom.then((data) => {
    console.log(data);
})

const thrid = prom.then((data,rej) => {
    rej("Me third ka rejected hu")
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
console.log(thrid);

// second example with reject
const prom1 = new Promise((res, rej) => {
    rej('rejected!');
});

prom1.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});