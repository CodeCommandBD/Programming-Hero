const calculateBill = (bill, tax = 0.05) =>{
    let finalBill = bill + bill * tax     
    return finalBill
}

console.log(calculateBill(1000));
console.log(calculateBill(1000, 0.10));
