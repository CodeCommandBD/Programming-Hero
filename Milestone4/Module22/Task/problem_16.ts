// Problem statement: 
// Problem statement: 
// 1. Create a generic interface named 'ApiResponse<T>' that has two properties:
//    - success: boolean
//    - data: T
// 2. Write a generic function named 'handleResponse<T>' that takes an argument of type 'ApiResponse<T>' 
//    and returns only the 'data' part from it.
// 3. Test the function with two different data types:
//    - Pass an object where 'success' is true and 'data' is a string ("Login successful").
//    - Pass an object where 'success' is true and 'data' is a number (200).

// Expected Output:
// Login successful
// 200


// Write your code below:
// Step 1: Create the interface ApiResponse<T>
// ...

// Step 2: Create the generic function handleResponse<T>
// ...

// Step 3: Test the function with console.log
// ...


interface  ApiResponse<T> {
    success: boolean;
    data: T
}

const handleResponse = <T>(obj: ApiResponse<T>):T => {
    return obj.data
}

console.log(handleResponse({
    success:true,
    data: "Login Success"
}));





