// 1. Given a string, print its length and the character found at a specific index.

let char = "shanto kumar das"

let length = char.length

console.log(length);
console.log(char.charAt(0));

console.log("===================");
console.log("===================");


// 2. Take a string with extra leading/trailing spaces and mixed casing, and use trim() and toLowerCase() to clean it up, then print the cleaned result.

let char2 = "      Shanto Kumar Das        "

let result = char2.toLocaleLowerCase().trim()

console.log(result);

console.log("===================");
console.log("===================");

// 3. Given two strings (first name and last name), combine them into a full name using a template literal and print a greeting message.

let fn = "shanto"
let ln = "kumar"

let fulln = `hello i am ${fn} ${ln}`
console.log(fulln);


// 4. Check whether a given string includes a specific word or substring, and print true or false.

let char3 = "shanto kumar das"

let findWord = char3.includes("kumar")

console.log(findWord);


// 5. Reverse a given string using the split() → reverse() → join() method.


let reverseString = "shanto"

console.log(reverseString.split('').reverse().join(''));


// 6. Create an object representing a student with name, age, and grade properties, then print each property using dot notation.

const studentinfo = {
    name : 'shanto',
    age: 26,
    grade: "A+"
}

console.log(studentinfo.name);
console.log(studentinfo.age);
console.log(studentinfo.grade);

// 7. Given an object representing a book, use Object.keys() and Object.values() to print all of its property names and values separately.

const books = {
    booksName : 'poka',
    author: "rahim",
    publised:"2/4/2024"
}

console.log(Object.keys(books));
console.log(Object.values(books));

// 8. Given a nested object representing a person with an embedded address object, access and print a property from inside the nested object.

const person = {
    name: "shanto",
    age: 26,
    address: {
        house: 554,
        road: "14/uttara"
    },
    favorite: ['reading','playing']

}
console.log(person.address.house);


// 9. Given a string, print it in both uppercase and lowercase using the appropriate string methods.

let char4 = "shanto"

console.log(char4.toLowerCase());
console.log(char4.toUpperCase());

// 10. Use slice() to extract and print the first three characters and the last three characters of a given string.

let char5 = "shanto kumar das"

console.log(char5.slice(0,4));
console.log(char5.slice(0,6));

// 11. Given an object, use the delete operator to remove one of its properties and print the object before and after deletion.


const user = {
    name: 'shanto',
    age: 26,
    blood: "a+"
}
console.log(user);
delete user.blood
console.log(user);

// 12. Write a program that loops through an object representing a person's details using a for...in loop and prints each key alongside its value.

const userDetils = {
    name:"shanto",
    age: 26,
    address:{
        home: 255,
        road:'25/uttara'
    },
    favorite:['reading', 'writing', "playing"]
}

for(let user in userDetils){
    console.log(`${user}: ${userDetils[user]}`);
    
}
console.log("==========");


// 13. Given a sentence (string), count and print how many times a specific character appears in it.

let sentence = "hello programmer. let's go"
let searchChar = "e" 
let count = 0

for(let char of sentence){
    if(char === searchChar){
        count ++
    }
}
console.log(count);

