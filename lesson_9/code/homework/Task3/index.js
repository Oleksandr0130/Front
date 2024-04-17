// Объявить массив из 10 элементов и 
// заполнить его случайными числами от 1 до 75. 
// Найти минимальное и максимальное значение в массиве. 
// Вывести в консоль их сумму.

const array = []
for(let i = 0; i <= 10; i++){
    let random = Math.round(Math.random(i) * 75)
    array.push(random)
}
console.log(array)
const min = Math.min(...array)
console.log('min = ' + min)
const max = Math.max(...array)
console.log('max = ' + max)
const sum = min + max
console.log('sum = ' + sum)