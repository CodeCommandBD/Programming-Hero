// const calculateOrderBill = (orderObj) => {
//     // console.log(Object.keys(orderObj));
    
//     if(!orderObj.buyer){
//         return "Invalid Order"
//     }

//     let {buyer, items=[]} = orderObj
    
//     let totalBill = items.reduce((total, item)=>{

//         return total + item.price
        
//     },0)

//     console.log(totalBill);
    

// }

// console.log(calculateOrderBill({ buyer: "Tanvir", items: [{price: 200}, {price: 50}] }));

// console.log(calculateOrderBill({ buyer: "Sadia" }));


// console.log(calculateOrderBill({ items: [{price: 100}] }));









// OLD problem

const extractUserInfo = (userObj) =>{
    // console.log(userObj);

    if(!userObj?.user?.name){
        return "Invalid"
    }
    
    let {name, age} = userObj.user

    let [firstItem = "nothing yet" ] = userObj.hobbies

    // console.log(firstItem);

    return `${name} (${age}) likes ${firstItem}`;
    

}

console.log(extractUserInfo({user: {name: "Sadia", age: 22}, hobbies: ["reading", "coding"]}));

console.log(extractUserInfo({user: {name: "Rafi", age: 19}, hobbies: []}));

console.log(extractUserInfo({user: {age: 30}, hobbies: []}));


