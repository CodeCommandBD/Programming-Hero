// Problem statement: Create a type alias PaymentMethod = "cash" | "card" | "mobile". Comment why interface can't express this. Create an Order interface using PaymentMethod.
// Input: let method: PaymentMethod = "card";

// Output: Order object like { id: 1, method: "card" }, type-checked successfully.


// ইন্টারফেস কেন এটি প্রকাশ করতে পারে না, তা মন্তব্য করে জানান।

// ইন্টারফেস সরাসরি লিটারাল টাইপ প্রকাশ করতে পারে না; এটি কেবল একটি অবজেক্টের কাঠামো সংজ্ঞায়িত করতে পারে, কিন্তু কোনো প্রপার্টির নির্দিষ্ট মানগুলো সংজ্ঞায়িত করতে পারে না।

type PaymentMethod = "cash" | "card" | "mobile"

interface Order {
    id: number;
    method: PaymentMethod
}

let payment: Order = {
    id: 1,
    method: 'card'
}

console.log(payment);



