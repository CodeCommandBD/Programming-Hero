
// Task 1: Cafe Bill Splitter (Rest, reduce & Default Parameter)Function Name Must be: calculateCafeBillএকটি ক্যাফেতে বন্ধুরা মিলে কফি খাওয়ার পর বিল হিসাব করার জন্য একটি ফাংশন তৈরি করতে হবে। ফাংশনটি একটি ডিসকাউন্ট (টাকায়) এবং সবার কফির দামগুলো রিসিভ করবে।



// InputArrow Function দুটি প্যারামিটার রিসিভ করবে — discount (Number, default 0), এবং ...prices (Rest Parameter - কফির দামগুলোর অ্যারে)।



// Output / নিয়ম (Rules)

// prices অ্যারেটির উপর reduce() চালিয়ে মোট বিল (Total) বের করতে হবে।
// Total থেকে discount (যদি থাকে) মাইনাস করে Final Bill বের করতে হবে।
// Template Literal ব্যবহার করে Return করতে হবে
// Total: ৳<total>, Discount: ৳<discount>, Final: ৳<finalBill>


// Validationযদি prices অ্যারে খালি (empty) হয়, তবে Return করতে হবে "No items ordered"



const calculateCafeBill = (discount = 0, ...prices) =>{

    if(prices.length === 0 ){
        return "No items ordered"
    }


    let Total = prices.reduce((total, item)=>{
        return total + item
    },0)

    let finalBill = Total - discount

    return `Total: ${Total} Discount: ${discount} FinalBill: ৳${finalBill}`

}

console.log(calculateCafeBill(10, 150, 200, 50));
console.log(calculateCafeBill(0, 120, 120));
console.log(calculateCafeBill(50));

