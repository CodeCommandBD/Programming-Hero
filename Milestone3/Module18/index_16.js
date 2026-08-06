// Task 5: getEmployeeDept(employee) — Nested Destructuring 
// Given { name, job: { title, department } }, return { title, department } using nested destructuring.
// Input:  
// { name: "Nadia", job: { title: "PM", department: "Product" } }
// Output: 
// { title: "PM", department: "Product" }


const getEmployeeDept = (employee) => {
    let {name, job: {title, department}} = employee

    return  {
        title: title, department: department
    }
} 

console.log(getEmployeeDept({name: "Nadia", job: { title: "PM", department: "Product" }}));
