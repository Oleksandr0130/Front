const spanElement = document.querySelector('span')

let counter = 10

console.log("Before setInterval")
const startIntervalTime = Date.now()
const timeHandler = () =>{
    // console.log('Output after 2000 msec' + (Date.now() - startIntervalTime))
    // spanElement.innerText = (Date.now() - startIntervalTime)
    // if ((Date.now() - startIntervalTime) > 5000){

    //     clearInterval(intervalID)
    // }
    if (counter >= 0){
        spanElement.innerText = counter
        counter--
    }else{
        clearInterval(intervalID)
    }
}
const intervalID = setInterval(timeHandler, 2000)


console.log("after start function setTimeout")

