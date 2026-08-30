const findDuplicate = (numbers) =>{
    if(!Array.isArray(numbers) || numbers.length === 0){
        return null
    }

    let seen = []
    let dupli = []
    for(let num of numbers){
        if(!seen.includes(num)){
            seen.push(num)
        } else{
            if(!dupli.includes(num)){
                dupli.push(num)
            }
        }
    }

    return dupli
    
}
console.log(findDuplicate([1,2,5,3,1,5,4,1]));
