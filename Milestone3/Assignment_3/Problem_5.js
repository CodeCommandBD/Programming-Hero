/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
  if (!Array.isArray(students)) {
    return "Invalid";
  }

  //   console.log(students);

  if (students.length === 0) {
    return "Invalid";
  }

  for (let student of students) {
    // console.log(student);

    if(student.name === undefined || student.score === undefined) {
        return "Invalid"
    }
    // console.log(student);
    
    if(typeof student.score !== 'number'){
        return "Invalid"
    }
  }

    const qualified = students.filter((student) => {
      return student.score >= 70;
    });

    // console.log(qualified);
    

    const names = qualified.map(({ name }) => {
        // console.log(name.toUpperCase());
       return name.toUpperCase();
    });

    // console.log(names);
    

    return names.slice(0, 3);
}

let info = [
  { name: "Rafi", score: 90 },
  { name: "Sadia", score: 65 },
  { name: "Karim", score: 85 },
  { name: "Nafis", score: 75 },
];

console.log(generateLeaderboard(info));
