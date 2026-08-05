// Question 3: The Smart Library Manager
// Function Name Must be: updateLibraryRecords

// একটি লোকাল লাইব্রেরির বইয়ের স্টক ম্যানেজ করার জন্য একটি ফাংশন লিখতে হবে। ফাংশনটি লাইব্রেরির বর্তমান ডেটা এবং নতুন ডোনেট করা (donated) বইয়ের তালিকা রিসিভ করবে। এরপর ডেটাগুলো প্রসেস করে একটি আপডেটেড রিপোর্ট জেনারেট করবে।

// Inputs:

// libraryData (Object) - লাইব্রেরির তথ্য এবং বর্তমান বইয়ের স্টক।

// ...donatedBooks (Rest Parameter) - নতুন ডোনেট করা বইয়ের ক্যাটাগরি ও সংখ্যা। এটি মূলত অবজেক্টের একটি অ্যারে হবে (যেমন: { category: "science", count: 20 })।

// Rules / Logic (এই স্টেপগুলো ফলো করতে হবে):

// Arrow Function ব্যবহার করতে হবে।

// Validation: শুরুতেই চেক করুন libraryData.name আছে কিনা। না থাকলে রিটার্ন করুন "Invalid Data"।

// Nested Destructuring & Default: libraryData থেকে লাইব্রেরির name এবং contact.email বের করুন। যদি contact বা email না থাকে, তবে email এর ডিফল্ট ভ্যালু হিসেবে "N/A" সেট করুন।

// Optional Chaining: libraryData থেকে books অবজেক্টটি বের করুন। যদি books না থাকে, তবে ডিফল্ট হিসেবে একটি খালি অবজেক্ট {} নিন।

// Spread Operator: books এর একটি শ্যালো কপি তৈরি করুন, যার নাম দিন updatedBooks।

// Dynamic Object Update: donatedBooks (যেটি একটি অ্যারে) এর উপর লুপ চালান (যেমন forEach বা for...of)। প্রতিটি ডোনেশনের category অনুযায়ী updatedBooks এ বইয়ের সংখ্যা যোগ করুন। (যদি ওই ক্যাটাগরি আগে থেকে updatedBooks-এ না থাকে, তবে নতুন করে তৈরি করে ভ্যালু বসাবেন)।

// Object Deletion: updatedBooks এর উপর for...in লুপ চালান। যদি কোনো ক্যাটাগরির বইয়ের সংখ্যা ২০ এর কম ( < 20 ) হয়, তবে সেই ক্যাটাগরিটি delete করে দিন (কারণ সেগুলো ছোট আর্কাইভে পাঠানো হচ্ছে)।

// Total Calculation: Object.values() এবং reduce() ব্যবহার করে updatedBooks এর মোট বইয়ের সংখ্যা বের করুন।

// Template Literal: নিচের হুবহু ফরম্যাটে আউটপুট রিটার্ন করুন।

// Output Format Example:

// Plaintext
// Library: <name> | Email: <email>
// Categories: <updatedBooks এর key গুলো কমা দিয়ে>
// Total Books: <calculated total></calculated>


const updateLibraryRecords = (libraryData, ...donatedBooks) => {

    // console.log(donatedBooks);
    // console.log(libraryData);
    
    
    if(!libraryData.name){
        return "Invalid Data"
    }

    let {name} = libraryData

    let email = libraryData?.contact?.email || "N/A"

    let books = libraryData?.books || {}

    let updatedBooks = {
        ...books
    }
    // console.log("upBooks",updatedBooks);
    


    for(let book of donatedBooks){        
        // console.log(book.category, book.count);
        
        let catName = book.category

        updatedBooks[catName] = (updatedBooks[catName] || 0 ) + book.count
      
    }

    for(let book in updatedBooks){       
        if(updatedBooks[book] < 20){
            delete updatedBooks[book]
        }
    }

    let TotalCalculation = Object.values(updatedBooks).reduce((total,item)=>{
        return total + item
    },0)

    return `
        Library: ${name} | Email: ${email}
        Categories: ${Object.keys(updatedBooks).join(", ")}
        Total Books: ${TotalCalculation}
    `
    

}


const lib1 = {
  name: "City Central",
  contact: { phone: "12345", email: "city@lib.com" },
  books: { fiction: 150, history: 40, art: 15 }
};

console.log(updateLibraryRecords(lib1, { category: "science", count: 50 }, { category: "art", count: 10 }));



const lib2 = { name: "Town Hall" }; // contact ও books নেই
// Function call:
console.log(updateLibraryRecords(lib2, { category: "novel", count: 100 }, { category: "poetry", count: 15 }));

