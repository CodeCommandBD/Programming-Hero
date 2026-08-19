// Problem Statement:
// 1. Declare an interface named 'Employee' with two properties: 'empId' (number) and 'role' (string).
// 2. You have a variable 'validData' of type 'unknown' coming from an API. Use standard assertion ('as' syntax) to treat it as an 'Employee' and print their role.
// 3. You have another variable 'invalidData' of type 'string'. 
// 4. Create a new variable named 'fakeEmployee' of type 'Employee'. Use the double assertion ('as unknown as') trick to assign 'invalidData' to 'fakeEmployee' without TypeScript throwing an error.

// Inputs:
// let validData: unknown = { empId: 101, role: "Software Engineer" };
// let invalidData: string = "I am not an object, just a string!";


// Write your code below

// Step 1: Define the 'Employee' interface
// ...


// Step 2: Use standard 'as' assertion to get and print the 'role' from validData
// ...


// Step 3: Use double assertion to assign 'invalidData' to 'fakeEmployee'
// let fakeEmployee: Employee = ...
// console.log(fakeEmployee);





interface Employee {
    empId: number;
    role: string
}

let validData: unknown = { empId: 101, role: "Software Engineer" };

let invalidData: string = "I am not an object, just a string!";


let userRole:string = (validData as Employee).role


console.log(userRole);


let fakeEmployee:Employee = invalidData as unknown as Employee

console.log(fakeEmployee);
