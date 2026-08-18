// Problem statement: Write a generic function getLastElement<T> that returns the last element of an array. Test with number[] and string[].
// Input: [10, 20, 30] and ["a", "b", "c"]
// Output: 30 and "c"


const  getLastElement = <T>(item: T[]): T =>{
    let box = item[item.length - 1]

    return box
}

console.log(getLastElement([10,20,30]));
console.log(getLastElement(['a','b','c']));


