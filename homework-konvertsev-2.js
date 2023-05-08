//1.  Ви прийшли в Макдональдз з трьома друзями.
//   Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//    то виводити в консоль текст "Ми йдемо в інше кафе"
//    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

 let hamburger = 4;
 let fries = 1;

 if (hamburger >= 4 && fries >= 1){
    console.log('Ми поїли')
 } else {
    console.log('Ми йдемо в інше кафе')
 }

//2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//    Результат виводити в консоль.

let price = 999;

if (price >= 1000 && price <= 1900){
    console.log('Ціна товару знаходиться між 1000 та 1900 включно')
}else {
    console.log('Ціна товару не знаходиться між 1000 та 1900 включно')
}


//3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//    Результат виводити в консоль.

let price1 = 1200;

if (price1 < 1000 || price1 > 1900){
    console.log('Ціна товару не знаходиться між 1000 та 1900 включно')
}else {
    console.log('Ціна товару знаходиться між 1000 та 1900 включно')
}

//---------------------------------------------------------------------

let price2 = 999;

if (!(price2 >= 1000 && price2 <= 1900)){
    console.log('Ціна товару не знаходиться між 1000 та 1900 включно')
}else {
    console.log('Ціна товару знаходиться між 1000 та 1900 включно')
}

//4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//    Результат виводити в консоль.

let season = 3;
if (season === 1){
    console.log('Зима')
}else if(season === 2){
    console.log('Весна')
}else if(season === 3){
    console.log('Літо')
}else if(season === 4){
    console.log('Осінь')
}else if(season < 1 || season > 4){
    console.log('Такого номеру пори року немає)')
}

//5.  Задано 3 числа (a, b, c), які не рівні між собою.
//    Визначити середнє мід цими трьома числами
//    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//    Використати вкладені оператори if
//    Результат виводити в консоль.

let a = 1;
let b = 3;
let c = 2;

if (a > b) {
    if (b > c){
        console.log('b середнє число')
    } else if (c > a){
        console.log('a середнє число')
    } else {
        console.log('c середнє число')
    }
} else {
    if (a > c) {
        console.log('а середнє число')
    } else if (b < c){
        console.log('b середнє число')
    } else {
        console.log('с середнє число')
    }
}

//6.  Задано номер дня тижня.
//    За заданим номером вивести назву дня тижня використовуючи switch.
//    Результат виводити в консоль.

let day = 3;

switch(day){
    case 1: 
        console.log('Понеділок');
        break;
    case 2: 
        console.log('Вівторок');
        break;
    case 3: 
        console.log('Середа');
        break;
    case 4: 
        console.log('Четвер');
        break;
    case 5: 
        console.log('Пʼятниця');
        break;
    case 6: 
        console.log('Субота');
        break;
    case 7: 
        console.log('Неділя');
        break;
    default:
        console.log('Такого номера дня тижня не існує');
        break;  
}

//7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//    Математичні операції для обчислення: "+", "-", "*", "/".
//    Результат виводити в консоль.

let num1 = 4;
let num2 = 5;
let math = "*";
let result;

switch(math){
    case "+": 
        console.log(num1 + num2);
        break;
    case "-": 
        console.log(num1 - num2);
        break;
    case "*": 
        console.log(num1 * num2);
        break;
    case "/": 
        console.log(num1 / num2);
        break;  
    default:
        console.log('Такого символу математичної операції не існує');
        break;  
}

//8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let word = "Максим Конверцев";
let result1;
result1 = word.replace(/[аоуиіе]/gi, "");
console.log(result1);

//9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//    так щоб в консоль виводився результат обчислень з правильним закінченням.
//    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

  let meters = 34;
  let kilometers = meters/1000;
  let lastDigitMeter = meters % 10;
  let lastDigitKilometer = kilometers ;

  if (lastDigitMeter == 0){
    console.log(meters + ' метрів це ' + kilometers + ' кілометр')
  } else if (lastDigitMeter == 1){
    console.log(meters + ' метр це ' + kilometers + ' кілометр')
  } else if (lastDigitMeter == 2){
    console.log(meters + ' метри це ' + kilometers + ' кілометри')
  } else if (lastDigitMeter == 3){
    console.log(meters + ' метри це ' + kilometers + ' кілометри')
  } else if (lastDigitMeter == 4){
    console.log(meters + ' метри це ' + kilometers + ' кілометри')
  } else if (lastDigitMeter == 5){
    console.log(meters + ' метрів це ' + kilometers + ' кілометрів')
  } else if (lastDigitMeter == 6){
    console.log(meters + ' метрів це ' + kilometers + ' кілометрів')
  } else if (lastDigitMeter == 7){
    console.log(meters + ' метрів це ' + kilometers + ' кілометрів')
  } else if (lastDigitMeter == 8){
    console.log(meters + ' метрів це ' + kilometers + ' кілометрів')
  } else if (lastDigitMeter == 9){
    console.log(meters + ' метрів це ' + kilometers + ' кілометрів')
  }
