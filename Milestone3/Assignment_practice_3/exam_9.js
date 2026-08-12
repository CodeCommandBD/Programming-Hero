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

const cartCalculator = (carts) => {
   
    let totalitem  = 0
    let  totalPrice = 0

    for(let cart of carts) {
      totalitem += cart.qty
      totalPrice += cart.Price * cart.qty        
    }

  
    
    
    
    
};

let cart = [
  { name: "Pen", Price: 100, qty: 1 },
  { name: "Notebook", Price: 100, qty: 2 },
];

console.log(cartCalculator(cart));
