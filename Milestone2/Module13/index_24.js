// k 13-6A: Find the Second Smallest Number
// Problem Statement:
// Write a function findSecondSmallest that takes an array of numbers and returns the second smallest distinct value.

// Input: an array of numbers
// Output: the second smallest number
// Returns: a

function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;


  for(let i = 0; i<numbers.length; i++){
    // console.log(i, numbers[i]);
    if(numbers[i] < smallest){        
        secondSmallest = smallest
        smallest = numbers[i]
    }
    if(numbers[i] > smallest && numbers[i]<secondSmallest){
        secondSmallest = numbers[i]
    } 
  }

return secondSmallest


}

console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8
