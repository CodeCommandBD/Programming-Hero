// Take two variables price1 and price2, and compare them using all comparison operators (==, ===, !=, !==, >, <, >=, <=), printing each result with console.log.

let price1 = "200";
let price2 = 200;

let compare1 = price1 == price2 
console.log(compare1);

console.log("------------");


let compare2 = price1 === price2 
console.log(compare2);

console.log("------------");

let compare3 = price1 > price2 
console.log(compare3);

console.log("------------");

let compare4 = price1 >= price2 
console.log(compare4);

console.log("------------");
let compare5 = price1 < price2 
console.log(compare5);

console.log("------------");

let compare6 = price1 <= price2 
console.log(compare6);

console.log("------------");

let compare7 = price1 != price2 
console.log(compare7);

console.log("------------");

let compare8 = price1 !== price2 
console.log(compare8);

console.log("------------");

console.log('============');
console.log('============');
console.log('============');


// Guess the result of "5" == 5 and "5" === 5 first, then write code to verify your guess.

let fnum = "5"
let snum = 5;

let res = fnum == snum
let res2 = snum === fnum

console.log(res);
console.log(res2);

console.log('============');
console.log('============');
console.log('============');

// Create a variable isRaining (true/false). If it is true, print "Take an umbrella".

let isRaining = true

if(isRaining){
    console.log('Take an umbrella');
}else{
    console.log('umbrella not required');
}

console.log('============');
console.log('============');
console.log('============');

// Take a variable stock. If stock is 0, print "Out of stock" (use only if, no else).

let stock = 0;

if(stock <= 0){
    console.log("Out of Stock");
}

console.log('============');
console.log('============');
console.log('============');


// Take a number variable and check whether it is positive or negative (using if-else).

let number1 = 50;

if(number1 > 0){
    console.log("It is Positive");
}else{
    console.log("It is Negative");
}
console.log('============');
console.log('============');
console.log('============');

// Take a year variable and check whether it is a leap year (hint: year % 4 === 0).

let year = 2028;

if(year % 4 === 0 ){
    console.log("It is a leap year");
}


console.log('============');
console.log('============');
console.log('============');

// Take a speed variable. If speed is greater than 80, print "Overspeeding", otherwise print "Normal speed".


let speed = 50;

if(speed > 80){
    console.log('Overspeeding');
}else{
    console.log('Normal speed');
}
console.log('============');
console.log('============');
console.log('============');

//Using age and hasTicket, print "Entry allowed" if age is above 18 AND the person has a ticket (use &&).

let userAge = 18;
let hasTicket = true;

if(userAge >= 18 && hasTicket === true){
    console.log("Entry allowed");
}else{
    console.log("Entry not allowed");
}

console.log('============');
console.log('============');
console.log('============');

// Using isWeekend and isHoliday, print "No work today" if either one is true (use ||).

let isWeekend = true;
let isHoliday = false;

if(isWeekend || isHoliday){
    console.log("No work today");
}else{
    console.log("Today work list");
}
console.log('============');
console.log('============');
console.log('============');

// Build a simple login system — print "Login successful" only if both username and password are correct.

let userName = "shanto kumar"
let password = "123456shan"

if(userName === "shanto kumar" && password === "123456shan"){
    console.log("Login successful");
}else{
    console.log("userName or password is not correct!");
}

console.log('============');
console.log('============');
console.log('============');


// Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.

let marks = 30;

if(marks >= 80){
    console.log("A+");
}else if (marks >=70 ) {
    console.log("A");
}else if(marks >= 60){
    console.log("B");
}else if(marks >= 50){
    console.log("C");
}else if(marks >= 33){
    console.log("D");
}else{
    console.log("F");
}

console.log('============');
console.log('============');
console.log('============');

// Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese (use if-else if).

let bmi = 20.5;

if(bmi < 18.5){
    console.log("Underweight");
}else if(bmi <= 24.9){
    console.log("Normal");
}else if(bmi <= 29.9){
    console.log("Overweight");
}else{
    console.log("obese");
}

console.log('============');
console.log('============');
console.log('============');

// Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).


let month = 12;

if (month === 12 || month === 1) {
    console.log("Now This is Winter");
} else if (month === 2 || month === 3) {
    console.log("Now This is Spring");
} else if (month === 4 || month === 5 || month === 6) {
    console.log("Now This is Summer");
} else if (month === 7 || month === 8 || month === 9) {
    console.log("Now This is Monsoon");
} else if (month === 10 || month === 11) {
    console.log("Now This is Autumn");
} else {
    console.log("Invalid month number! Please use 1 to 12.");
}


console.log('============');
console.log('============');
console.log('============');

// Using age and hasID, use nested if-else to check whether someone is eligible to vote.


let Age = 25;
let hasID = true;

if(Age >= 18){
    if(hasID === true){
        console.log("You are eligible to vote.");
    }else{
        console.log("You cannot vote because you do not have a valid ID.");
    }
}else{
    console.log("You are too young to vote");
    
}


console.log('============');
console.log('============');
console.log('============');

// Using isLoggedIn and isAdmin, build a nested condition — if logged in and admin, print "Admin Dashboard"; if logged in but not admin, print "User Dashboard"; if not logged in, print "Please Login".


let isLoggedIn = true;
let isAdmin =true;

if(isLoggedIn){
    if(!isAdmin){
        console.log("user Dashboard");
    }else{
        console.log("Admin Dashboard");
    }
}else{
    console.log("Please Login");
}

console.log('============');
console.log('============');
console.log('============')

// Determine whether a number is even or odd using the ternary operator.

let TerNumber = 20;

let mainRes = (TerNumber % 2 === 0) ? "even":"odd" 

console.log(mainRes);


console.log('============');
console.log('============');
console.log('============');

//  Using age, determine "Adult" or "Minor" using the ternary operator.

let studentAge = 25;

let determine = (studentAge >= 18) ? "Adult" : "Minor"

console.log(determine);


console.log('============');
console.log('============');
console.log('============');

//  If the price is greater than 1000, print "Expensive", otherwise "Affordable" — write this using a ternary operator.

let productPrice = 1200;

let Total = (productPrice > 1000) ? "Expensive" : "Affordable"

console.log(Total);

console.log('============');
console.log('============');
console.log('============');

// Using hasPermission, use the ! operator to print "Access Denied" if permission is not granted.


let hasPermission = false;

let permission = (!hasPermission) ? "Access Denied" : "Access Allow"

console.log(permission);

console.log('============');
console.log('============');
console.log('============');

// Using isOnline, use the NOT operator to print "User is offline".

let isOnline = false;

if(!isOnline){
    console.log("User is offline");
}

console.log('============');
console.log('============');
console.log('============');

// Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.

let cartTotal = 1200;
let user = "admin";

if(cartTotal > 1000 && user === "member"){
    console.log((cartTotal * 20) / 100);
    
}else if(cartTotal > 1000){
    console.log((cartTotal * 10) / 100);

}else{
    console.log("no discount");
    
}
console.log('============');
console.log('============');
console.log('============');

// Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary).


let username = "Shanto";
let userPassword = "123";
let role = "Admin"

if(username === "Shanto" && userPassword === "123"){
    let checkRole = role === "Admin" ? "Welcome to Admin Dashboard" : "Welcome to User Dashboard"
    console.log(checkRole);
}else{
    console.log("your username or password not correct!");
}
