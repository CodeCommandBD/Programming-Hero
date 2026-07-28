// Task 13-7B: Keep Only Even Numbers
// Problem Statement:
// Write a function keepEvenNumbers that takes an array of numbers and returns a new array with only the even numbers.

// Input: an array of numbers
// Output: array with only even numbers
// Returns: an array
 
function keepEvenNumbers(numbers) {
  let result = [];
  
  for(let i = 0; i < numbers.length;i++){
    if(numbers[i] % 2 === 0){
        result.push(numbers[i])
    }
  }
 
  return result;
}
 
console.log(keepEvenNumbers([3, -5, 8, -1, 0])); // Expected: [8, 0]
