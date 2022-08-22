let numbers = [1,2,3,4,5,6,7,8,9,10]
// let numbers2 = [10,9,8,7,6,5,4,3,2,1]


//filter in array
const evenNumber = numbers.filter(x => x < 2);

console.log(evenNumber)

//Map in a array

const addMultiply = numbers.map(add =>  add + 2).map(mult => mult * 2);

console.log(addMultiply)

//reduce in a array

const add =  numbers.reduce((total, adds) => total + adds,0)
console.log(add)

//allthree combined

const combined = numbers.filter( x => x >5)
.map(power => power ** 2 )
.reduce((total, add) => total + add, 10);

console.log(combined)

