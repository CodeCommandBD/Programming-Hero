// Problem statement: Create a string enum OrderStatus: Placed, Shipped, Delivered, Cancelled. Write a function that prints a readable message for a given status.
// Input: OrderStatus.Shipped
// Output: "Current status: SHIPPED" (or equivalent readable message)

enum OrderStatus {
    Placed="PLACED", 
    Shipped="SHIPPED", 
    Delivered="DELIVERED", 
    Cancelled ="CANCELLED"
}

const prints =(status: OrderStatus)=>{
    console.log(`Current status: ${status}`);
    
}

prints(OrderStatus.Shipped)

