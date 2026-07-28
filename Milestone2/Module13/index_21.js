// Task 13-4B: Remove First and Last Character

// Problem Statement:
// Write a function removeFirstAndLast that takes a string and returns it with the first and last character removed.

// Input: a string
// Output: the string without its first and last character
// Returns: a string

function removeFirstAndLast(str) {
  

 let cutMiddleChars = str.slice(1, str.length - 1)

 

 return cutMiddleChars
  
 
}
 
console.log(removeFirstAndLast("hello")); // Expected: "ell"

