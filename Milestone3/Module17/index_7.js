// 7. Order Processor (Callback)
// Function Name Must be: processOrder
// একটি E-commerce System Order Process করার পর, Order Status অনুযায়ী ভিন্ন ভিন্ন Callback Function Call করতে চায় (Success বা Failure হ্যান্ডলার)।
// Input:
// Function তিনটি Parameter গ্রহণ করবে — orderTotal (Number), onSuccess (Function), onFailure (Function)
// নিয়ম / Output:
// • orderTotal > 0 হলে onSuccess(orderTotal) Call করবে, এবং সেই Callback-এর Return Value Return করবে
// • orderTotal <= 0 হলে onFailure(orderTotal) Call করবে, এবং সেই Callback-এর Return Value Return করবে
// Validation:
// Return "Invalid" যদি onSuccess অথবা onFailure Function না হয়।


const processOrder = (orderTotal, onSuccess, onFailure) => {

    if(typeof onSuccess !== 'function' || typeof onFailure !== 'function'){
        return "Invalid"
    }

    if(orderTotal > 0){
       return onSuccess(orderTotal)
    }else if(orderTotal <= 0){
        return onFailure(orderTotal)
    
    }
}

console.log(processOrder(500, t=>`Paid ${t}`, t=>`Failed`));
console.log(processOrder(-50, t=>`Paid ${t}`, t=>`Failed`));
console.log(processOrder(500, "x", "y"));



