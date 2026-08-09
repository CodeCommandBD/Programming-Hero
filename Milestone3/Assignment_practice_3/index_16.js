const secondLargest = (arr) => {
  if (!Array.isArray(arr)) {
    return "Invalid";
  }

  let largestNumber = 0;
  let secondLargest = 0;

  for (let num of arr) {
    if (typeof num !== "number") {
      return "Invalid";
    }

    if (largestNumber < num) {
        secondLargest = largestNumber
        largestNumber = num

    }else if(num > secondLargest){
        secondLargest = num
    }
  }
  console.log(largestNumber);
  console.log(secondLargest);
  
};

console.log(secondLargest([45, 12, 89, 3, 67]));
