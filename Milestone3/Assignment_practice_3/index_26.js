const calculateShipping = (orderAmount, charge = 60) => {
    let shippingCost = orderAmount >= 1000 ? "Free Shipping" : `Shipping Fee: ${charge} Taka`
    return shippingCost
}

console.log(calculateShipping(1200));
console.log(calculateShipping(500));
console.log(calculateShipping(500,100));
