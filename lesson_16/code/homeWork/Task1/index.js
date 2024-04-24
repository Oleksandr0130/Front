// // Написать функцию, 
// которая принимает на вход массив имен и возвращает массив имен,
//  начинающихся на букву "а" (большую или маленькую).

const nameArray = [
    'Aleksandr',
    'Viktorija',
    'Michail',
    'aleksej',
    'Konstantin',
    'Vladislav',
    'Andrej'
]

function nameWithA (nameArray) {
    return nameArray[0].toUpperCase() === 'A'
}
const result = nameArray.filter(nameWithA)
console.log(result)