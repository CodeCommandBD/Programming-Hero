const reverseEachWord=(sentence) => {
    if(typeof sentence !== 'string'){
        return "Invalid"
    }

    

    let wordSplit = sentence.split(' ')

    // console.log(wordSplit);
    
    let reverseWord = []

    for(let word of wordSplit ){

    let reverse =  word.split('').reverse().join('')

    reverseWord.push(reverse)
       
    }   

   return reverseWord.join(" ")

}

console.log(reverseEachWord('Hero is strong'));
