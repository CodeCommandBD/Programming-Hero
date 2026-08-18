// Problem statement: 
// 1. Write a generic function named 'getWrappedValue<T>' that takes an object 
//    containing a property named 'value' of type T (i.e., { value: T }).
// 2. The function should return the actual value inside that 'value' property.
// 3. Test the function by passing:
//    - { value: 100 } (should return number)
//    - { value: "Hello TypeScript" } (should return string)

// Expected Output:
// 100
// Hello TypeScript


// Write your code below:
// const getWrappedValue = ...


const getWrappedValue = <T> (obj: {value: T}): T => {
    return obj.value    
}

console.log(getWrappedValue({value: 100}));
console.log(getWrappedValue({value: "Hello typescript"}));


