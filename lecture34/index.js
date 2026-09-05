//map
let originalPrices = [463,654,2346]
let discountPrices = []
for(value of originalPrices){
    discountPrices.push(value * 0.9)
}

console.log(originalPrices);
console.log(discountPrices);

// const discountPrices2 = originalPrices.map((value) => {
//     return value * 0.9
// })
const discountPrices2 = originalPrices.map((value) => value * 0.9)
console.log(discountPrices2);


const students = [
    {
        name: "Mansi",
        marks: 30,
    },
    {
        name: "Shiva",
        marks: 36,
    },
    {
        name: "Debnath",
        marks: 39,
    },
    {
        name: "Shivani",
        marks: 40,
    },
    {
        name: "Shubhansh",
        marks: 28,
    },

]

// let studentNames = []
// studentNames.forEach((value) => {
//     studentNames.push(value.name)
// })
// const studentNames = students.map((student) =>{
//     return student.name 
// })
const studentNames = students.map((student) => student.name )
const studentMarks = students.map((student) => student.marks )

console.log(studentNames);
console.log(studentMarks);

// const boostedstudentMarks = students.map((student) => student.marks + 10 )
// const boostedstudentMarks = students.map((student) => {
//     return {...student, marks : student.marks + 10}
// })
// const boostedstudentMarks = students.map((student) => ({...student, marks : student.marks + 10}))  //for multiple variables
const boostedstudentMarks = students.map(student=> ({...student, marks : student.marks + 10})) //for single variable no need parantheses
// let boostedstudentMarks= students.map(student => student.marks < 33) //gives boolean value true / false
console.log(boostedstudentMarks);


// let failedStudents = []

// students.forEach((student) => {
//     if(student.marks < 33){
//         failedStudents.push(student)
//     }
// })

// console.log(failedStudents);


// const failedStudents = students.filter((student) => student.marks < 33) //gives exact values rather than boolean values

// console.log(failedStudents);

const failedStudents = students.filter((student) => student.marks < 33).map((student) => student.name)
const failedMarks = students.filter((student) => student.marks < 33).map((student) => student.marks)

console.log(failedStudents);
console.log(failedMarks);


let marks = [ 56, 24, 62, 73,78]

// const totalMarks = marks.reduce((totalMarks , mark) => {
//     return totalMarks + mark
// }, 0)
// const totalMarks = marks.reduce((totalMarks , mark) => totalMarks + mark, 0)
const totalMarks = students.reduce((totalMarks , Student) => totalMarks + Student.marks, 0)

console.log(totalMarks);