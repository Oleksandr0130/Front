function objectInString (objectB) {
    const arrOfObject = Object.values(objectB);
    let string1 = "";
    console.log(arrOfObject);
    for (let i = 0; i < arrOfObject.length; i++) {
        // =========Пример 1==========
        string1 = `${string1}${arrOfObject[i]}${(i === arrOfObject.length - 1) ? '' : ', '}`
        
        // =========Пример 2==========
        // string1 = i === arrOfObject.length - 1
        // ? `${string1}${arrOfObject[i]}`
        // : `${string1}${arrOfObject[i]}, `

        // ========Пример 1=========
        // if (i === arrOfObject.length - 1) {
        //     // string1 = string1 + arrOfObject[i];
        //     string1 = `${string1}${arrOfObject[i]}`
        // } 
        // else {
        //     // string1 = string1 + arrOfObject[i] + ", ";
        //     string1 = `${string1}${arrOfObject[i]}, `
        // }
        
    
    }
    return string1;
}
const objectF = {
    a: 'a', 
    '36.6': 36.6, 
    'John Doe': 'John Doe'
}
console.log(objectInString(objectF));