/*
    problem: Shopping Cart Total (reduce)

    getCart(cart) - sum price * qty across every item in the cart using reduce()

    Input: 
        cart = [
            {name: "Pen", price: 20, qty: 3},
            {name: "Notebook", price: 50, qty: 2},
        ]
*/

const getCart = (cart) => {

    let total = cart.reduce((total, item)=>{
        // console.log(item);
        
        return total + (item.price * item.qty)
    },0)

  
    return total
    
};

const cart = [
  { name: "Pen", price: 20, qty: 3 },
  { name: "Notebook", price: 50, qty: 2 },
];

console.log(getCart(cart));
