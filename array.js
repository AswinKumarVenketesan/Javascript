let devopsTools = ["newrelic","uptime","pingdom","grafana"];
 console.log(devopsTools[1])

 devopsTools[3] = "promothes"

 console.log(devopsTools)
 console.log(devopsTools.length)

 // using at in array

 console.log(devopsTools.at(-1))


 // Datatype set
const name = ["aswin","kumar","aswin","kumar"]
 let details = new Set(name);

 console.log(details)

 //add, delete, has and size in set

 details.add("pradeep")

 console.log(details)

 details.delete("kumar")

 console.log(details)

console.log(details.has(6))

console.log(details.size)


//Datatype Map

const emp = new Map([ ['name', 'aswin'],['gender', 'male'] ])

console.log(emp)


//Object.keys, values, entries


let movies = {
    moviename : "vikram",
    releasedate: 2022,
    actor : "kamalhassan"
}

console.log(Object.keys(movies))
console.log(Object.values(movies))
console.log(Object.entries(movies))


//Destructing assignment

let phones = ['nokia','sumsung','motorola','redmi']

let [ Bestphone, Budgetphone, Valuebuying, Chinesephone ] = phones

console.log(Bestphone)


const date = new Date();
console.log(date)
