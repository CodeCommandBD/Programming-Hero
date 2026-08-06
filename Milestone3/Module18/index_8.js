/*
problem : Most Expensive product

Given an object of product prices, use object.key() or object.entries() + Loop to find the most expensive product.

ex: {pen: 20, book: 150, bag: 500} -> "bag"

*/

const getMostExpensiveProduct = (obj) => {
    const keys = Object.keys(obj)

    // console.log(keys);
    

    let highest = 0
    let productName = ''

    for(let key of keys){
        // console.log(key, obj[key]);
        
        if(obj[key]  > highest){
            // console.log(keys[key]);
            
            highest = obj[key]
            productName = key
        }
    }
    // console.log(typeof productName);
    
    return productName
}

console.log(getMostExpensiveProduct({pen: 20, book: 150, bag: 500}));
