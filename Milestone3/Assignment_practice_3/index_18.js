const charFrequency = (str) => {
    if(typeof str !== 'string'){
        return "Invalid"
    }

    let char = {}

    for(let key of str){
               
        char[key] = (char[key] || 0) + 1        
    }


    return char
    

}

console.log(charFrequency('hero'));
console.log(charFrequency('hello'));
