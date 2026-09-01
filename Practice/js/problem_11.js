

const isPalindrome = (palindrome) => {
    const reverse = palindrome.split('').reverse().join('')
    if(reverse === palindrome){
        return true
    }else {
        return false
    }
}

console.log(isPalindrome("madam"));
