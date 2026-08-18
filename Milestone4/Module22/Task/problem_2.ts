// Problem Statement: Declare a variable of type 'unknown' that holds an array of strings. 
// Use type assertion to treat the variable as a string array, and then use the '.join()' method to combine the words into a single sentence. 
// Repeat this process: print the sentence once using the 'as' syntax, and once using the angle-bracket '< >' syntax.

// Input:
// let words: unknown = ["TypeScript", "is", "awesome"];


// Write your code below to get the expected output
// 1. Using 'as' syntax:
// ...

// 2. Using '< >' angle-bracket syntax:
// ...


// Expected Output:
// TypeScript is awesome
// TypeScript is awesome




let val2:unknown = ["TypeScript", "is", "awesome"];

let result: string = (val2 as string[]).join(' ')

console.log(result);

let result2: string = (<string[]>val2).join(' ')

console.log(result2);
