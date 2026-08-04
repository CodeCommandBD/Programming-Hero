// Question 1: The Secure Store Auditor
// Function Name Must be: secureStoreAudit

// একটি ই-কমার্স স্টোরের ডেটাবেস অডিট করার জন্য একটি ফাংশন লিখতে হবে। ফাংশনটি স্টোরের কিছু তথ্য এবং কয়েকটি প্রোমোকোড রিসিভ করবে। সেখানে থেকে ডেটা ফিল্টার করে একটি সিকিউর রিপোর্ট জেনারেট করতে হবে।

// Inputs:

// storeData (Object) - স্টোরের ইনফরমেশন।

// ...promoCodes (Rest Parameter) - যেকোনো সংখ্যক প্রোমোকোড (Number)।

// Rules / Logic (অবশ্যই এই স্টেপগুলো ফলো করতে হবে):

// Arrow Function ব্যবহার করতে হবে।

// Nested Destructuring ব্যবহার করে storeData থেকে স্টোরের name এবং inventory.stock বের করতে হবে। (বি.দ্র: কোনো কারণে inventory বা stock অবজেক্টটি না থাকলে যাতে কোড ক্র্যাশ না করে, তার জন্য Optional Chaining বা Default value-র ট্রিকস ব্যবহার করতে হবে)।

// Spread Operator ব্যবহার করে stock অবজেক্টটির একটি শ্যালো কপি (Shallow copy) তৈরি করতে হবে (ধরুন নাম দিলেন activeStock)।

// Object Looping (for...in বা Object.entries) চালিয়ে activeStock এর ভেতর যেসব আইটেমের পরিমাণ 0, সেগুলো delete কিওয়ার্ড দিয়ে রিমুভ করে দিতে হবে।

// এরপর activeStock অবজেক্টটিকে Object.freeze() করতে হবে, যাতে কেউ আর কোনো ডেটা পরিবর্তন করতে না পারে।

// Spread Operator এবং Math.max() ব্যবহার করে promoCodes থেকে সর্বোচ্চ (Max) প্রোমোকোড ভ্যালুটি বের করতে হবে।

// সবশেষে Multiline Template String ব্যবহার করে নিচের হুবহু ফরম্যাটে আউটপুট রিটার্ন করতে হবে।



const secureStoreAudit = (storeData, ...promoCodes) =>{

    // console.log(storeData.name);
    
let finalPromo = "";
if (promoCodes.length === 0) {
    finalPromo = "No Promo";
} else {
    finalPromo = `৳${Math.max(...promoCodes)}`;
}


let {name} = storeData

let stock = storeData?.inventory?.stock || {}


const activeStock = {...stock}

for(let key in activeStock){
    if(activeStock[key] <= 0){
        delete activeStock[key]
    }
}

Object.freeze(activeStock)



return `
    Store: ${name}
    Available Items: ${Object.keys(activeStock).length > 0 ? Object.keys(activeStock).join(', ') : "None" }
    Max Promo: ${finalPromo}
`




}


const store1 = {
  name: "Tech Hub",
  inventory: {
    stock: { laptop: 15, phone: 0, watch: 5, tablet: 0 }
  }
};
// Function call:
console.log(secureStoreAudit(store1, 100, 500, 250));





const store2 = { name: "Gadget Fix" };
// Function call:
console.log(secureStoreAudit(store2));
