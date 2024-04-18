// // Напишите функцию, которая принимает объект и возвращает другой обьект, 
// который содержит все свойства исходного обьетка, но значения свойств - это их типы.
// Пример:

// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: 'string', '36.6': 'number', 'John Doe': 'string' }

function objectInObject (objectE) {
    const arrOfObject = Object.entries(objectE);
    const objectENew = {};
    console.log(arrOfObject);
    for (let i = 0; i < arrOfObject.length; i++) {
        objectENew[arrOfObject[i][0]] = {value: arrOfObject[i][1], type: typeof arrOfObject[i][1]};
    
    }
    return objectENew;
}
const objectW = {
    a: 'a', 
    '36.6': 36.6, 
    'John Doe': 'John Doe'
}
console.log(objectInObject(objectW));