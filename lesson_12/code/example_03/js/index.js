// находим все элементы 
const firstInput = document.querySelector('#firstNumber')
const secondInput = document.querySelector('#secondNumber')
const resultField = document.querySelector('#result')
const getResultButton = document.querySelector('#resultButton')

// вешаем слушатель на кнопку
getResultButton.addEventListener('click', showResult)


function showResult(){
    let resultOfAdding
    resultOfAdding = +firstInput.value + +secondInput.value 
    // или с помощью Number
    resultOfAdding = Number(firstInput.value) + Number(secondInput.value) 
    resultField.innerText = resultOfAdding
}