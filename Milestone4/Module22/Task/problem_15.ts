// Problem statement: 
// 1. Write a generic function named 'wrapInArray<T>' that takes a single value of type T 
//    and returns an array containing that value (i.e., T[]).
// 2. Write another generic function named 'getFirstAndLast<T>' that takes an array of type T (i.e., T[]) 
//    and returns an object containing the first and last elements: { first: T, last: T }.
//    (Assume the array will always have at least 2 elements for testing).
// 3. Test both functions with numbers and strings.

// Write your code below:
// const wrapInArray = ...
// const getFirstAndLast = ...



const wrapInArray = <T> (val: T): T[] => {
    return [val]
}

console.log(wrapInArray(10));
console.log(wrapInArray('typescript'));


const getFirstAndLast = <T> (item: T[]):{first: T, last: T} => {
    return{
        first: item[0],
        last:item[item.length - 1]
    }
}

console.log(getFirstAndLast([10, 20, 30, 40, 50]));
