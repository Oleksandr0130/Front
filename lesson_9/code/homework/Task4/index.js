// Объявить массив из 10 элементов и 
// заполнить его случайными числами от 1 до 50. 
// Найти сумму всех элементов массива. Вывести в консоль

const array = []
for (let i = 0; i <= 10; i++){
    let random = Math.round(Math.random(i) * 50)
    array.push(random)
}
console.log(array)
const sum = array.reduce((total, current) => total + current, 0)
console.log(sum)