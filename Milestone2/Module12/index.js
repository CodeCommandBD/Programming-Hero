// 1. Write a function that takes a name as a parameter and returns a greeting message, then print the returned message.

function msgName(msg) {
  return "Hello" + " " + msg;
}

console.log(msgName("shanto"));

// 2. Write a function that takes two numbers as parameters and returns their sum.

function add(a, b) {
  return a + b;
}

console.log(add(5, 5));

// 3. Write a function with a default parameter for tax rate (5%) that calculates and returns the total price of an item including tax.

function calculate(price, taxRate = 0.05) {
  let totalPrice = price + price * taxRate;
  return totalPrice;
}
console.log(calculate(100));

// 4. Write a function that takes a number as a parameter and returns whether it is 'Even' or 'Odd'.

function CheckEvenOROdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(CheckEvenOROdd(5));

// Write a function that takes an array of numbers as a parameter and returns the sum of all the elements.

function sumOfnum(arrays) {
  let sum = 0;
  for (let arr of arrays) {
    sum += arr;
  }
  return sum;
}

console.log(sumOfnum([5, 4, 5, 5, 6]));

// 6. Write a function that takes three numbers as parameters and returns the largest of the three.

function largestNum(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c
  }
}

console.log(largestNum(1, 2, 3));

// 7. Write a function that takes a string as a parameter and returns the number of characters (its length).

function charLength(count){
   let totalLength = count.length
   return totalLength
}
console.log( charLength("shanto kumar das"));


// 8. Write a function that takes an array of numbers as a parameter and returns the average of all the elements.

function avgOfelements(elements){
    let sum = 0;
    for(let element of elements){
        sum += element
    }
    let avg = sum / elements.length
    return avg
}

console.log(avgOfelements([15,25,65,14]));


// 9. Write a function that takes a person's name and age as parameters and returns a formatted introduction sentence.

function introduction(name, age){
    return `Hi, My name is ${name} and I am ${age} years old`
}

console.log(introduction("shanto", 25));

// 10. Write a function that takes the length and width of a rectangle as parameters and returns its area.

function rectangle (length, width){
    let area = length * width
    return area
}

console.log(rectangle(5,3));


// 11. Write a function with a default parameter for discount percentage (10%) that returns the discounted price of an item.


function product(price, discount = 10){
    let discountPrice = (discount * price ) / 100
    let totalPrice = price - discountPrice
    return totalPrice
}

console.log(product(125));

// 12. Write a function that takes an array of numbers as a parameter and returns a new array containing only the even numbers.

function evenList(evenarr){
    let newArr = []
    for(let arr of evenarr){
        if(arr % 2 === 0 ){
            newArr.push(arr)
        }
    }
    return newArr;
}

console.log(evenList([7,4,8,2,10,14,22,12,11]));

// 13. Write a function that takes a number as a parameter and returns its factorial.

function getFactorial(factor){
    if(factor < 0){
        return "Factorial for negative numvers doesn't exist."
    }
    let res = 1;
    for(let i = 1 ; i <= factor; i++ ){
        res *= i
    }
    return res
}

console.log(getFactorial(5));


// 14. Write a function that takes a string as a parameter and returns the number of vowels found in it.

function findVowels(vowels){
    const vowelCount = ['a','e','i','o', 'u'] 
    let storeVowel = 0;
    
    let separateString = vowels.toLowerCase().split('')

    separateString.forEach((value, index)=>{
        if(vowelCount.includes(value)){
            storeVowel ++
        }
    })
    return storeVowel
}

console.log(findVowels("shanto Kumar das"));


// 15. Write a function that takes an array of numbers as a parameter and returns a new array containing only the numbers greater than 10.


function greaterThanTen(nums){
    let box = []
    for(let num of nums){
        if(num > 10){
            box.push(num)
        }
    }
    return box
}
console.log(greaterThanTen([8,10,45,47,23,9,11]));

// 16. Write a function that takes two numbers as parameters and returns the larger of the two without using Math.max().

function largeNum(num1, num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}

console.log(largeNum(25,30)); 

// 17. Write a function that takes an array of numbers as a parameter and returns the largest number in it.

function largeArr(arrays){
    let large = arrays[0]
    for(let arr of arrays){
        if(arr > large){
            large = arr
        }
    }
    return large
}

console.log(largeArr([21,52,4,24,36,25,86]));
