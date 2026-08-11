/*
problem : Most Expensive product

Given an object of product prices, use object.key() or object.entries() + Loop to find the most expensive product.

ex: {pen: 20, book: 150, bag: 500} -> "bag"

*/

const getMostExpensiveProduct = (obj) => {
    // console.log(obj);

    // console.log(Object.values(obj));
    

    let productName = ''
    let store = 0
    const keys = Object.keys(obj)

    for(let key of keys){
        if(obj[key] > store){
            productName = key
        }
    }
    // console.log(productName);
    return productName
};

console.log(getMostExpensiveProduct({ pen: 20, book: 150, bag: 500 }));
