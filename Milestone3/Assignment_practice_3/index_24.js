
const calculateTotal = (discount = 0 , ...prices) => {

    // let sum = 0

    // for(let price of prices){
    //     sum += price - (price * discount / 100)
    // }

    let total = prices.reduce((total, currentValue)=>{
        return total + currentValue
    },0)

    let discountAmount = total * discount / 100
    
    return  total - discountAmount
}

console.log(calculateTotal(0,100,200,300));
console.log(calculateTotal(10,100,200));
