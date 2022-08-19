//storing key values in objects
let userDetails = {
    name : "Aswin",
    age : 25,
    place: "Neyveli"

}

let required = prompt('Which detail is required','');

alert(userDetails[required])

let instance = {
    accountname: "surveysparrow",
    details:{
        instancetype: "c5a.2xlarge",
        region: "ap-south-1",
        quantity: 1,
        storage: 50
    }
}

for( let keys in instance.details){
// console.log(instance.details.instancetype)
console.log(keys, instance.details[keys])
}

//constructive functions with this method

function Project(name, tech){
    this.name = name;
    this.tech = tech
}

let pd = new Project('aswin', 'nodejs');
let pd2 = new Project('form','python');

pd.name = 'constructor'
console.log(pd)
console.log(pd2)