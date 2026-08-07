/*
    problem:  Filtered cart Total (chaining filter -> map -> reduce) getExpensiveItemsTotal(cart, minPrice) - from the cart, keep only items priced at or above minPrice, then calculate the total cost (price * qty) of just those items - all in ONE chained expression.

    Input: [
        {name: "Pen", price: 20, qty: 3},
        {name: "HeadPhone", price: 800, qty: 1},
        {name: "NoteBook", price: 50, qty: 2},
        {name: "watch", price: 1500, qty: 1}
    ]
*/

const getExpensiveItemsTotal = (cart, minPrice) => {

    
    let expensiveItem = cart.filter((item)=>{
        return item.price > minPrice
    }) 
    
    let TotalItemPrice = expensiveItem.map((item)=>{
        return item.price * item.qty
    })
    
    let TotalPrice = TotalItemPrice.reduce((total, item)=>{
        return total + item
    },0)
    
    // console.log(TotalPrice);
    return TotalPrice

};
const cart = [
  { name: "Pen", price: 20, qty: 3 },
  { name: "HeadPhone", price: 800, qty: 1 },
  { name: "NoteBook", price: 50, qty: 2 },
  { name: "watch", price: 1500, qty: 1 },
];

console.log(getExpensiveItemsTotal(cart, 500));
