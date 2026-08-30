const removeDuplicates = (numbers) =>{
    let dupli = []
    for (let num of numbers){
        if(!dupli.includes(num)){
            dupli.push(num)
        }
    }

    return dupli

}

console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));
