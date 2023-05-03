// if-else
if (4==9){
    console.log('Expression is true');
};
// якщо один оператор, то дужки можна не ставити, але краще так не робити
if (4==9) сonsole.log('Expression is true');

if (4==9){
    console.log('Expression is true');
}
else {
    console.log('Expression is false');
}

if (4){
    console.log('Expression is true');
}
else {
    console.log('Expression is false');
}

let num = 500;

if(num < 49){
    console.log('Error');
} else if(num > 100){
    console.log('some big number');
} else {
    console.log('OK');
}

// теренарний оператор
let num1 = 500;
(num1 === 50) ? console.log('OK') :  console.log('Error');

// switch-case

let number = 58;

switch(number){
    case 49:
        console.log('Your value is 49');
        break;
    case 50:
        console.log('Your value is 50');
        break;
     case 51:
        console.log('Your value is 51');
        break;
    case 52:
        console.log('Your value is 52');
        break;
    default:
        console.log('This is default output')
        break;
}

// якщо купуєте bmw то виводити в консоль, аналогічно для aude, mercedes, ford

let car = 'Mercedes';

let car1 = 'BMW';

switch(car){
    case car1: 
        console.log('Я тепер власник BMW');
        break;
    case 'Audi': 
        console.log('Я тепер власник Audi');
        break;
    case 'Mercedes': 
        console.log('Я тепер власник Mercedes');
        break;
    case 'Ford': 
        console.log('Я тепер власник Ford');
        break;  
    default:
        console.log('Поки хожу пішки');
        break;  
}



