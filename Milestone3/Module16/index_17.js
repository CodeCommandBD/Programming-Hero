// Question 5: The Movie Profit Calculator
// Function Name Must be: calculateMovieProfit

// একটি মুভি প্রোডাকশন হাউজের জন্য বাজেট এবং লাভের হিসাব করার ফাংশন বানাতে হবে।

// Inputs:

// movieData (Object) - মুভির নাম, বক্স অফিস আয় এবং শুটিংয়ের প্রাথমিক খরচের তালিকা।

// ...newExpenses (Rest Parameter) - মুভি রিলিজের পর হওয়া নতুন খরচের তালিকা। এটি অবজেক্টের অ্যারে হবে (যেমন: { sector: "marketing", amount: 200 })।

// (বি.দ্র: এখানে কোনো খরচের খাত (sector) রিপিট হবে না, তাই আগের মতো যোগ করার দরকার নেই। শুধু নতুন করে বসিয়ে দিলেই হবে।)

// Rules / Logic (এই স্টেপগুলো ফলো করতে হবে):

// Validation: শুরুতেই চেক করুন movieData.title আছে কিনা। না থাকলে রিটার্ন করুন "Invalid Movie".

// Destructuring & Optional Chaining:

// movieData থেকে title বের করুন।

// boxOffice.income বের করে তার নাম (ভেরিয়েবলের নাম) দিন revenue, আর না থাকলে ডিফল্ট দিন 0। (Optional Chaining ?. ব্যবহার করতে পারেন)।

// movieData থেকে baseCosts অবজেক্টটি বের করুন, না থাকলে ডিফল্ট হিসেবে {} নিন।

// Spread Operator: baseCosts এর একটি কপি তৈরি করুন, যার নাম দিন finalCosts।

// Direct Dynamic Assignment: newExpenses অ্যারের উপর for...of লুপ চালান। প্রতিটি আইটেমের sector কে key হিসেবে ধরে finalCosts এ তার amount বসিয়ে দিন। (এখানে কোনো যোগের কাজ নেই, শুধু ডাইরেক্ট বসিয়ে দেওয়া: finalCosts[key] = value)।

// Delete Keyword: finalCosts এর উপর for...in লুপ চালান। যদি কোনো খরচের পরিমাণ (amount) 0 (শূন্য) হয়, তবে সেই খাতটি (sector) delete করে দিন (কারণ শূন্য খরচের হিসাব রাখার দরকার নেই)।

// Total & Profit Calculation:

// Object.values() এবং reduce() ব্যবহার করে finalCosts এর মোট খরচ (total cost) বের করুন।

// এরপর মোট আয় (revenue) থেকে মোট খরচ (total cost) মাইনাস করে লাভ (profit) বের করুন।

// Template Literal: নিচের হুবহু ফরম্যাটে আউটপুট রিটার্ন করুন।

// Output Format Example:

// Plaintext
// Movie: <title>
// Total Revenue: $<revenue>
// Total Cost: $<calculated total cost>
// Net Profit: $<calculated profit>
// টেস্ট কেস (Test Cases)


const calculateMovieProfit = (movieData, ...newExpenses) =>{
    if(!movieData.title){
        return "Invalid Movie"
    }

    let {title} = movieData

    let revenue = movieData?.boxOffice?.income || 0

    let baseCosts = movieData?.baseCosts || {}

    const finalCosts = {
        ...baseCosts
    }

    for(let expens of newExpenses){
        
        finalCosts[expens.sector] = expens.amount
        
    }

    for(let final in finalCosts ){
        
        if( finalCosts[final] === 0){
            delete finalCosts[final]
        }
    }

    let TotalCost = Object.values(finalCosts).reduce((total, item)=>{
        return total + item
    },0)
    
    let profit = revenue - TotalCost

  

    return `
        Movie: ${title}
        Total Revenue: ${revenue}
        Total Cost: ${TotalCost}
        Net Profit: $${profit}
    `
    

}

const movie1 = {
  title: "Avengers",
  boxOffice: { income: 5000 },
  baseCosts: { actors: 1000, location: 500 }
};

// Function Call:
console.log(calculateMovieProfit(movie1, { sector: "vfx", amount: 800 }, { sector: "marketing", amount: 700 }));


const movie2 = { title: "Indie Film" }; // boxOffice এবং baseCosts নেই

// Function Call:
console.log(calculateMovieProfit(movie2, { sector: "camera", amount: 150 }, { sector: "food", amount: 0 })); // food এর খরচ 0, তাই এটি ডিলিট হবে