/*
    passing students Filter

    getPassingStudents(student, threshold) - return only the students whose marks are greater than or equal to the given threshold.


    input: 
        students = [
            {name: "Rafi", marks: 75},
            {name: "Karim", marks: 40},
            {name: "utsho", marks: 60}
        ]
        threshold = 60

    output: [
            {name: "Rafi", marks: 75},
            {name: "utsho", marks: 60}
    ]
*/

const getPassingStudents = (students, threshold) => {
    let findStudent = students.filter((student)=>{
       return student.marks >= threshold        
    })
    return findStudent
};
let students = [
  { name: "Rafi", marks: 75 },
  { name: "Karim", marks: 40 },
  { name: "utsho", marks: 60 },
];


console.log(getPassingStudents(students, 60));
console.log(students);

