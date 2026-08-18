// return function
// return function
// return function

function add(a: number, b: number): number {
  return a + b;
}

let result: number = add(5, 10);
console.log("Result:", result);

// void function
// void function
// void function

function logMessage(message: string): void {
  console.log("Log:", message);
}

logMessage("Hello, TypeScript!");

// function with optional parameter
// function with optional parameter
// function with optional parameter

function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greet("Alice"));

// function with default parameter
// function with default parameter
// function with default parameter

function multiply(a: number, b: number = 2): number {
  return a * b;
}

console.log("Multiply:", multiply(5));

// array in function
// array in function
// array in function

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("Sum of Array:", sumArray([1, 2, 3, 4, 5]));

// array with map function
// array with map function
// array with map function

function doubleArray(numbers: number[]): number[] {
  return numbers.map((num) => num * 2);
}
console.log("Doubled Array:", doubleArray([1, 2, 3, 4, 5]));

// object in function
// object in function
// object in function

function displayUser(user: { name: string; age: number }): void {
  console.log(`User Name: ${user.name}, Age: ${user.age}`);
}

displayUser({ name: "Alice", age: 25 });

// array of objects in function
// array of objects in function
// array of objects in function

function displayUsers(users: { name: string; age: number }[]): void {
  for (const user of users) {
    console.log(`User Name: ${user.name}, Age: ${user.age}`);
  }
}

displayUsers([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
]);

// array destructuring in function
// array destructuring in function
// array destructuring in function
function displayCoordinates([x, y]: [number, number]): void {
  console.log(`X: ${x}, Y: ${y}`);
}

displayCoordinates([10, 20]);

// object destructuring in function
// object destructuring in function
// object destructuring in function

function displayAddress({street, city}: {street: string; city: string;}): void {
  console.log(`Street: ${street}, City: ${city}`);
}
const address = { street: "123 Main St", city: "Metropolis" };

displayAddress(address);

// array of objects destructuring in function
// array of objects destructuring in function
// array of objects destructuring in function

function displayProducts(products: { name: string; price: number }[]): void {
  for (const { name, price } of products) {
    console.log(`Product Name: ${name}, Price: ${price}`);
  }
}

displayProducts([
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
]);

// REST parameters with array
// REST parameters with array
// REST parameters with array

function sumArrays(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("Sum of Array:", sumArrays(1, 2, 3, 4, 5));

// rest parameters with object
// rest parameters with object
// rest parameters with object

function displayInfo({
  name,
  age,
  ...rest
}: {
  name: string;
  age: number;
  [key: string]: any;
}): void {
  console.log(`Name: ${name}, Age: ${age}`);
  console.log("Additional Info:", rest);
}

displayInfo({
  name: "Alice",
  age: 25,
  email: "alice@example.com",
  phone: "123-456-7890",
});

// function spread operator
// function spread operator
// function spread operator

function combineArrays(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

console.log("Combined Arrays:", combineArrays([1, 2, 3], [4, 5, 6]));
