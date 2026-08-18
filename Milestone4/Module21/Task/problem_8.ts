const multiArray = (arr1: number[], arr2: number[]) => {
    return [...arr1, ...arr2];
}

let arr1 = [1,2,3,4];
let arr2 = [5,6,7];

console.log(multiArray(arr1, arr2));
