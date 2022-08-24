//Promise
const name = true
let available = new Promise(function(resolve, reject){
    if (name){
        resolve("It has name")
    }
    else{
        reject("It has no name")
    }
})
console.log(available)

//Promise Chain

new Promise (function(resolve, reject){
    setTimeout(()=> resolve(2), 2000)
}).then(function(result){
    console.log(result)
    return result*2
}).then(function(result){
    console.log(result)
    return result*2
}).then(function(result){
    console.log(result)
    return result*2
}).then(function(result){
    console.log(result)
    return result*2
})
