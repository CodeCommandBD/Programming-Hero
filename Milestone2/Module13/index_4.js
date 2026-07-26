// Problem 4: FizzBuzz (1 to N)
// loop through numbers from 1 to N. If a number is divisible by 3 , print "Fizz", if divisible by 5, print "Buzz"; if divisible by both, print "FizzBuzz" ; otherwise, print the number itself.

let number = 20;

for (let i = 1; i <= number; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("===============");

// with Function


// No return only print
// No return only print

function divisible(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
divisible(20);

// return with string
// return with string

function divisible(num) {
  let showMsg = "";
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      showMsg += "FizzBuzz\n";
    } else if (i % 3 === 0) {
      showMsg += "Fizz\n";
    } else if (i % 5 === 0) {
      showMsg += "Buzz\n";
    } else {
      showMsg += i + "\n";
    }
  }
  return showMsg;
}
console.log(divisible(20));

// Return with array
// Return with array

function divisible(num) {
  let showMsg = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      showMsg.push("FizzBuzz");
    } else if (i % 3 === 0) {
      showMsg.push("Fizz");
    } else if (i % 5 === 0) {
      showMsg.push("Buzz");
    } else {
      showMsg.push(i);
    }
  }
  return showMsg;
}
console.log(divisible(20));
