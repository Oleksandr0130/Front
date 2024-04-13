// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100. 
// Найти максимальное и минимальное значение в массиве. Вывести в консоль.

const array = []
for(let i = 0; i <= 10; i++){
    let random = Math.round(Math.random(i) * 100)
    array.push(random)
}
console.log(array)
const min = Math.min(...array)
console.log('min = ' + min)
const max = Math.max(...array)
console.log('max = ' + max)