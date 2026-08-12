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
    let calculateItem = cart.reduce((total, currentValue)=>{
        // console.log(currentValue);
        return total + currentValue.price * currentValue.qty
    },0 )
    
    return calculateItem
};

let cart = [
  { name: "Pen", price: 20, qty: 3 },
  { name: "Notebook", price: 50, qty: 2 },
];

console.log(getCart(cart));
