/*
    Problem: cart total calculator

    you have an array of cart items, each with a name, price, and qty (quantity), calculate:

    1. Total number of items in the cart (sum of all qty)
    2. Total cost (sum of price x qty for each item)


    Then print one final message using a template string:
        "Total: x items, Y Taka

    Input:[
        {name: "Pen" , Price: 100, qty: 1},
        {name: "Notebook", Price: 100, qty: 2}
    ]

    output: 
        "Total: 3 items, 300 Taka"

    if the cart is missing (null/undefined), don't crash print "Total: 0 items, 0 Taka instead"

*/


const cartCalculator = (cartitems) => {
    if (cartitems === null || cartitems === undefined) {
        return `Total: 0 items, 0 Taka`; 
    }
    let totalItem = 0;
    let totalPrice = 0;

    

    for(let item of cartitems){
        // console.log(item.qty);
        let {Price , qty} = item
        
        totalItem += qty
        totalPrice += Price * qty
    }

   return `Total: ${totalItem} items, ${totalPrice} Taka`;
    
}

const cartitems = [
        {name: "Pen" , Price: 100, qty: 1},
        {name: "Notebook", Price: 100, qty: 2}
]

console.log(cartCalculator(cartitems));
console.log(cartCalculator(null));
