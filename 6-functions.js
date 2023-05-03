
let a = 5;
let b = 3;
let c;

c = a + b;
console.log(c)

a = 8;
b = 12;

c = a + b;


console.log(c)
// функції бувають іменовані, анонімні, можуть бути аргументом при викликанні іншої функції, маргументом
// приклад іменованої функції
function sum (a,b){
    let c = a + b;
    return c; // все, що після return не буде виконуватись
}
sum(8,12)

console.log(c)

// функція може не виводити щось в консоль
function sum (a,b){ //  параметри функції
    let c = a + b;
    return c;
    console.log(c);
    console.log('wkdhsajkhs')
}

console.log(sum(8,12))//всередині функції не параметри, а аргументи

// приклад анонімної функції

console.log(sum(8,12))

const anonimFunc = function (a,b){ //  параметри функції
    let c = a + b;
    return c;
    console.log(c);
    console.log('wkdhsajkhs')
}

anonimFunc(1,2);

// стрілочна анонімна функція

( a, b) => {
    let c = a + b
    return c
}

arrowFunc(1,2)

// уфнкція з дефолтним параметром
const funcWithDefaultParam = (a, b = 2) => {
    return (a * b);
}
console.log(funcWithDefaultParam(3,5))
console.log(funcWithDefaultParam(3))

console.log(Date());

const myRequestWithDate = (field1, timestamp = Date()) => {
    
    let requestBody = {
        someData : 1,
        someData2 : 2,
        timestamp : ''
    }

    requestBody.someData = field1;
    requestBody.timestamp = timestamp;

    return requestBody;
}

console.log(myRequestWithDate('qweqwe', '239848237423749'))
console.log(myRequestWithDate('qweqwe'))

const playWithReturnFunc = () => {
    for(let i = 0; i < 8; i++){
        console.log(i);
        if (i===6){
            return;
        }
    }
}
playWithReturnFunc();

// callback функції

function first (){
    console.log('First')
}
first();

function someFunction (){
    console.log('hello')
}
setTimeout(someFunction, 5000)

function first (){
    setTimeout(function(){
        console.log('first')
    }, 5000)
}

function second (){
    console.log('second')
}
first();
second();

function someFunctionWithCallback(param1, callbackFunction){
    console.log(`Here is my parameter: ${param1}`);
    callbackFunction();
}
someFunctionWithCallback('paramasd', function(){
    console.log('text from callback')
})

function it (testDescription, testAction){
    console.log(`Here is my description ${testDescription}`);
    testAction();
}

it('Auth test', ()=>{
    console.log('Some test actions')
}) 