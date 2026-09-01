const price =(value) => {

    let minPrice = value[0]
    let maxProfit = 0

    for(let val of value){
        if(minPrice === val) continue;
        if(val < minPrice){
            minPrice = val
        }else{
            let currentProfit = val - minPrice

            if(currentProfit > maxProfit){
                maxProfit = currentProfit
            }
        }
    }

    return maxProfit

}

console.log(price([7, 1, 5, 3, 6, 4]));
