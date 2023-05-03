// змінна, яку не можна змінювати
const userScore = 1000;
// змінна починатись на цифру не може, в назві можуть бути: $,_,цифри та букви
let number1;
// є певні слова, які зарезервовані від назви змінних: alert, exception, case...
// змінні записуються в паттерні camelCase
// snake_case
// UPPER_SNAKE_CASE
// kebab-case
// PascalCase
// назви змінних чутливі до реєстру
let nUmber = 1;
let number = 5;
console.log(number)

number = 12;
console.log(number)

const userScore1 = 1000;
console.log(userScore1)

userScore1 = 12;
console.log(userScore1)

const obj = {
    age: 20
}
console.log(obj)
obj.age = 30;
console.log(obj)
//obj = 40;
//console.log(obj)

var firstName = "maksym"
let secondName = 'konvertsev'
console.log(firstName,secondName)

{
    let result = 50;
}
console.log(result)

{
    var result1 = 50;
}
console.log(result1)


// приклад в якому  потрібна ʼ;ʼ
alert();
[].push('a')

// як змінні називати не потрібно
let a = 3000;
let b = 2000;

console.log("Ширина авто: " + a + ", довжина авто: " + b)


// як змінні потрібно називати
let vehicleBodyLength =  3000;
let vehicleBodyWidth = 2000;
console.log("Ширина авто: " + vehicleBodyWidth + ", довжина авто: " + vehicleBodyLength)


// потрібно притримуватись лоігки назв змінних 