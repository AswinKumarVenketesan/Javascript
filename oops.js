
// class
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
        return (`The name of the bike is ${this.name}.`)
    }
    }
    let bike1 = new Vehicle('xpulse', 'hero', '200cc');
    let bike2 = new Vehicle('hunter', 'royalenfield', '350cc');
    
    console.log(bike1.name); 
    console.log(bike1.getDetails());

    //encapsulation
class person{
	constructor(name,id){
		this.name = name;
		this.id = id;
	}
	add_Address(add){
		this.add = add;
	}
	getDetails(){
		console.log(`Name is ${this.name},Address is: ${this.add}`);
	}
}

let person1 = new person('Aswin',21);
person1.add_Address('Neyveli');
person1.getDetails();

//inheritance 
class member{
	constructor(name){
		this.name = name;
	}
	String(){
		return (`Name of person: ${this.name}`);
	}
}
class student extends member{
	constructor(name,id){
        super(name);
		this.id = id;
	}
	String(){
		return (`${super.String()},Student ID: ${this.id}`);
	}
}
let student1 = new student('aswin',21);
console.log(student1.String());


    
