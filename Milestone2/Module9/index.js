// Task 1 — Print "Hello" Five Times
// Write a for loop that prints "Hello" 5 times.

for(let i = 1; i <=5; i++){
    console.log("Hello");
}

console.log("=======================");
console.log("=======================");


// Task 2 — Print Numbers 1 to 10 
// Write a for loop that prints numbers from 1 to 10.

for(let i = 1; i<= 10; i++){
    console.log(i);
}

console.log("=======================");
console.log("=======================");

// Task 3 — Countdown with While Loop 
// Write a while loop that prints numbers from 10 down to 1.

let count = 10

while(count >= 1){
    console.log(count);
    count --
}

console.log("=======================");
console.log("=======================");

// Task 4 — Repeat a Message 
// Using a while loop, print "Loop চলছে" exactly 7 times.

let repeat = 1

while(repeat <= 7){
    console.log(repeat," Loop চলছে");
    repeat++
}

console.log("=======================");
console.log("=======================");

// Task 5 — Even Numbers 
// Write a for loop that prints all even numbers between 1 and 30.

for(let i = 2; i <= 30; i+=2){
    console.log(i);
}

console.log("=======================");
console.log("=======================");

// Task 6 — Sum of Numbers 
// Write a for loop that calculates the sum of numbers from 1 to 20 and prints the result.

let sum = 0;

for(let i =1; i <= 20; i++){
    sum += i
}

console.log(sum);


console.log("=======================");
console.log("=======================");

// Task 7 — Multiplication Table 
// Ask the user for a number (or set a variable), then print its multiplication table from 1 to 10 using a for loop. Example: if the number is 7 → 7 x 1 = 7, 7 x 2 = 14, ... 7 x 10 = 70.

let user = 5;

for(let i = 1; i <=10; i++){
    console.log(`${user} x ${i} = ${user * i}`);
}

console.log("=======================");
console.log("=======================");

// Task 8 — Count Down from 20 
// Write a for loop that counts down from 20 to 1.

for(let i = 20; i >= 1; i--){
    console.log(i);
}


console.log("=======================");
console.log("=======================");

// Task 9 — Sum of Even Numbers
// Write a for loop that calculates the sum of all even numbers from 2 to 50.

let calculate = 0;
for(let i = 2; i<=50; i += 2){
    calculate += i
}

console.log(calculate);

console.log("=======================");
console.log("=======================");

// Task 10 — Using Break 
// Write a for loop from 1 to 50 that stops completely (break) as soon as it reaches a number greater than 30.

for(let i = 1; i<=50; i++){
    if(i > 30){
        console.log("break now");
        break;
    }
    console.log(i);
}

console.log("=======================");
console.log("=======================");

// Task 11 — Using Continue 
// Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.


for(let i = 1; i<=20; i++){

    if(i % 4 === 0){
        console.log("skips here");
        continue;
    }
    console.log(i);
    
}


console.log("=======================");
console.log("=======================");

// Task 12 — Do While Loop — Optional 
// Write a do while loop that prints numbers from 1 to 5. Then modify the condition so it is false from the start (for example, i > 10) and observe that the loop still runs once.

let i = 1

do{
    console.log(i);
    i++
}while(i > 5);

console.log("=======================");
console.log("=======================");

// Task 13 — Comparing Loop Types
// Write the same task — printing numbers 1 to 5 — three times: once using for, once using while, and once using do while. Compare how the code structure differs for each.

// ################ For loop 

for(let i = 1; i <=5; i++){   
    console.log(i);
}

console.log("----");



// ################ While loop
let num = 1
while( num <= 5 ){  
    console.log(num);
    num++
}
console.log("----");


// ################ Do While loop

let num2 = 1

do{
    console.log(num2); 
    num2++
}while(num2 <= 5)



// Task 14 — Mini Challenge 
// Write a program that:
// Loops from 1 to 100.
// Skips (continue) any number divisible by 5.
// Stops (break) completely once it reaches a number greater than 40.
// Prints every number that passes both checks.


for(let i = 1; i <=100; i++){
    if(i % 5 === 0){
        console.log("skips here");
        continue;
    }
    if(i > 40){
        console.log("break here");
        break;
    }

    console.log(i);
}