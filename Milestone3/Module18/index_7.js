/*
    problem: swap & rest extractor
    
    swap two variables and extract first/rest elements from an array using destructing, no temp variable.

    ex: [a,b] = [b,a]
    ex: [first, ...rest] = [10,20,30,40] -> first = 10 , rest =[20,30,40]
*/

const swapValues = (val1, val2) => {
    
    return [val2, val1]; 
}

let a = 5;
let b = 10;

console.log(`Before Swap: a = ${a}, b = ${b}`);


[a, b] = swapValues(a, b);

console.log(`After Swap: a = ${a}, b = ${b}`);

