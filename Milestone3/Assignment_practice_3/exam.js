/* problem 1: Flexible Total calculator

    calculateTotal(...prices) using rest params, sums any number of prices, with a default discount = 0.

    Example : calculateTotal(0, 100, 200, 300) -> 600
    Example : calculateTotal(10, 100, 200) -> 270 (discount = 10)

*/


const calculateTotal=(discount = 10, ...prices) => {
    console.log(prices);

    let Total = 0

    for(let price of prices){
        Total  +=  price - (price * discount / 100)
    }

  
    return Total
    
    
}

console.log(calculateTotal(0, 100, 200, 300));
console.log(calculateTotal(10, 100, 200,50 ,300));

