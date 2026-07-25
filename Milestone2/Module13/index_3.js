// Problem 3: factorial of number

// 5 * 4 * 3 * 2 * 1

let numbers =  5;
let factor = 1;
for(let i = 1; i <= numbers; i++){
    factor *= i
}
console.log(factor);

// with Faction

function factNumber(num){
    let fact = 1;
    for(let i = 1; i <= num; i++){
        fact *= i
    }
    return fact
}

console.log(factNumber(5));
