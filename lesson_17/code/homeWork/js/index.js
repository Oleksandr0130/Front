// Сделать страничку-таймер обратного отсчета. 
// На страничке должно быть поле для ввода времени в секундах,
//  кнопка "старт" и обратный отсчет должен начаться при нажатии на кнопку.
//   Отсчет должен быть виден на страничке и обновляться каждую секунду. 
//   По окончании отсчета должен появиться тест "время вышло", 
//   или звуковое оповещение, таймер при этом должен остановиться.

const spanElement = document.querySelector('span')
const inputElement = document.querySelector('input')
const buttonStart = document.querySelector('button')

let intervalID

buttonStart.addEventListener('click', () => {
    
    const counter = Number(inputElement.value)
    let startCounter = counter
    inputElement.value = ''
    
    intervalID = setInterval(() => {
        if(startCounter >= 0){
            spanElement.innerText = startCounter
            startCounter--
        }else{
            clearInterval(intervalID)
            spanElement.textContent = "!!!!! Время вышло !!!!"
        }
    }, 1000)
})



