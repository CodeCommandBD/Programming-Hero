// Problem Statement:
// Write a function reverseNumber that takes a positive whole number and returns it with its digits reversed. (Hint: convert the number to a string first.)


// Input: a number
// Output: the number with digits reversed
// Returns: a number


function reverseNumber(num) {
  let str = num.toString();
    let strStore = ''

  for(let i =  str.length -1; i >= 0; i--){
    // console.log(i, str[i]);
    strStore += str[i]   
    
  }
//   console.log(strStore);
  
  return Number(strStore)
 
}
 
console.log(reverseNumber(1234)); 
console.log(reverseNumber(7));    



// alternative way useing method
// alternative way useing method

function reverseNumber2(num){
    let str2 = num.toString()
    let result = str2.split('').reverse().join('')
    
    return Number(result)
}

console.log(reverseNumber2(1234));
console.log(reverseNumber(7));   