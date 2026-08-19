// Problem statement: Create a Product interface with title: string, price: number, inStock?: boolean. Create two product objects — one with inStock, one without. Write a function that logs a product's price.



// Input: { title: "Laptop", price: 55000 } and { title: "Mouse", price: 500, inStock: true }
// Output: 55000 and 500 printed by the function.


interface Product {
    title: string;
    price: number;
    inStock?: boolean
}

let pro1:Product = {
    title: 'Laptop',
    price: 500000
}

let pro2:Product = {
    title:"Mouse",
    price: 500,
    inStock: true
}

const productPrice = (item: Product) => {
    console.log(item.price);
}

productPrice(pro1)
productPrice(pro2)

