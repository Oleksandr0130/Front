console.log("Record 1")
// alert("Look at Alert")
// const num = prompt("write a number")
// console.log("Record 2")

const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')
let num = inputElement.value
console.log("You write - " + num)

const printValue = () => {
    console.log("You write - " + inputElement.value)
}
inputElement.addEventListener('input', printValue)
buttonElement.addEventListener('click', printValue)

console.log('After adding listener')

const startLoopTime = Date.now()
for (let i = 0; i < 5000_000_000; i++){

}
const endLoopTime = Date.now()
console.log(endLoopTime - startLoopTime)