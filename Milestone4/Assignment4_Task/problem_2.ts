// Task:

// Define a tuple type named HttpResponse that represents a server response. It must contain exactly three elements in this order:

// A Status Code (number)

// A Message (string)

// A Success Flag (boolean)

// Write a function that takes this HttpResponse tuple as a parameter.

// If the success flag is true, return: "Success: [Message] (Code: [Status Code])".

// If the success flag is false, return: "Error: [Message] (Code: [Status Code])".

// Test Cases:

// Input 1: [200, "Data fetched successfully", true]
// Expected Output 1: "Success: Data fetched successfully (Code: 200)"

// Input 2: [404, "Page not found", false]
// Expected Output 2: "Error: Page not found (Code: 404)"



type HttpResponse = [number, string, boolean]

const httpreq = ([code, msg, isSuccess]: HttpResponse):string => {
    if(!isSuccess){
        return `Success: ${msg} (${code})`
    }else{
        return `Error: ${msg} (${code})`
    }
}

console.log(httpreq([200, "Data fetched successfully", true]));
console.log(httpreq([404, "Page not found", false]));
