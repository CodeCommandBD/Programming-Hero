// problem 2: sum of a range of Number(1 ot N)

let Numbers = 10;

let sum = 0;

for(let i = 1; i <= Numbers; i++){
    sum += i
}

console.log(sum);

// With Function

function sumOfrange(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i
    }
    return sum
}

console.log(sumOfrange(10));
