function generateTopScorers(students) {
if (!Array.isArray(students)) {
return "Invalid";
}
if (students.length === 0) {
return "Invalid";
}
const qualified = students.filter(student => {
   return student.score > 60;
});
// console.log(qualified);

const names = qualified.map(({ name }) => {
return name.toUpperCase();
});
// console.log(names);


return names.slice(0, 3);
}

let quiz = [
  { name: "Rafi", score: 80 },
  { name: "Sadia", score: 55 },
  { name: "Karim", score: 70 },
  { name: "Nafis", score: 65 },
];

console.log(generateTopScorers(quiz));
