const calculateCafeBill = (discount = 0, ...prices) => {
    if(prices.length === 0) {
        return "No items ordered"
    }

    let calculateBill = prices.reduce((total, item)=>{
        return total + item
    },0)

    let FinalBill = calculateBill - discount
    
    // console.log(FinalBill);
    
    return `Total: ৳${calculateBill}, Discount: ৳${discount}, Final: ৳${FinalBill}`

}

console.log(calculateCafeBill(10, 150, 200, 50));
console.log(calculateCafeBill(0, 120, 120));
console.log(calculateCafeBill(50));


