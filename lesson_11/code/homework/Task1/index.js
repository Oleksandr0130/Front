// Напишите фукнцию, которая будет принимать массив. 
// Массив может содержать любые строки и числа. 
// Функция должна вернуть объект, который содержит свойства, 
// ключ и значение которых равны соответствующему элементу массива. 
// Пример работы функции:
// ['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }

function arrayToObject(arr) {
    const obj = {}
    arr.forEach(i => {
        obj[i] = i
    });
    return obj
}
const array = ['a', 36.6, 'John Doe']
const result = arrayToObject(array)
console.log(result)