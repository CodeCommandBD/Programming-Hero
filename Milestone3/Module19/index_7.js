// Module 19 — Practice Tasks

// Task 1: getFormattedPrices(prices) — map() 

// Given an array of numbers, return a new array where each price is formatted as a string prefixed with "$".
// Input: [100, 250, 75] 
// Output: ["$100", "$250", "$75"]


const getFormattedPrices = (prices) => {

    let newArr = prices.map((price)=>{
        return `$${price}`
    })
    return newArr
}
let price = [100, 250, 75] 

console.log(getFormattedPrices(price));
