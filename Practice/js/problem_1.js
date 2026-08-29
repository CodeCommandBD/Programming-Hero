const findSecondSmallest = (num) => {
    if(!Array.isArray(num) || num.length < 2){
        return null
    }

    let min = num[0]
    let secondmin = null

    for(let snum of num){
        if(snum === min) continue; 
        
        if(snum < min){
            secondmin = min 
            min = snum
        }else if(secondmin === null || snum < secondmin){
            secondmin = snum
        }
    }
    return secondmin    
}

console.log(findSecondSmallest([5, 2, 8, 1, 5]));
