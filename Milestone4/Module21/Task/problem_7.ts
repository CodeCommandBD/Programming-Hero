const sumAll =(...num: number[]) => {
    const total = num.reduce((total, item) => {
        return total + item
    },0)   
    return total 
}

console.log(sumAll(1,2,3,4));
