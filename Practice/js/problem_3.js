

const countVowels = (vowel) => {


    let vowelsWord = ['A', 'E', 'I', 'O','U']
    let UpperCase = vowel.toUpperCase()

    // console.log(UpperCase);
    
    let vowelCount = 0

    for(let findvowel of UpperCase){
        if(vowelsWord.includes(findvowel)){
            vowelCount ++
        }
        
    }
    return vowelCount


}

console.log(countVowels("javascript"));
