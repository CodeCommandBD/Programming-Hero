
const sumAllPrices = (number) => {
    const total = number.reduce((acc, item)=>{
        return acc + item
    })

    return total
}

console.log(sumAllPrices([100, 250, 75]));
