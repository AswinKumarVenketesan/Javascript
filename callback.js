//CALLBACK
function foodOrder(pizzaname, callback){
    console.log('your order'+ " " + pizzaname)
    callback()
    
}

function restaurants(){
    console.log("your ordered has been placed")
}


foodOrder("cheesePizza", restaurants)
