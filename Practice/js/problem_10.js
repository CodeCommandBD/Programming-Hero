
const reverseWords = (word) => {
    const reverse = word.split(' ').reverse().join(' ') 
    return reverse
}

console.log(reverseWords("I love JavaScript"));
