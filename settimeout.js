console.log("start")

setTimeout(() => {
    console.log("middle")
}, 3000);

let start = setInterval(() => {
    console.log("start")
}, 2000);

setTimeout(() => {
    clearInterval(start);
    console.log("stop")
}, 10000);
