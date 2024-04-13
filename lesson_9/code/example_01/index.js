const array = ['a', 'b', 'c']
const lengthofarray = array.length
console.log(lengthofarray)
console.log(array[1])

// add/delete last element in array
array.push('d')
console.log(array)
array.pop()
console.log(array)

// add/delete first element in array
array.shift()
console.log(array)
array.unshift('A')
console.log(array)

// цыклы
for(let i = 0; i <= 10; i++){
    console.log(i)
}

const array1 = []
for(let i = 0; i <= 10; i++){
    array1.push(i)
}
console.log(array1)

const array2 = []
for(let i = 1; i <= 10; i++){
    array2.unshift(i)
}
console.log(array2)

let randA = Math.random()
console.log(randA)
console.log(Math.ceil(7.1))
console.log(Math.floor(7.9))
console.log(Math.round(10.55))

// создать массив пустой массив, запустить цикл, заполнить массив рандомными числами от 0 до 100,
// 10 элементов в массиве должно быть

const array3 = []
for (let i = 0; i <= 10; i++) {
    let random = Math.round(Math.random(i) * 100)
    array3.push(random)
}
console.log(array3)