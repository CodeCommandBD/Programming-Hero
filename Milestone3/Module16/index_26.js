// const bookTicket = (movie, seats = 1, pricePerseat = 300) =>{

//     if(typeof movie !== 'string' || (seats < 0 && pricePerseat < 0)){
//         return "Invalid"
//     }
//     let total = seats * pricePerseat

//     return `${movie}: ${seats} seat(s), Total: ${total}`
    
// }

// console.log(bookTicket("Dune"));
// console.log(bookTicket("Dune", 3));
// console.log(bookTicket("Dune", 2, 450));
// console.log(bookTicket(123, 2));



// ======================= NEW PROBLEM  ===============================
// ======================= NEW PROBLEM  ===============================
// ======================= NEW PROBLEM  ===============================



// const calculateFinalBill = (orderData) =>{
//     // console.log(orderData.items);
    
//     if(!orderData.table){
//         return "Invalid Table"
//     }

//     let {table, items = []} = orderData

//     let subTotal = items.reduce((total, item)=>{
//         return  total + item.price
//     },0)

    
//     let percentage = orderData?.discountInfo?.percentage || 0


//     let finalTotal = subTotal - ((subTotal * percentage) / 100)


//     return `Table ${table} : Final Bill is ৳${finalTotal}`
    
    
    

    
// }

// console.log(calculateFinalBill({ table: 5, items: [{price: 300}, {price: 200}], discountInfo: { percentage: 10 } }));

// console.log(calculateFinalBill({ table: 2, items: [{price: 500}] }));

// console.log(calculateFinalBill({ items: [{price: 150}] }));




//  practice =====================================
//  practice =====================================
//  practice =====================================




const product = { title: "Laptop" }

let {title, price = 0} = product


const scores = [80, 90, 95]

let [math , english] = scores


const student = { id: 1, marks: [50, 60] }

let {id, marks = []} = student

console.log(marks);


