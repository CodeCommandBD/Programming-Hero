// Task 1 — Your First JavaScript Program 

console.log('Hello Javascript');
console.log('My name is shanto.');
console.log('I am excited to become a web developer');


console.log("===============");
console.log("===============");
console.log("===============");

// Task 2 — Simple Math Calculator

let num1 = 100;
let num2 = 50;

console.log("addition :", num1 + num2);
console.log("subtraction :", num1 - num2);
console.log("multiplication :", num1 * num2);
console.log("Division :", num1 / num2);
console.log("Modulus :", num1 % num2);

console.log("===============");
console.log("===============");
console.log("===============");


// Task 3 — Student Information

let studentName = "shanto kumar das";
let studentAge = 20;
let studentCountry = "Bangladesh";
let isStudent = true;

console.log("Student Name : ",studentName);
console.log("Student Age : ",studentAge);
console.log("Student Age : ",studentCountry);
console.log("Is Student : ",isStudent);



console.log("===============");
console.log("===============");
console.log("===============");


// Task 4 — Identify Data Types

let a = "shanto"
let b = 100;
let c = true;
let d = false;
let e = 3.1254;
let f = [5,4,3,4,4]

console.log("TypeOf a is : ", typeof(a));
console.log("TypeOf b is : ", typeof(b));
console.log("TypeOf c is : ", typeof(c));
console.log("TypeOf d is : ", typeof(d));
console.log("TypeOf e is : ", typeof(e));
console.log("TypeOf f is : ", typeof(f));

console.log("===============");
console.log("===============");
console.log("===============");

// Task 5 — Variable Naming Challenge

let firstName = "Alex";
let First_Name = "Shan";
let user123 = 0;
let $price = 3.154;
let  _total = 2154;

console.log(firstName, First_Name, user123, $price, _total);

console.log("===============");
console.log("===============");
console.log("===============");

// Task 6 — Personal Bio


let name = "Alex";
let age = 20;
let favoriteFood = "Pizza";
let favoriteLanguage = "JavaScript";
let lovesCoding = true;

console.log("Hello!");
console.log("My name is " + name + ".");
console.log("I am " + age + " years old.");
console.log("My favorite food is " + favoriteFood + ".");
console.log("My favorite programming language is " + favoriteLanguage + ".");
console.log("I love coding:", lovesCoding);

 

console.log("===============");
console.log("===============");
console.log("===============");
// Task 7 — Arithmetic Practice

let number1 = 100;
let number2 = 50;

console.log("Number1 : ", number1);
console.log("Number2 : ", number2);

console.log("--------");

console.log("Addition:", number1 + number2);
console.log("Subtraction:", number1 - number2);
console.log("Multiplication:", number1 * number2);
console.log("Division:", number1 / number2);
console.log("Modulus:", number1 % number2);


console.log("===============");
console.log("===============");
console.log("===============");
// Task 8 — Shorthand Operators

 let score = 50;

 score += 10;

 console.log("After += 10 : ", score);

 score -= 5;

 console.log("After -= : ", score);

 score *= 5;

 console.log("After *= : ", score);

 score /= 5;

 console.log("After /= : ", score);

 score %= 5;

 console.log("After %= : ", score);


console.log("===============");
console.log("===============");
console.log("===============");

//  Task 9 — Mini Coding Challenge

let price = 200;
let quantity = 4;
let discount = 15;
 

let totalPrice = price * quantity
let discountAmount = (totalPrice * discount) / 100

let finalPrice = totalPrice - discountAmount

console.log("Total Price : ", totalPrice);
console.log("Discount Amount : ", discountAmount);
console.log("Final Price : ", finalPrice);

console.log("===============");
console.log("===============");
console.log("===============");

// Task 10 — Console Quiz (Answers)

let x = 20; let y = 5; console.log(x + y);
let language = "JavaScript"; console.log(typeof language);
let isOnline = false; console.log(typeof isOnline);
let num = 10; num += 5; console.log(num);
let m = 30; let n = 7; console.log(m % n);


console.log("===============");
console.log("===============");
console.log("===============");

// ############# Mini Project — Personal Introduction Card ###############
// A complete program that stores personal information and prints a formatted profile card.


let fullName = "John Doe";
let userAge = 22;
let country = "Bangladesh";
let Language = "JavaScript";
let dreamJob = "Full-Stack Developer";
let yearsToGoal = 1;
let isLearningJS = true;


console.log("========================");
console.log("     MY PROFILE");
console.log("========================");
console.log();
console.log("Name:", fullName);
console.log("Age:", userAge)
console.log("Country:", country);
console.log("Favorite Language:", Language);
console.log("Dream Job:", dreamJob);
console.log("Years to Reach Goal:", yearsToGoal);
console.log("Learning JavaScript:", isLearningJS);
console.log();
console.log("========================");


console.log("===============");
console.log("===============");
console.log("===============");

// Bonus Challenge — Shopping Bill Calculator ##########################
// Calculate a subtotal, tax amount, and grand total, then print a neat bill.


let productName = "Wireless Mouse";
let productPrice = 100;
let productQuantity = 4;
let taxPercent = 5;

let subtotal = productPrice * productQuantity;
let taxAmount = (subtotal * taxPercent) / 100;
let grandTotal = subtotal + taxAmount;

console.log("---- Shopping Bill ----");
console.log("Product:", productName);
console.log("Price per unit:", productPrice);
console.log("Quantity:", productQuantity);
console.log("Subtotal:", subtotal);
console.log("Tax (" + taxPercent + "%):", taxAmount);
console.log("Grand Total:", grandTotal);

console.log("------------------------");