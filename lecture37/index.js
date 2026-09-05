// function outter(){
//     let a = 5;
//     function inner(){
//     console.log(a);
//     }

//     a = 10
//     return inner;

// }
// const response = outter();
// response();



// function outter(){
//     let count = 0;
//     function counter(){
//         count = count + 1;
//         console.log(count);
//     }
//     return counter
// }

// const counter1 = outter();
// const counter2 = outter();
// counter1();
// counter1();
// counter2();
// counter2();
// counter1();






// const arr = [4,5,2,5,9]
// let arr2 = arr
// arr.pop()
// // let arr2 = arr.filter(val => val > 2)
// console.log(arr);
// console.log(arr2);



// const original = [1, 2, 3];
// const copy = [...original]; // [1, 2, 3]



// const fruits = ['apple', 'banana'];
// const veggies = ['carrot', 'potato'];

// const food1 = [...fruits, ...veggies];
// const food2 = [...veggies];
// console.log(food1);
// console.log(food2);



// const colors = ["red", "green", "blue", "yellow"];
// const [primary, ...remainingColors] = colors; 
// // remainingColors is packed as ["green", "blue", "yellow"]
// console.log(colors);
// console.log(primary);
// console.log(...remainingColors);


const arr = [4,5,2,5,9]
let arr2 = [...arr]
arr2.pop()
// let arr2 = arr.filter(val => val > 2)
console.log(arr);
console.log(arr2);


