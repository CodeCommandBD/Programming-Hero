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

const addGrade = (students) => {
  const gradeMark = (marks) => {
    if (marks >= 90) {
      return "A+";
    } else if (marks >= 80) {
      return "A";
    } else if (marks >= 60) {
      return "B";
    } else {
      return "Fail";
    }
  };

  const modifiedStudents = students.map((student) => {
    const { name, marks } = student;
    const newStudentGrade = { name, marks, grade: gradeMark(marks) };

    return newStudentGrade;
  });

  return modifiedStudents;
};

const student = [
  { name: "shanto", marks: 90 },
  { name: "ratul", marks: 40 },
];

console.log(addGrade(student));
console.log(student);

