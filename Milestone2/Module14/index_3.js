// Task 14-2: Debug a Broken Conditional


// Problem Statement:
// This function should return "Pass" if a score is 50 or above, otherwise "Fail". It gives the wrong result for a score of exactly 50.


// Bug: find why score = 50 doesn't return "Pass"
 
function checkScore(score) {
  if (score >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}
 
console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
console.log(checkScore(40)); // Expected: "Fail"


console.log("========================");

// Task 14-3: Debug a Broken Loop

// Problem Statement:
// This function should return the count of numbers from 1 to n. Right now it never stops (infinite loop) — find out why.

// Bug: this loop never ends — find the missing piece
 
function countUpTo(n) {
  let count = 0;
 
  for (let i = 1; i <= n; i++) { 
    count = count + 1;
  }
 
  return count;
}
 
console.log(countUpTo(5)); // Expected: 5 (currently freezes/never finishes)


console.log("========================");

// Task 14-4: Debug a Broken Array Problem

// Problem Statement:
// This function should return the first element of an array. It currently returns the wrong item.


// Bug: find why this doesn't return the first element
 
function getFirstElement(arr) {
  return arr[0]; // find the bug
}
 
console.log(getFirstElement([10, 20, 30])); // Expected: 10 (currently returns 20)


console.log("========================");


// Task 14-5: Debug a Broken Function

// Problem Statement:
// This function should return the difference between two numbers (a - b). It currently swaps the parameters somewhere and gives a wrong result.


// Bug: find why the result comes out negative
 
function subtract(a, b) {
  return a-b; // find the bug
}
 
console.log(subtract(10, 3)); // Expected: 7 (currently returns -7)

console.log("========================");

// Task 14-6: Rubber Duck Debugging
// Problem Statement:
// Explain this function out loud, line by line, to find the bug. It should return true if a string is empty, otherwise false.

// Bug: explain this line out loud — what does str.length actually equal for ""?
 
function isEmpty(str) {
  if (str.length === 0) { // find the bug
    return true;
  } else {
    return false;
  }
}
 
console.log(isEmpty(""));  // Expected: true
console.log(isEmpty("hi")); // Expected: false


console.log("========================");


// Task 14-7: Debug a Multi-Part Bug

// Problem Statement:
// This function should return an array of only the odd numbers from the input array. It currently has two separate bugs — fix them one at a time.

// This code has TWO bugs. Fix one, re-run, then find the next.
 
function getOddNumbers(numbers) {
  let odds = [];
 
  for (let i = 0; i < numbers.length; i++) {
    // console.log(i, numbers[i]);
    
    if (numbers[i] % 2 === 1) {                  
      odds.push(numbers[i]);
    }
  }
 
  return odds;
}
 
console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); // Expected: [1, 3, 5]


console.log("========================");


// Task 14-8: Apply the Full Debugging Process

// Problem Statement:
// This function should return how many vowels are in a string. Go through the full checklist: does it run? does it crash? is the answer wrong? isolate it with console.log, then fix it.


// Apply the full debugging process to find this bug
 
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
 
  for (let i = 0; i < str.length; i++) { // find the bug
    // console.log(i, str[i]);
    
    if (vowels.includes(str[i])) {
      count = count + 1;
    }
  }
 
  return count;
}
 
console.log(countVowels("orange")); // Expected: 3


console.log("========================");


// 14-9A: Temperature Converter
// Problem Statement: Should convert Celsius to Fahrenheit using the formula (C × 9/5) + 32.


function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32; // find the bug
}
 
console.log(celsiusToFahrenheit(0)); // Expected: 32


console.log("========================");

// 14-9B: Array Sum Skips a Number
// Problem Statement: Should return the sum of all numbers in the array.


function sumArray(numbers) {
  let total = 0;
 
  for (let i = 0; i < numbers.length; i++) {
     // find the bug

    //  console.log(i, numbers[i]);
     
    total = total + numbers[i];
  }
 
  return total;
}
 
console.log(sumArray([1, 2, 3, 4])); // Expected: 10


console.log("========================");

// 14-9C: String Repeat
// Problem Statement: Should return a string repeated a given number of times.


function repeatString(str, times) {
  let result = "";
 
  for (let i = 0; i < times; i++) {
    
    
    result += str; // find the bug
  }
 
  return result;
}
 
console.log(repeatString("ab", 3)); // Expected: "ababab"



console.log("========================");


// 14-9D: Object Property Update

// Problem Statement: Should update a person's age property and return the updated object.

function updateAge(person, newAge) {
  person.age = newAge; // find the bug
  return person;
}
 
console.log(updateAge({ name: "Lee", age: 20 }, 21));
// Expected: { name: "Lee", age: 21 }

