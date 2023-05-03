/*
    1. Прості типи або примітивні
        - string (Текст)
        - number (число)
        - boolean (логічний тип)
        - null 
        - undefined
        - Symbol
        - bigint

--------------------------------
    2. Обʼєкти

    - обʼєкт {}
    - масиви
    - обʼєкт дати
    - регулярні вирази
    - помилки
--------------------------------
*/

let number = 5;
let floatNumber = 5.5;

// infinity, NaN
console.log(-4/0)
console.log(4/0)

console.log('string' * 4)

// boolean

let isExist = true; //false

// null, undefined

console.log(weqwe);

let value = null;
console.log(value);

let value2;
console.log(value2);

// object

let obj = {};

let person = {
    name: "Maksym",
    age: 23,
    status: {
        qwe1 : 123,
        qwe2 : 1234
    }
};
console.log(person.status.qwe1);

let person1 = new Object();
person1.name = "Maksym 2";
person1.age = 24;

//console.log(person);
//console.log(person1);

// tпревірити знову
console.log(`Name: ${person1.name}`)
console.log(`Age: ${person1.age}`)

let endpoint = 'help';
console.log(`https://someurl/${endpoint}`)

//Array

let arr = ['text', 'some text', 6, {name : 123}, []]
console.log(arr[1])
console.log(arr[4])

let numArr = [1,2,3];
let numObj = {
    a:1,
    b:2,
    c:3
};

console.log(numArr[0]);
console.log(numObj.a);

let salary = {
    'Anna': 1000,
    'Vlada': 1200
};

let salaryArr = ['Anna', 1000, 'Vlada', 1200]
let someArrObj = {
    0: 'Anna',
    1: 1000,
    2: 'Vlada',
    3: 1200
};
console.log(salaryArr[0])
console.log(someArrObj[0])

let someArrObj1 = {
    a: 'Anna',
    b: 1000,
    c: 'Vlada',
    d: 1200
};
console.log(`b1: ${someArrObj1["b"]}`)

someArrObj1.b = 2000;
console.log(`b2: ${someArrObj1["b"]}`)

// Вивід в консоль
let someText = " Hello World! ";
console.log(someText.length)
console.log(someText.substring(0, 6));
console.log(someText.toUpperCase());
console.log(someText.toLowerCase());
console.log(someText.indexOf('o'));

console.log(someText[1])
