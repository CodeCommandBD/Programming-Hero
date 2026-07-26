// problem 5: Reverse a string

// Method one (useing Build method)

let char = "shanto"
console.log(char.split('').reverse().join(''));


// Mehod two (useing loop)

let char2 = "kumar"
let reverse = ""

for(let i = char2.length - 1 ; i >= 0; i--){
    reverse += char2[i]
}
console.log(reverse);


// With Function 

function reverseString(word){
    let reverseWord = ""
    for(let i = word.length -1; i >=0; i--){
        reverseWord += word[i]
    }
    return reverseWord
}

console.log(reverseString("Programming"));
