// Написать функцию, 
// которая принимает на вход массив чисел и возвращает их сумму. 
// Если получится использовать метод reduce

const numberArray = [1, 21, 13, 4, 5, 6, 7, 56, -38, 0]
function sumArrayElements (numberArray) {
    return numberArray.reduce((total, current) => total + current, 0)
}
const sum = sumArrayElements(numberArray)
console.log(sum)