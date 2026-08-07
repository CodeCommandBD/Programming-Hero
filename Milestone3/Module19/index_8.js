// Task 2: getAvailableProducts(products) — filter() 
// Given an array of product objects { name, stock }, return only the products where stock is greater than 0.
// Input: 
// [{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }] 
// Output: 
// [{ name: "Pen", stock: 5 }, { name: "Notebook", stock: 2 }]


const   getAvailableProducts = (products) => {
    let findProduct = products.filter((product)=>{
        return product.stock > 0
    })
    return findProduct
}

let product = [{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }]


console.log(getAvailableProducts(product));
console.log(product);

