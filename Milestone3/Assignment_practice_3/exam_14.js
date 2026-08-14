/*
    problem:  Filtered cart Total (chaining filter -> map -> reduce) getExpensiveItemsTotal(cart, minPrice) - from the cart, keep only items priced at or above minPrice, then calculate the total cost (price * qty) of just those items - all in ONE chained expression.

    Input: [
        {name: "Pen", price: 20, qty: 3},
        {name: "HeadPhone", price: 800, qty: 1},
        {name: "NoteBook", price: 50, qty: 2},
        {name: "watch", price: 1500, qty: 1}
    ]
    minPrice = 500

    outPut:  2300 
*/

const getExpensiveItemsTotal = (cart, minPrice) => {
  // console.log(cart);

  let grandTotal = cart
    .filter((item) => item.price >= minPrice)
    .map((item) => item.price * item.qty)
    .reduce((total, currentItem) => total + currentItem, 0);

 return grandTotal
};

let carts = [
  { name: "Pen", price: 20, qty: 3 },
  { name: "HeadPhone", price: 800, qty: 1 },
  { name: "NoteBook", price: 50, qty: 2 },
  { name: "watch", price: 1500, qty: 1 },
];
console.log(getExpensiveItemsTotal(carts, 500));
