// receipt generator 

// build a receipt generator using template strings - take item name, price, qty as input , output formatted multiline receipt.

// Ex: Input ("Pen", 20,  3) -> output ("Pen x 3 = 60Taka")


const receiptGenerator = (name, price, qty) => {
        let total = price * qty
    return `${name} x ${qty} = ${total} Taka`
}
console.log(receiptGenerator("Pen", 20, 3));

