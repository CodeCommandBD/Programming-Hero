// problem 6: count vowels in a string

// method one 

let sentence = "shanto Kumar"
let vowels = ['a','e', 'i', 'o', 'u']
let count = 0;
let lowerSentence = sentence.toLowerCase();

for(let i = 0; i < lowerSentence.length ; i++){
    if(vowels.includes(lowerSentence[i])){
        count ++
    }
}

console.log(count);

// method two 

let sentence2 = "shanto Kumar"
let vowels2 = "aeiou"
let count2 = 0;
let lowerSentence2 = sentence.toLowerCase();

for(let i = 0; i < lowerSentence2.length ; i++){
    if(vowels2.includes(lowerSentence2[i])){
        count2 ++
    }
}

console.log(count2);


// with function

function countVowel(word){
    let count = 0;
    let vowels = 'aeiou'
    let lowerSentence = word.toLowerCase()
    for(let i = 0; i < lowerSentence.length; i++){
        if(vowels.includes(lowerSentence[i])){
            count++
        }
    }
    return count
}

console.log(countVowel("shanto kumar"));




