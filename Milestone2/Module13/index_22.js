// Task 13-5A: Check for a Palindrome

// Problem Statement:
// Write a function isPalindrome that takes a string and returns true if it reads the same forwards and backwards, otherwise false. Assume lowercase, no spaces.


// Input: a string
// Output: true or false
// Returns: a boolean


function isPalindrome(str) {
 
    let reverseStr = ""

    for(let i = str.length - 1; i >=0; i--){
        reverseStr += str[i]
    }
    
    return str === reverseStr
 
}
 
console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
