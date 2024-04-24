// Написать функцию, 
// которая принимает на вход массив чисел
// и возвращает массив из тех же элементов,
// но в обратном порядке.

const array = [1, 21, 13, 4, 5, 6, 7, 56, -38, 0]

function arrayReverse (array){
    return array.reverse()
}
const result = arrayReverse(array)
console.log(result)