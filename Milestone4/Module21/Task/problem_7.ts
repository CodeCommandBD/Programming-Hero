const sumAll = (...nums: number[]): number => {
    return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1,2,3,4));
