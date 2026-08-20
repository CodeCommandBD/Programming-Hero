// ============== Topics Covered: Type Alias, Union Type, Optional Property, and Tuple
// ============== Topics Covered: Type Alias, Union Type, Optional Property, and Tuple

// Task:

// Create a Type Alias named Product.

// It should have the following properties:

// name (string)

// price (number)

// category (A Union Type: "Electronics" | "Clothing" | "Books")

// discount (number, optional)

// Write a function named calculateFinalPrice that takes a Product object as a parameter.

// The function must return a Tuple [string, number].

// The first item of the tuple will be the product's name.

// The second item will be the final price (if there is a discount, subtract it from the price; if no discount, return the regular price).

// Test Cases:

// Input 1: { name: "Smartphone", price: 20000, category: "Electronics", discount: 1500 }
// Expected Output 1: ["Smartphone", 18500]

// Input 2: { name: "T-Shirt", price: 500, category: "Clothing" }
// Expected Output 2: ["T-Shirt", 500]

type Product = {
  name: string;
  price: number;
  category: "Electronics" | "Clothing" | "Books";
  discount?: number;
};

const calculateFinalPrice = (item: Product) : [string, number] => {
    
    let total = 0
    if(item.discount){
        total += item.price - item.discount
    }else{
        total += item.price
    }

    return [item.name, total]

};

console.log(
  calculateFinalPrice({
    name: "Smartphone",
    price: 20000,
    category: "Electronics",
    discount: 1500,
  }),
);

