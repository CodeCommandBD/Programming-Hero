const calculateWeeklyTotal = (expenses: number[]):number => {
    const total = expenses.reduce((acc, item)=>acc + item,0)
    return total
}

console.log(calculateWeeklyTotal([200, 450, 100]));
console.log(calculateWeeklyTotal([1000,250]));
