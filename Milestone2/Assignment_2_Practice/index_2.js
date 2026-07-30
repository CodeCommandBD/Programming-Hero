// A-01  —  Largest & Smallest in an Array         🟢 Easy

// Concepts Used:  Arrays · Loops · Conditionals

// Scenario:  Given an array of numbers, find both the largest AND smallest value using a single loop (no built-in Math.max/Math.min).
//      If the input is not an array, return "Invalid".
//      If any element of the array is not a number, return "Invalid".

// Expected Output:
//    Numbers: [45, 12, 89, 3, 67]
//    Largest: 89
//    Smallest: 3

// Hints:
//   1.  Initialize both max and min to the first element
//   2.  Update them inside one loop as you compare each number

function bothValue(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return "Invalid";
  }
  let largestNum = numbers[0];
  let smallest = numbers[0];

  for (let num of numbers) {
    if (typeof num !== "number" || Number.isNaN(num)) {
      return "Invalid";
    }

    if (num > largestNum) {
      largestNum = num;
    } else if (num < smallest) {
      smallest = num;
    }
  }
  return {
    min: smallest,
    max: largestNum,
  };
}

console.log(bothValue([45, 12, 89, 3, 67]));



