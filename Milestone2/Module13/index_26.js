// Task 13-7A: Average of All Numbers

// Problem Statement:
// Write a function averageOfArray that takes an array of numbers and returns their average.

// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number

function averageOfArray(numbers) {
  if (numbers.length === 0) return 0;
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    //  console.log(i, numbers[i]);
    total += numbers[i];
  }

  let avg = total / numbers.length;

  return avg;
}

console.log(averageOfArray([2, 4, 6])); // Expected: 4
