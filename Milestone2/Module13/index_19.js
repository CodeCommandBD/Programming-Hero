// Problem Statement:
// Write a function getOddNumbers that takes a number n and returns an array of all odd numbers from 1 to n (inclusive).


// Input: a number
// Output: array of odd numbers from 1 to n
// Returns: an array
 
function getOddNumbers(n) {
  let odds = [];

  for(let i = 1; i<= n; i++){
    if( i % 2 !== 0){
        odds.push(i)
    }
  }
  return odds;
}
 
console.log(getOddNumbers(10));


// alternative
// alternative

function getOddNumbers2(n) {
  let odds2 = [];

  for(let i = 1; i<= n; i += 2){
    if( i % 2 !== 0){
        odds2.push(i)
    }
  }
  return odds2;
}
 
console.log(getOddNumbers2(10));