function sumAB(a,b){
    const sum = a + b
    return sum
}
const sum1 = sumAB(3, 4)
console.log(sum1)

// функция которая ищет макс в массиве
function maxInArray(array){
    let maxNum = Math.max(...array)
    return maxNum
    // предыдущее две строки можно заменить на одну
    // return Math.max(...array)
}

const array1 = [1, 5, 25, 10, 20]
console.log(maxInArray(array1))

// создать функцию которая принимаетмассив и возвращает новый
// где каждый элемент массива увеличен на 10
function arrayNa10(array2){
    const array3 = []
    for(let i = 0; i < array2.length; i++){
        array3[i] = array2[i] + 10
        // array3.push(array2[i] + 10)
    }
    return array3
}
const array2 = [1, 2, 3, 4, 5]
console.log(arrayNa10(array2))

// function declaration

// function arrNa10(arrA, a) {
//     const arrD = [];
//     for (let i = 0; i < arrA.length; i++) {
//         arrD.push(arrA[i]+a);
//         //arrD[i] = arrA[i]*10;
//     }
//     return arrD;
// }



// function expression - переписываем нашу функцию

// const arrNa10 = function(arrA, a) {
//     const arrD = [];
//     for (let i = 0; i < arrA.length; i++) {
//         arrD.push(arrA[i]+a);
//         //arrD[i] = arrA[i]*10;
//     }
//     return arrD;
// }

// стрелочная функции
const arrNa10 = (arrA, a = 10) => {
    const arrD = [];
    for (let i = 0; i < arrA.length; i++) {
        arrD.push(arrA[i] + a);
    }
    return arrD;
}

const arrF = [1, 8, 3, 13];

console.log(arrNa10(arrF, 20));


// стрелочная функция которая ищет макс в массиве переданном как аргумент
const maxInArr1 = (arr) => {
    return maxNum = Math.max(...arr);
}

// сократим
 const maxInArr1Short = arr => Math.max(...arr);