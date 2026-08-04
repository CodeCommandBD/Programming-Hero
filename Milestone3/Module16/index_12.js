// Function Name Must be: calculateTotalBill
// একটি রেস্টুরেন্টের বিলে কতগুলো আইটেমের দাম আসবে তা আগে থেকে জানা নেই। Rest Parameter ব্যবহার করে যেকোনো সংখ্যক আর্গুমেন্ট রিসিভ করতে হবে এবং তাদের যোগফল বের করতে হবে।

// Input: Function যেকোনো সংখ্যক Number আর্গুমেন্ট গ্রহণ করবে — যেমন calculateTotalBill(100, 200, 50)

// Output / নিয়ম: Rest Parameter (...prices) ব্যবহার করে ইনপুটগুলো একটি Array-তে নিয়ে reduce() এর সাহায্যে যোগফল (Total) বের করে Return করতে হবে: "Total Bill: ৳<total>"

// Validation: যদি কোনো আর্গুমেন্ট না দেওয়া হয় (Empty), তবে Return করবে "Invalid".
const calculateTotalBill = (...prices) =>{

    if(prices.length === 0){
        return "Invalid"
    }

    let TotalBill = prices.reduce((total, item)=>{
        return total + item
    },0)
    
    
    return `Total Bill: ৳${TotalBill}`

}

console.log(calculateTotalBill(150,50, 100));
console.log(calculateTotalBill(500));
console.log(calculateTotalBill());
