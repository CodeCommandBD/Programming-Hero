const processCheckout = (obj, discount= 10, ...price) => {
    let { details: {name}, points: [firstItem = 0]} = obj

    

    let total = price.reduce((total, item)=>{
        return total + item
    },0)
    
   let finalBill = total - discount
    
   return `${name}, your final bill is ৳${finalBill}. You earned ${firstItem} points!`

}

console.log(processCheckout({ details: { name: "Anis" }, points: [50, 100] }, 20, 200, 300));

console.log(processCheckout({ details: { name: "Sadia" }, points: [] }, undefined, 100, 50));

