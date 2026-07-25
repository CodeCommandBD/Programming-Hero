// problem 1 : check if a number is even or odd

let number = 10;

if(number % 2 === 0){
    console.log("Even number");
}else{
    console.log("Odd number");
}

//  with function

function checkNum(num){
    if(num % 2 === 0){
        return "Even Number"
    }else{
        return "Odd Number"
    }
}

console.log(checkNum(10));
