// problem 15: return all even number, then their sum

let arrnum = [10, 21, 35, 50, 150, 6, 4, 1, 11, 53];

let evenbox = [];

let sumofeven = 0;

for (let arr of arrnum) {
  if (arr % 2 === 0) {
    evenbox.push(arr);
  }
}

for (let box of evenbox) {
  sumofeven += box;
}

console.log("evenNumber: ", evenbox);
console.log("SumOfeven: ", sumofeven);

// with Function

function geteven(evensnumber) {
  let evenbox2 = [];

  for (let arr of evensnumber) {
    if (arr % 2 === 0) {
      evenbox2.push(arr);
    }
  }
  return evenbox2;
}

function getsum(sumnum) {

  let sumofeven2 = 0;

  for (let box of sumnum) {
    sumofeven2 += box;
  }
  return  sumofeven2
}

let evenNumber = geteven([10, 21, 35, 50, 150, 6, 4, 1, 11, 53]);
let sumNumber = getsum(evenNumber)

console.log("even Number: ", evenNumber);

console.log("sum: ", sumNumber);

