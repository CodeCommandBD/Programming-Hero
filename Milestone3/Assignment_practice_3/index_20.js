const processSmartCart = (cart, discount = 10 ) => {

    if(!Array.isArray(cart)){
        return "Invalid"
    }
    

    let productTag = cart.filter((item)=>{
        return item?.tags?.includes('sale');
    })


    let totalCost = 0
    let item = ''
    let hightPrice = 0

    for(let tags of productTag){

        let discountAmount = tags.price * discount / 100

        totalCost += tags.price - discountAmount

       if(tags.price > hightPrice){
            hightPrice = tags.price
            item = tags.name
       }
        
    }

    return {
        saleItemsCount: productTag.length,
        totalCost: totalCost,
        topItem: item 
    }    
}

const cart = [
    { name: "Laptop", price: 1000, tags: "electronics, sale" },
    { name: "Mouse", price: 50, tags: "accessories" },
    { name: "Keyboard", price: 100, tags: "electronics, sale, rgb" }
];
// Output: { saleItemsCount: 2, totalCost: 880, topItem: "Laptop" }
// (Calculation: 1000 + 100 = 1100. 20% discount applied to 1100 = 880)


console.log(processSmartCart(cart));
