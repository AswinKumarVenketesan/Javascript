try{
    class Bike {
    constructor(company){
    this.company =  company
    }
    present(){
        console.log(' I have bike in' + " " + this.company)
    }
}

class Model extends Bike{
    constructor(company,bikemodel){
    super(company)
    this.bikemodel = bikemodel 
    }

    show(){
        this.present()
        console.log('  And name is '+ " " + this.bikemodel)
    }
}

class Bikes extends Model{
    constructor(company,bikemodel,mills){
    super(company, bikemodel)
    this.mills = mills
    }

    details(){
        this.show()
        console.log("   Millage of the "+ this.bikemodel + " " +'is' + this.mills)
    }
}

let mybike = new Bikes( "Hero", "Xpulse", " 40 Km per litre")

mybike.details()
}
catch(err){
    console.log("this is the error" + err)
}
finally{
    console.log("Program has been excuted fully")
}