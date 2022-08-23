function currentTime(){
    let date = new Date()
    let hours = date.getHours()   
    let mins = date.getMinutes()
    let seconds = date.getSeconds()

    let time = hours + ":" + mins + ":" + seconds

    console.log(time)

}

currentTime()