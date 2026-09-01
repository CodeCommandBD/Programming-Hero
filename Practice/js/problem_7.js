const findLongestWord = (sentence) => {
    let letter = sentence.split(' ')    
    // console.log(letter);

    let longestWord = ""

    for(let word of letter){
        // console.log(word);
        if(longestWord.length < word.length){
            longestWord = word
        }
    }
    return longestWord
}

console.log(findLongestWord("I love programming in JavaScript"));