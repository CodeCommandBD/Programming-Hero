// 11. Cart Summary Generator
// Function Name Must be: cartSummary
// একটি E-commerce Cart System Cart Item Array নিয়ে Total Price বের করে, এবং Preview হিসেবে প্রথম কয়েকটা Item দেখায়।
// Input:
// Function দুইটি Parameter গ্রহণ করবে — cartItems (Array of Object, প্রতিটাতে price থাকবে), previewCount (Number, default 2)
// নিয়ম / Output:
// • reduce() দিয়ে সব item-এর price যোগ করে Total বের করতে হবে
// • slice(0, previewCount) দিয়ে প্রথম কয়েকটা Item Preview হিসেবে নিতে হবে
// • Return করতে হবে একটি Object: { total: <sum>, preview: <sliced array> }
// Validation:
// Return "Invalid" যদি cartItems Array না হয় অথবা Empty হয়।


const cartSummary = ( cartItems, previewCount = 2) => {
    if(!Array.isArray(cartItems) || cartItems.length ===  0){
        return "Invalid"
    }
    
    let sum = cartItems.reduce((total, item)=>{       
        return total + item.price
    },0)

   let sliceArray = cartItems.slice(0,previewCount)

    return {
        total: sum ,
        preview: sliceArray
    }
}
console.log(cartSummary([{price:100},{price:200},{price:300}]));
console.log(cartSummary([{price:50}], 1));
console.log(cartSummary([]));
