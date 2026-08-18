// Problem statement: Declare a variable of type unknown holding a string. Use it to assert it as a string and get its length. Repeat using angle-bracket syntax <string>.
// Input: let val: unknown = "Hello TypeScript";
// Output: 16 (length), printed twice — once via as string, once via <string>.


let val: unknown = "Hello TypeScript";


// Using 'as' syntax

let lengthUsingAs: number = (val as string).length;
console.log(lengthUsingAs); // Output: 16

// Using angle-bracket syntax

let lengthUsingAngleBracket: number = (<string>val).length;
console.log(lengthUsingAngleBracket); // Output: 16