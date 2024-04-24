const arrayToPow = [2, 4, 6, 8, 7, 5]

const arrayMap =  (element) => {
    return Math.pow(element, 2)
}
const arrayToPowCopy = arrayToPow.map(arrayMap)
console.log(arrayToPowCopy)

const arrayMap2 = (element) => {
    return (element % 2) === 0 ? element * 2 : element
}
const array = arrayToPow.map(arrayMap2)
console.log(array)

console.log("==========================================")

const mixedArray = [2, 3, 'a', 5, 8, 'e', 10];


function changeString (element) {
    if (typeof element === 'string'){
        return 0
    } else{
        return element
    }
}
const mixedArrayNew = mixedArray.map(changeString)
console.log(mixedArrayNew)

console.log("==========================================")
let todoList = [
    { task: "Купить продукты", status: true },
    { task: "Позвонить другу", status: false },
    { task: "Почитать книгу", status: true },
    { task: "Заняться спортом", status: false },
    { task: "Изучить JavaScript", status: true },
    { task: "Подготовить отчет", status: false }
  ];

  const callBackFilter = (task) => {
    return task.status === true
  }


const arrayFilter = todoList.filter(callBackFilter)
todoList = arrayFilter
console.log(arrayFilter)