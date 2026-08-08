// Task 7: sortByPriceAscending(products) — Callback Function 
// Given an array of product objects { name, price }, return a new array sorted from lowest to highest price using a comparator callback in sort().
// Input: 
// [{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }] 
// Output:
//  [{ name: "Pen", price: 10 }, { name: "Notebook", price: 60 }, { name: "Bag", price: 500 }]


const sortByPriceAscending = (products) => {

    let newArr = products.map((product)=>{
             
       return {
            name: product.name,
            price: product.price
       }
    })
    
   return newArr.sort((a,b)=> a.price - b.price )
}

let product = [{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }] 

console.log(sortByPriceAscending(product));
console.log(product);

