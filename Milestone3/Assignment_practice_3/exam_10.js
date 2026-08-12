/*
    Problem Bulk discount Applier
    applyDiscount(prices, rate) apply a discount % to every price in the array and return a NEW array. The ORIGINAL prices array must stay exactly the same.

    Input: 
        prices = [500,1000,250]
        rate = 10 (10% discount)
    
    output:
        [450, 900, 225]

    original prices array must remain [500, 1000, 250]
*/


const applyDiscount = (price, rate = 10) =>{
    let discountPrice = price.map((item)=>{
        let total = item - (item * rate / 100)
        return total            
    })
    return discountPrice
}

let price = [500,1000,250]

console.log(applyDiscount(price));
console.log(price);
