// Problem 7: Check if a string is a palindrome

let palindromeChar = "mar"
let palindrome = '';

for(let i = palindromeChar.length - 1; i >= 0; i--){
    palindrome += palindromeChar[i]
}

if(palindromeChar === palindrome){
    console.log("this string is a palindrom");
}else{
    console.log("this string is not  palindrom");
    
}
console.log(palindrome);


// with function 

function isPalindrom(value){
    let palindromBox = '';
    let lowercaseValue = value.toLowerCase()
    for(let i = lowercaseValue.length - 1; i >= 0; i--){
        palindromBox += lowercaseValue[i]
    }

    if(lowercaseValue === palindromBox){
        return "this string is a palindrom"
    }else{
        return "this string is not a palindrom"
    }

}

console.log(isPalindrom("madame"));
