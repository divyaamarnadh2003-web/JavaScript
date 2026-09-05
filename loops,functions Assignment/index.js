// Section 1 - Basic Loops

// part A - for Loop
//question -1 (Print Numbers )

for (let i = 1; i <= 10; i++) { 
console.log(i); 
} 


console.log("---------------------------");

//question - 2 (Print Even Numbers )

for (let i = 2; i <= 20; i++) {
    if(i % 2 == 0)
    console.log(i);
}

        //   or


 for (let i = 2; i <= 20; i += 2) { 
console.log(i); 
}


console.log("---------------------------");

//question - 3 (Print Odd Numbers )

for (let i = 0; i <= 20; i++) {
    if(i % 2 != 0)
    console.log(i);
}


console.log("---------------------------");


//question - 4 (Reverse Counting)

for (let i = 10; i >= 1; i--) { 
console.log(i); 
} 


console.log("---------------------------");

//question - 5 (Sum of Numbers)

let sum = 0;
for(let i=1; i <= 10; i++){
    sum += i
}
console.log(sum);


console.log("---------------------------");

//question - 6 (Multiplication Table)

let num = 5; 

for(let i=1; i <= 10; i++){
console.log(`${num} x ${i} = ${num * i}`);
}


console.log("---------------------------");

//part - B  while Loop 

//question - 7 (Basic while Loop)

let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}


console.log("---------------------------");


//question - 8 (Sum of Even Numbers)


let sum1 = 0;
 let n = 2;
 while(n <= 20){
    sum += n;
    n += 2;
}
console.log(sum);


console.log("---------------------------");

//question - 9 (Stop the Loop Using break)

let number = 1;
while(number <= 10){
    if(number === 6){
        break;
    }
    console.log(number);
    number++
}


console.log("---------------------------");

//question - 10 (Skip a Number)

let numbers = 1;

while(numbers <= 10){
    if(numbers === 5){
        numbers++;
        continue;
    }
    console.log(numbers);
    numbers++
}


console.log("---------------------------");

// Section 2 - Functions 

//question - 11 (Function with a Parameter)


function greetUser(name){
    console.log(`Hello, ${name}`);
} 
greetUser("Rahul");


console.log("---------------------------");

//question - 12 (Add Two Numbers)

function addNumbers(a, b){
    return a + b; 

}
let result = addNumbers(10, 20);
console.log(result); 


console.log("---------------------------");


//question - 13 (Even or Odd Function)

function checkEvenOdd(n){
    if(n % 2 == 0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
checkEvenOdd(9);


console.log("---------------------------");


//question - 14 (Square of a Number)

function squareOfNum(sq){
    return sq * sq;
}
let response = squareOfNum(9);
console.log(response);


console.log("---------------------------");


//question - 15 (Largest of Two Numbers)

function largest(x,y){
    if(x > y){
        return x;
    }
    else{
        return y;
    }
}
console.log(largest(10, 20));


console.log("---------------------------");


//question - 16 (Calculate Total Price)


function calculateTotal(price, quantity){
    return price * quantity;
}
let totalPrice = calculateTotal(300,3);
console.log("totalPrice = ", totalPrice);


console.log("---------------------------");

// Section 3 - Functions with Loops 

//question - 17 (Print Numbers Using a Function)

function printNumbers(N){
    for(let z = 1; z <= N; z++){
        console.log(z);

    }
}
printNumbers(9); 


console.log("---------------------------");


//question - 18 (Multiplication Table Function)

function printTable(Num){
    for(let i = 1; i <= 10; i++){
        console.log(`${Num} x ${i} = ${Num * i}`);

    }
}
printTable(3);


console.log("---------------------------");


//question - 19 (Sum from 1 to N)


function sumNumbers(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}
console.log(sumNumbers(3));





















