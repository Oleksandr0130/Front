// template string (шаблонная строка)

const nameA = "Artur"
const strA = "Hello " + nameA
console.log(strA)

const strB = `Hello ${nameA}`
// записи в правой части выражения в строках 4 и 7 возвращают одно и тоже
console.log(strB)

// Написать стрелочную функцию, которая принимает как аргумент имя, и возвращает строку
// "My name is <name>"

const nameStr = (name) => {
    return `My name is ${name}`
}

console.log(nameStr("Aleksandr"))