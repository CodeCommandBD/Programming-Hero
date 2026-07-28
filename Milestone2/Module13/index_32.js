// 13-10B: Reverse the Word Order
// Problem Statement: Write a function reverseWords that takes a sentence and returns it with the order of the words reversed (the letters inside each word stay the same).



// Input: a sentence (string)
// Output: sentence with word order reversed
// Returns: a string
 
function reverseWords(sentence) {
  // TODO: split into words, reverse the order, and join back together
    return sentence.split(" ").reverse().join(' ')
}
 
console.log(reverseWords("hello world")); // Expected: "world hello"
