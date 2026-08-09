const removeDuplicates = (arr) => {
    if(!Array.isArray(arr)){
        return "Invalid"
    }
    let duplicate = []

    for(let item of arr){
        // console.log(item);
        
        if(!duplicate.includes(item)){
            duplicate.push(item)
        }
    }
    return duplicate
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
