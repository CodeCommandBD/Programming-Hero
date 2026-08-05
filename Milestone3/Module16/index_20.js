// Task 3: Secure Store Settings (Spread & Object Methods)

// Function Name Must be: secureStoreSettings
// একটি ইকমার্স সাইটের Default Settings এবং User Settings মার্জ (Merge) করে সেটিংস লক (Lock) করে দিতে হবে, যাতে কেউ পরে তা পরিবর্তন করতে না পারে। এরপর শুধু সেটিংসের নামগুলো (keys) রিটার্ন করতে হবে।


// Input

// secureStoreSettings(defaultSettings, userSettings) — দুটি Object।


// Output / নিয়ম (Rules)

// Spread Operator (...) দিয়ে দুটি Object মার্জ করে finalSettings নামের নতুন একটি অবজেক্ট বানাতে হবে। (খেয়াল রাখবেন, userSettings এর প্রায়োরিটি বেশি থাকবে, অর্থাৎ এর ভ্যালুগুলো defaultSettings কে রিপ্লেস করবে)।

// Object.freeze() ব্যবহার করে finalSettings কে লক করে দিতে হবে।

// Object.keys() ব্যবহার করে finalSettings এর প্রপার্টির নামগুলো (keys) একটি Array হিসেবে Return করতে হবে।




// Validation

// যদি ইনপুট দুটি Object না হয় বা Missing (যেমন: null বা undefined) থাকে, তবে Return করতে হবে "Invalid Input"।
// (Hint: জাভাস্ক্রিপ্টে typeof null চেক করলে 'object' দেখায়। তাই if(!defaultSettings || !userSettings || typeof defaultSettings !== 'object' || typeof userSettings !== 'object') চেক করাটা সবচেয়ে নিরাপদ!)


const secureStoreSettings = (defaultSettings, userSettings) => {

    if(typeof defaultSettings !== 'object' || typeof userSettings !== "object" || !defaultSettings || !userSettings){
        return "Invalid Input"
    }

    let finalSettings = {
        ...defaultSettings, ...userSettings
    }

    Object.freeze(finalSettings)

    return Object.keys(finalSettings)
    
}

console.log(secureStoreSettings({ theme: "light", currency: "USD" }, { theme: "dark", lang: "BN" }));

console.log(secureStoreSettings({ alerts: true }, { alerts: false }));

console.log(secureStoreSettings(null, { theme: "dark" }));


