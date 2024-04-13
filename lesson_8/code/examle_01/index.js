// console.log("Hello");

// Типы данных
// string - строка
// number - число
// bigInt - большое число
// boolean true или false
// undefined - не определен (не найден)
// null - ничего(пусто)
// symbol 
// object - ссылочный тип данных

// var // let // const

// var a = 'Hello i am string';

// let - для изменения значения переменной

// let b = 'i am b';
// b = 'not b am i';

// const

// const b = 'i am b';
// b = 'not b am i';
// console.log(b);

// let p = 5;
// let pp = p;
// p = 6;
// console.log(pp);

// let arr = [1, 2, 3];
// let arrB = arr;
// arr = [1, 2, 3, 4];
// console.log(arrB);

// const arr = [1, 2, 3];
// const arrB = arr;
// console.log(arr)
// arr.push(4);
// console.log(arr);
// console.log(arrB);

const arrA = [1, 2];
const arrB = [1, 2];

const a = 'a';
const b = 'a';

// console.log(arrA === arrB);
// console.log(a === b)

console.log(typeof a);

const c = 5;
const d = '5';
console.log(c === d);
console.log(c == d);

// console.log(typeofd);
// console.log(typeof Number(d));

console.log('=====To String=====')
// 1. to string 
console.log(String(5));
console.log(String(null));
console.log(String(undefined));

console.log('=====To Boolean=====')
// 2. to boollean
console.log(Boolean('5'));
console.log(Boolean(''));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(undefined));
console.log(Boolean(null));

console.log('=====To Number=====')
// 3. to number
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(''));
console.log(Number('str'));

// typeof null
console.log(typeof null);

// non-strict comparison (== / !=)
console.log('====non-strict comparison====')
console.log(6 == '6')
console.log(6 != '6')
console.log(null == '0')

// comparison null & underfined / не приводит к числу
console.log('====comparison null & underfined====')
console.log(null == undefined)