// let alokmarks = 46 + 56+ 66


// function totalMarks() {
//     console.log("Hii");
// }
// totalMarks()



// function calculator(num1, num2, operator) {
//     // console.log(`${num1} ${operator} ${num2} = `, num1 + num2)
//     switch(operator){
//         case '+' :
//             console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
//             break;
//         case '-' :
//             console.log(`${num1} ${operator} ${num2} =`, num1 - num2);
//             break;
//         case '*' :
//             console.log(`${num1} ${operator} ${num2} =`, num1 * num2);
//             break;
//         case '/' :
//             console.log(`${num1} ${operator} ${num2} =`, num1 / num2);
//             break;
//         case '%' :
//             console.log(`${num1} ${operator} ${num2} =`, num1 % num2);
//             break;
//     }
// }
// calculator(5,9,'*');
// calculator(5,9,'+');


// function totalMarks(sciencemarks, englishmarks, sanskritmarks){
//     // console.log(sciencemarks + englishmarks + sanskritmarks);
//     return(sciencemarks + englishmarks + sanskritmarks);
// }
// function calPercentage(studentName ,sciencemarks, englishmarks, sanskritmarks){
//          let total = totalMarks(sciencemarks, englishmarks , sanskritmarks);
//          let percentage = (total / 300) * 100;
//          console.log(`${studentName} percentage`, percentage);
// }
// calPercentage("Alok",46,56,66);

// totalMarks("Alok",46,56,66);
// totalMarks("bukhi",46,56,66);
// totalMarks("chikki",46,56,66);
// totalMarks("mick",46,56,66);


// Arrow Function

// let add= num1 => num1 + 3;
// console.log(add(5,7));

// let add = (num1, num2) => num1 + num2;
// console.log(add(5,7));


let add = (num1, num2) => {
    console.log("Addition");
    return num1 + num2;
} 
console.log(add(5,7));