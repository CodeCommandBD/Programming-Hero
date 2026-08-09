const receiptGenerator = (item, price, qty) => {

    return ` ${item} x${qty} = ${price * qty} Taka `
}

console.log(receiptGenerator("pen", 20, 3));
