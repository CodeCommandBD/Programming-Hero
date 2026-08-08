
const DiscountTotalCalculator = (prices, discount = 5) =>{
     
   
    let discountAmount = 0

    for(let price of prices){
       discountAmount += price - discount        
    }
    
    return discountAmount
}

let numArr = [100, 250, 80]
let numArr2 = [50]

console.log(DiscountTotalCalculator(numArr));
console.log(DiscountTotalCalculator(numArr2));
