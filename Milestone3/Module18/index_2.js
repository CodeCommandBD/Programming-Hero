/* problem 1: Flexible Total calculator

    calculateTotal(...prices) using rest params, sums any number of prices, with a default discount = 0.

    Example : calculateTotal(0, 100, 200, 300) -> 600
    Example : calculateTotal(10, 100, 200) -> 270 (discount = 10)

*/


const calculateTotal = (discount = 0 , ...prices) => {

    // let total = 0

    // for(let price of prices){
    //    let  percentage = (price * discount) / 100
    //    total += price - percentage
    // }

    let total = prices.reduce((total, item)=>{
        return total + item
    },0)

    let percentage = (total * discount) / 100

    total = total - percentage


    return total
}

console.log(calculateTotal(0, 100, 200, 300));
console.log(calculateTotal(10, 100, 200));

