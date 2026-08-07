/*
    Problem: Fix the mutation bug - Discount Preview

    previewDiscount(cart) - should return a NEW array showing what each cart item's price would be after a 10% discount, without changing the orginal cart. The buggy version below accidentally mutates the original objects because objects/arrays are passed by REFERENCE - writing to item.price inside map() edits the very same object the original cart array points to.


    Input: cart = [
        {name: "Pen", price: 100},
        {name: "Bag", price: 500},
    ]

    output: (new array ) original cart price field unchanged
        [
            {name: "Pen", price: 90}
            {name: "Bag", price: 450}
        ]

*/

const previewDiscount = (cart, discount = 10) => {
    let total = cart.map((item)=>{
        let discountItem = (item.price * discount) / 
        100
        let price = item.price - discountItem
        return {
            name: item.name,
            price: price
        }      
    })
    return total
};

const cart = [
  { name: "Pen", price: 100 },
  { name: "Bag", price: 500 },
];

console.log(previewDiscount(cart));
console.log(cart);

