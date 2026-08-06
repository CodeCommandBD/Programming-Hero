/*
    problem: Arrow Function with Default Parameters & logic 
    
    Write an arrow function that calculates shipping const based on order amount. Free shipping if amount >= 1000, otherwise charge a default fee 60 taka.

    Example: calculateShipping(1200) -> "Free shipping"
    Example: calculateShipping(500) -> "Shipping Fee: 60 Taka"
    Example: calculateShipping(500, 100) -> "Shipping Fee: 60 Taka"

 */

const calculateShipping = (amount, shippingFee = 60) => {
    if(amount >= 1000){
        return "Free Shipping"
    }else{
        return `Shipping Fee: ${shippingFee} Taka`
    }
}

console.log(calculateShipping(1200));
console.log(calculateShipping(500));
console.log(calculateShipping(500,100));
