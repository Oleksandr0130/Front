// Объвить массив из 10 любых элементов, заполнить. 
// Вырезать первый элемент и добавить его в конец массива.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i <= array.length; i++) {
    arrayfirst = array.shift()
    array.push(arrayfirst)
}
console.log(array)