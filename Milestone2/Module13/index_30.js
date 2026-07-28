// Task 13-9: Long Words Above a Length, Then Their Count


// Problem Statement:
// Write two functions:
// getWordsLongerThan — takes an array of words and a length threshold, and returns a new array containing every word whose length is greater than the threshold. 
// countArray — takes an array and returns how many elements it contains.
// Then use the returned array from getWordsLongerThan as the input to countArray.


// Input: an array of words, a length threshold
// Output: array of words longer than the threshold
// Returns: an array
 
function getWordsLongerThan(words, minLength) {
  let longWords = [];
  // TODO: loop, check condition, push the word

  for(let word of words){
    // console.log(word.length);
    
    if(minLength < word.length){
        longWords.push(word)
    }
    
  }

//   console.log(longWords);
  
 
  return longWords;
}
 
// Input: an array
// Output: the number of elements in the array
// Returns: a number
 
function countArray(arr) {
  let count = 0;
  
  for(let ar of arr){
    count ++
  }
 
  return count;
}
 
let words = ["cat", "elephant", "dog", "hippopotamus", "ox"];
let longWords = getWordsLongerThan(words, 3);
let total = countArray(longWords);
 
console.log(longWords); // Expected: ["elephant", "hippopotamus"]
console.log(total);     // Expected: 2
