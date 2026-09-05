console.log("\n");
console.log(" Section-1 Variables, Operators, if-else & switch-case")
console.log("\n");

//  Task - 1

console.log("Basic Calculator... \n");
const a = 10;
const b = 20;
console.log("Addition :", a + b);
console.log("Subtraction :", b - a);
console.log("Product :", a * b);
console.log("Division:", a / b);
console.log("Remainder :", a % b);

console.log("----------------------");

// Task - 2

console.log("Swap Two Numbers... \n");
var x = 10;
var y = 20;
var z;
console.log("Before Swapping");
console.log(x, y);
console.log("After Swapping");
z = x;
x = y;
y = z;
console.log(x, y);

console.log("----------------------");

// Task - 3

console.log("Student Marks... \n");
var English = 95;
var Hindi = 98;
var Telugu = 99;
var Total = English + Hindi + Telugu;
console.log("Total Marks : ", Total);
var Avg = Total / 3;
console.log("Average Marks : ", Avg);
var Percentage = (Total / 300) * 100;
console.log("Percentage : ", Percentage, "%");

console.log("----------------------");

//  Task - 4

console.log("Shopping Bill... \n");
const Product_Price = 1000;
const Quantity = 3;
console.log("Product_Price : ", Product_Price);
console.log("Quantity : ", Quantity);
var Bill = Product_Price * Quantity;
console.log("Total_Bill : ", Bill);
console.log("Discount Applied of 10% ...")
var Discount = Bill * 10 / 100;
var Final_Bill = Bill - Discount;
console.log("Original bill : ", Bill);
console.log("Discount amount: ", Discount);
console.log("Final bill  : ", Final_Bill);

console.log("----------------------");


//  Task - 5

console.log("Area Calculator ... \n");
var Length = 20;
var Width = 10;
var Area = Length * Width;
console.log("Area of rectangle : ", Area);
var Perimeter = 2 * (Length + Width);
console.log("Perimeter of rectangle: ", Perimeter);

console.log("----------------------");

console.log("\n");
console.log("Section 2 - Comparison & Logical Operators")
console.log("\n");

//   Task - 6

console.log("Even or Odd ... \n");
var n = 28;
console.log(n);
if (n % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

console.log("----------------------");

// Task - 7

console.log("Positive, Negative or Zero ... \n");
var num = 9;
console.log(num);
if (num > 0) {
    console.log("Positive");
}
else if (num < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}

console.log("----------------------");

// Task - 8

console.log("Greater Number ... \n");

var First_no = 10;
var Second_no = 10;
console.log("First_no : ", First_no);
console.log("Second_no : ", Second_no);
if (First_no > Second_no) {
    console.log("First number is greater");
}
else if (Second_no > First_no) {
    console.log("Second number is greater");
}
else {
    console.log("Both numbers are equal");
}


console.log("----------------------");

// Task - 9
console.log("Largest of Three Numbers ... \n");

var num1 = 10;
var num2 = 20;
var num3 = 30;
console.log("\n", num1, "\n", num2, "\n", num3);
if (num1 > num2 && num1 > num3) {
    console.log("First number is largest");
}
else if (num2 > num1 && num2 > num3) {
    console.log("Second number is largest");
}
else {
    console.log("Third number is largest");
}

console.log("----------------------");

// Task - 10

console.log("Voting Eligibility ... \n");

var Age = 18;
console.log("Age : ", Age);
if (Age >= 18) {
    console.log("Eligible to vote");
}
else {
    console.log("Not eligible to vote");
}

console.log("----------------------");

// Task - 11

console.log("Driving Eligibility  ... \n");
var Age = 16;
var hasLicense = true;
console.log("Age : ", Age);
if (Age >= 18 && hasLicense) {
    console.log("Eligible to drive");
}
else {
    console.log("Not eligible to drive");
}

console.log("----------------------");

// Task - 12

console.log("Number Range ... \n");

var Num = 9;
console.log(Num);
if (Num >= 10 && Num <= 100) {
    console.log("Number is Between 10 and 100")
}
else {
    console.log("Out of range");
}

console.log("----------------------");

// Task - 13

console.log("\n");
console.log("Section 3 - if, else-if & Nested Conditions ")
console.log("\n");

console.log("Student Grade ... \n");

var percentage = 99;
console.log(percentage);
if (percentage <= 0 || percentage >= 100) {
    console.log("Invalid Percentage");
}
else if (percentage >= 90) {
    console.log("Grade : ", "A");
}
else if (percentage >= 80) {
    console.log("Grade : ", "B");
}
else if (percentage >= 70) {
    console.log("Grade : ", "C");
}
else if (percentage >= 60) {
    console.log("Grade : ", "D");
}
else if (percentage >= 40) {
    console.log("Grade : ", "E");
}
else {
    console.log("Grade : ", "F");
}

console.log("----------------------");

// Task - 14

console.log("Student Result \n");

const sub1 = 58;
const sub2 = 56;
const sub3 = 50;

const avg = sub1 + sub2 + sub3 / 3;

if (sub1 >= 40 && sub2 >= 40 & sub3 >= 40) {
    console.log("Calcuted Average", avg);
}
if (avg < 40) {
    console.log("Fail");
}
else if (avg >= 75) {
    console.log("Distinction");
}
else if (avg >= 60) {
    console.log("First Division");
}
else if (avg >= 50) {
    console.log("Second Division");
}
else {
    console.log("Pass");
}

console.log("----------------------");

// Task - 15

console.log("Electricity Bill\n");

var units = 200;
var bill = 0;
console.log("Units : ", units);
if (units <= 100) {
    bill = units * 5;
}
else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7);
}
else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}
console.log("Bill : ", bill);

console.log("----------------------");

// Task - 16

console.log("Simple Login \n");

var username = "admin";
var password = "12345";

if (username == "admin" && password == "12345") {
    console.log("Login Successful");
}
else {
    console.log("Invalid username or password");
}

console.log("----------------------");

// Task - 17

console.log("Salary Bonus \n");

var salary = 50000;
const experience = 4;
var bonus = 0;

if (experience >= 10) {
    bonus = salary * 100 / 20
}
else if (experience >= 5) {
    bonus = salary * 100 / 10
}
else if (experience >= 2) {
    bonus = salary * 100 / 5
}
else {
    console.log("No Bonus")
}
console.log(" Original Salary : ", salary);
console.log("Bonus : ", bonus);
console.log("Final Salary : ", salary + bonus);

console.log("----------------------");

// Task - 18

console.log("Age Category \n");

var age = 45;
console.log("Age : ", age);
if (age < 0) {
    console.log("Invalid Age")
}
else if (age <= 12) {
    console.log("Child");
}
else if (age <= 19) {
    console.log("Teenager ");
}
else if (age <= 59) {
    console.log("Adult");
}
else {
    console.log("Senior Citizen");
}

console.log("----------------------");

// Task - 19

console.log("\n");
console.log("Section 4- switch-case ")
console.log("\n");

console.log("Day of the Week \n");

var day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}

console.log("----------------------");

// Task - 20

console.log("Simple Calculator \n");

var first_no = 10;
var second_no = 20;
var Operator = '*';

switch (Operator) {
    case '+':
        console.log("Result : ", first_no + second_no);
        break;

    case '-':
        console.log("Result : ", first_no - second_no);
        break;

    case '*':
        console.log("Result : ", first_no * second_no);
        break;

    case '/':

        if (second_no == 0) {
            console.log("Cannot divide by zero");
        }
        else {
            console.log("Result : ", first_no / second_no);
        }
        break;

    default:
        console.log("Invalid Operator");
}

console.log("----------------------");

// Task - 21

console.log("Month Name \n");

const month = 9;
switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("february");
        break;    
    case 3:
        console.log("March"); 
        break;    
    case 4:
        console.log("April");
        break;     
    case 5:
        console.log("May"); 
        break;    
    case 6:
        console.log("June"); 
        break;    
    case 7:
        console.log("July");
        break;     
    case 8:
        console.log("August"); 
        break;    
    case 9:
        console.log("September");
        break;     
    case 10:
        console.log("October"); 
        break;    
    case 11:
        console.log("November"); 
        break;    
    case 12:
        console.log("December");
        break;  
    default:
        console.log("Invalid Month");     
}

console.log("----------------------");

// Task - 22

console.log("Menu-Based Calculator \n");


var choice = 3;
var first_no = 10;
var second_no = 20;

switch (choice) {
    case 1:
        console.log("Addition : ", first_no + second_no);
        break;

    case 2:
        console.log("Subtraction : ", first_no - second_no);
        break;

    case 3:
        console.log("Multiplication : ", first_no * second_no);
        break;

    case 4:
        if (second_no == 0) {
            console.log("Cannot divide by zero");
        }
        else {
            console.log("Division : ", first_no / second_no);
        }
        break;

    case 5:
        console.log("Modulus : ", first_no % second_no);
        break;

    default:
        console.log("Invalid choice");
}

console.log("----------------------");

// Task - 23

console.log("Traffic Signal \n");

const signal_color = "green"

console.log(signal_color);

switch(signal_color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Wait");
        break;
    case "green":
        console.log("Go");
        break;
    default: 
    console.log("Invalid Signal");    
}

console.log("----------------------");

// Task - 24

console.log("\n");
console.log("Section 5- Mixed Problems ")
console.log("\n");

console.log("ATM Transaction \n");

var balance = 10000;
var withdrawAmount = 1000;

if (withdrawAmount <= 0) {
    console.log("Invalid withdrawal amount");
}
else if (withdrawAmount > balance) {
    console.log("Insufficient balance");
}
else {
    balance = balance - withdrawAmount;

    console.log("Withdrawal successful");
    console.log("Remaining balance : ₹" + balance);
}

console.log("----------------------");

// Task - 25

console.log("Movie Ticket System \n");
var age = 25;
var numberOfTickets = 3;
var ticketPrice;
var totalPrice;

if (age < 12) {
    ticketPrice = 100;
}
else if (age >= 12 && age <= 59) {
    ticketPrice = 200;
}
else {
    ticketPrice = 120;
}

totalPrice = ticketPrice * numberOfTickets;

console.log("Total : ₹" + totalPrice);

console.log("----------------------");

// Task - 26

console.log("Restaurant Menu");

console.log("1. Burger  - ₹150");
console.log("2. Pizza   - ₹250");
console.log("3. Pasta   - ₹180");
console.log("4. Sandwich - ₹120");

var choice = 2;
var quantity = 3;
var price;
var total;

switch (choice) {
    case 1:
        price = 150;
        break;

    case 2:
        price = 250;
        break;

    case 3:
        price = 180;
        break;

    case 4:
        price = 120;
        break;

    default:
        console.log("Invalid choice");
}

total = price * quantity;

console.log("Total : ₹" + total);

console.log("----------------------");

// Task - 27

console.log("Electricity Bill + Discount ");

var units = 250;
var bill;
var discount;
var finalBill;

if (units <= 100) {
    bill = units * 5;
}
else if (units <= 200) {
    bill = units * 7;
}
else {
    bill = units * 10;
}

if (bill >= 2000) {
    discount = bill * 10 / 100;
}
else {
    discount = 0;
}

finalBill = bill - discount;

console.log("Units : ", units);
console.log("Original Bill : ₹" + bill);
console.log("Discount : ₹" + discount);
console.log("Final Bill : ₹" + finalBill);

console.log("----------------------");

// Task - 28


console.log("Simple ATM Menu ");

console.log("ATM Menu");

console.log("1. Check Balance");
console.log("2. Deposit Money");
console.log("3. Withdraw Money");
console.log("4. Exit");

var choice = 3;
var balance = 10000;
var amount = 3000;

switch (choice) {

    case 1:
        console.log("Current Balance : ₹" + balance);
        break;

    case 2:
        balance = balance + amount;
        console.log("Money Deposited Successfully");
        console.log("Current Balance : ₹" + balance);
        break;

    case 3:
        if (amount <= balance) {
            balance = balance - amount;
            console.log("Withdrawal Successful");
            console.log("Current Balance : ₹" + balance);
        }
        else {
            console.log("Insufficient Balance");
        }
        break;

    case 4:
        console.log("Thank you. Goodbye!");
        break;

    default:
        console.log("Invalid Choice");
}

console.log("----------------------");

// Task - 29

console.log("Number Classification ");

var number = 150;

// Positive, Negative or Zero
if (number > 0) {
    console.log("Positive");
}
else if (number < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}

// Even or Odd
if (number % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

// Greater than, Less than or Equal to 100
if (number > 100) {
    console.log("Greater than 100");
}
else if (number < 100) {
    console.log("Less than 100");
}
else {
    console.log("Equal to 100");
}

console.log("----------------------");

// Task - 30

console.log("Student Result System ");

var studentName = "Rahul";
var rollNumber = 101;

var mathMarks = 85;
var scienceMarks = 78;
var englishMarks = 92;

var total = mathMarks + scienceMarks + englishMarks;
var percentage = total / 3;

var grade;
var result;

// Grade
if (percentage >= 90) {
    grade = "A";
}
else if (percentage >= 80) {
    grade = "B";
}
else if (percentage >= 70) {
    grade = "C";
}
else if (percentage >= 60) {
    grade = "D";
}
else if (percentage >= 40) {
    grade = "E";
}
else {
    grade = "F";
}

// Pass / Fail
if (mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40) {
    result = "PASS";
}
else {
    result = "FAIL";
}

console.log("-------------------------");
console.log("      STUDENT RESULT");
console.log("-------------------------");

console.log("Name       : " + studentName);
console.log("Roll No    : " + rollNumber);
console.log("Math       : " + mathMarks);
console.log("Science    : " + scienceMarks);
console.log("English    : " + englishMarks);
console.log("Total      : " + total);
console.log("Percentage : " + percentage + "%");
console.log("Grade      : " + grade);
console.log("Result     : " + result);

console.log("-------------------------");








