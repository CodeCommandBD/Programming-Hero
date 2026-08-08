// Problem 1 — Discount Total Calculator
// একটি Shop-এ প্রতিটি Product-এর Price একটি Number Array আকারর দেওযা আরে। প্ররিেক Price দেরক ৫ িাকা
// Discount তেরয, সব Updated Price দ াগ করর Total Return কররি হরব।
// Input
// [100, 250, 80]
// Output
// 415
// Explanation
// Updated Prices: [95, 245, 75] → Total: 95 + 245 + 75 = 415


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
