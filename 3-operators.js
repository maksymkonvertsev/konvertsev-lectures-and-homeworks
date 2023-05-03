// конкатенація
console.log('arr' + "- object"); 

console.log(2 + 2);

console.log(2 + '2');

// додавання 
console.log(2 + + '2');

// інкремент та декремент

let incr = 10;
let decr = 10;

// постфіксна
incr++;
decr--;
console.log(incr);
console.log(decr);

// префіксна
++incr;
--decr;
console.log(incr);
console.log(decr);

// потрібно використати перед написанням
console.log(incr++);
console.log(decr--);

// префіксну не потрібно використовувати перед використанням
console.log(++incr);
console.log(--decr);

//----------------------------------------------------------------------
/// логічні оператори ///

console.log(5<2);

// остача від ділення 
console.log(5%2)

// оператори порівняння

console.log(2*4 == 8)

// спрацьовує динамічне приведення до типу
console.log(2*4 == '8')

// дані не приводить до одного типу
console.log(2*4 === '8')

// порівнює дані одного типу
console.log(2*4 === 8)

// логічні операції  типу bollean
let isChecked = true;
let isClosed = false;

// якщо обидва значення true
console.log(isChecked && isClosed)

// якщо одна зі змінних true
console.log(isChecked || isClosed)

// знак заперечення "!" (перетворює булеве значенння на протилежне)
let isChecked1 = true;
let isClosed1 = false;

console.log(isChecked1 && !isClosed1)

// приклад

let hamburger = true;
let fries = true;

if (hamburger && fries){
    console.log('Я ситий!')
}
else {
    console.log( 'Я не ситий')
}
// виконання будь-яких типів опрерацій з неявними значеннями

let hamburger1 = 5;
let fries1 = 7;

if (hamburger1 && fries1){
    console.log('Я ситий!')
}

console.log(hamburger1&&fries1)

// 5 значень які завжди будуть false 
//0, 
//пустий рядок "", 
//null, 
//undefined, 
//NaN

// хочете, щоб було або 3 гамбургери і кола, або 2 порції нагетсів і 2 картоплі фрі

let hamburgers = 2;
let cola = 2;
let nuggets = 2;
let fries2 = 1;

if (hamburgers >= 3 && cola || nuggets >= 2 && fries2 >= 2){
    console.log('всі поїли')
}