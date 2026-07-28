// Task 13-6B: Count Multiples of Three

// Problem Statement:
// Write a function countMultiplesOfThree that takes an array of numbers and returns how many of them are divisible by 3.

// Input: an array of numbers
// Output: how many numbers are divisible by 3
// Returns: a number

function countMultiplesOfThree(numbers) {
  let count = 0;

  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 3 === 0){
        count ++
    }
  }
 
  return count;
}
 
console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10])); // Expected: 3
