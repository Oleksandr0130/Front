// метод forEach
const ff = (a) =>{
    console.log(`${a}`)
}
const array1 = [1, 2, 3, 4, 5, 10, 6, 9]
array1.forEach(ff)
const sum = array1.reduce((total, current) => total + current, 0)
console.log("sum = " + sum)

const arr = (a) =>{
array2.push(a + 3)
}
const array2 = []
array1.forEach(arr)
console.log(array2)

// method map
const callbackForMap = (element) => {
    return element + 4
}
const arrayMap = array1.map(callbackForMap)
console.log(arrayMap)

// возводим эначения массива в квадрат
const callBack = (elem) => {
    return Math.pow(elem, 2) 
}
const array3 = array1.map(callBack)
console.log(array3)

// method filter
const callBackFilter = (elem) => {
    // if (elem > 4){
    //     return true
    // }else {
    //     return false
    // }
    return elem > 4 ? true : false
}

const arrayFilter = array1.filter(callBackFilter)
console.log(arrayFilter)

// method slice

const arraySlice = array1.slice(0, 3)
console.log(arraySlice)

// method sort
const callBackSort = (a, b) => {
    // if (a > b){
    //     return -1
    // }else {
    //     return 1
    // }
    return (a > b ? -1 : 1)
}

const arrayCopy = [...array1]
array1.sort(callBackSort)
console.log(array1)
console.log(arrayCopy)

//===========================================
const arrayObjectSort = (object1,  object2) => {
    return object1.height < object2.height ? -1 : 1
}


const arrayObject = [
    {"name": "John", "surname": "Doe", "height": 198, "effectiveness": 15.6},
    {"name": "Jane", "surname": "Smith", "height": 183, "effectiveness": 12.3},
    {"name": "Mike", "surname": "Brown", "height": 202, "effectiveness": 18.4},
    {"name": "Emily", "surname": "Davis", "height": 190, "effectiveness": 14.8},
    {"name": "Chris", "surname": "Wilson", "height": 205, "effectiveness": 20.1}
  ]

  arrayObject.sort(arrayObjectSort)
  console.log(arrayObject)