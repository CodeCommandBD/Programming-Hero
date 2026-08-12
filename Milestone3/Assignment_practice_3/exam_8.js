/*
    problem : Add Grade to Each student (without changing original)

    you have an array of student objects, each with name and marks. create a NEW array where every student also has a "grade" field, based on their marks. The ORIGINAL array must stay exactly the same.


    Grading rule:
        marks >= 90 -> "A+"
        marks >= 80 -> "A"
        marks >= 60 -> "B"
        below 60 -> "Fail"

    Input: 
        [
            {name: "shanto", marks: 90},
            {name: "ratul", marks: 40},
        ]

    output: 
        [
            {name: "shanto", marks: 90, grade: "A+"},    
            {name: "ratul", marks: 40, grade: "Fail"},    
        ]
*/

const gradeMark = (students) => {

  const addGrade = (marks) => {
    if (marks >= 90) {
     return "A+";
    } else if (marks >= 80) {
      return "A";
    } else if (marks >= 60) {
      return "B+";
    } else {
      return "FAIL";
    }
  };

  let modify = students.map((item) => {
    const { name, marks } = item;

    let newStudentGrade = { name: name, marks: marks , grade: addGrade(marks)};

    return newStudentGrade;
  });

  return modify
};

let studentsInfo = [
  { name: "shanto", marks: 90 },
  { name: "ratul", marks: 40 },
];

console.log(gradeMark(studentsInfo));

console.log(studentsInfo);
