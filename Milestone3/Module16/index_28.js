// const generateReceipt = (customerName, items, total) =>{

//     if(!Array.isArray(items) || items.length === 0){
//         return "Invalid"
//     }


//     return `
//         Receipt for ${customerName}
//         Items: ${items.join(', ')}
//         Total: ${total}
//     `


// }

// console.log(generateReceipt("Rakib", ["Pen", "Book"], 150));
// console.log(generateReceipt("Tanvir", [], 0));


// problem 2 ==========================
// problem 2 ==========================
// problem 2 ==========================


const manageInventoryObject = (obj, action) => {
    if(typeof obj !== 'object' || !action ){
        return "Invalid"
    }
    if(action === "keys"){
        return  Object.keys(obj)
    }else if(action === 'values'){
        return  Object.values(obj)
    }
    
}
console.log(manageInventoryObject({a:1, b:2, c:3}, "keys"));

console.log(manageInventoryObject({a:1, b:2, c:3}, "delete:c"));

console.log(manageInventoryObject({a:1}, "shrink"));

