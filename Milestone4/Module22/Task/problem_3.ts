// Problem Statement:
// You have a variable 'rawPrice' of type 'unknown' holding a fractional number.
// Use type assertion to treat 'rawPrice' as a 'number', and then use the '.toFixed(2)' method to format the number to 2 decimal places.
// Print the result twice: once using the 'as' syntax, and once using the angle-bracket '< >' syntax.

// Input:
// let rawPrice: unknown = 450.98765;


// Write your code below

// 1. Using 'as' syntax:
// ...


// 2. Using '< >' angle-bracket syntax:
// ...


// Expected Output:
// 450.99
// 450.99


let rawPrice:unknown = 450.9876

let result:number = Number((rawPrice as number).toFixed(2))

console.log(result);

let result2:number= Number((<number> rawPrice).toFixed(2))

console.log(result2);

