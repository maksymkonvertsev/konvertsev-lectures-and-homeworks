// while
let num = 50;

while(num < 90){
    console.log(num); // infinity loop
}

let num1 = 50;

while(num1 < 90){
    console.log(num1); // infinity loop
    num1++;
}

// do - while

let num2 = 90;

do {
    console.log(num2);
    num2++;
}while(num2 < 90)

// for

for (let i = 1; i < 8; i++){
    console.log(i);
}

num = 10;
for (let i = 1; i < 8; i++){
    console.log(num);
    num++;
}

num = 10;
//num = [1,2,3,4]
for (let i = 1; i < num; i++){
    console.log(num);
    num++;
}

num = 10;
for (let i = 0; i <= 0; i--){
    console.log(num);
    num++;
}

num = 0;
for (let i = 0; i < 8; i++){
    if (num === 5){
        break;
    }
    console.log(num);
    num++;
}

num = 0;
for (let i = 0; i < 8; i++){
    if (i === 5){
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 3; i++){
    
    console.log(`i = ${i}`);
   
    for (let j = 0; j < 3; j++){
        console.log(`j = ${j}`);
    }
    
}