// Question 2: The Company Dashboard Updater
// Function Name Must be: updateCompanyDash

// একটি কোম্পানির ড্যাশবোর্ডে এমপ্লয়িদের স্ট্যাটাস আপডেট করার জন্য একটি ফাংশন লিখতে হবে। ফাংশনটি কোম্পানির সাধারণ তথ্য, বিভিন্ন ডিপার্টমেন্টের এমপ্লয়ি সংখ্যা এবং নতুন জয়েন করা ডেভেলপারদের সংখ্যা রিসিভ করবে।

// Inputs:

// companyData (Object) - কোম্পানির তথ্য।

// employeeStats (Object) - বিভিন্ন ডিপার্টমেন্টে কতজন কাজ করে তার ডেটা (যেমন: { hr: 5, marketing: 10, dev: 15 })।

// ...newDevs (Rest Parameter) - নতুন জয়েন করা ডেভেলপারদের সংখ্যা (যেমন: 2, 3, 5)।

// Rules / Logic (এই স্টেপগুলো হুবহু ফলো করতে হবে):

// Arrow Function ব্যবহার করতে হবে।

// Destructuring with Renaming & Default Value: companyData থেকে title বের করে তার নাম পরিবর্তন (Rename) করে companyName রাখতে হবে। এবং location.city বের করে তার নাম cityName রাখতে হবে। যদি location বা city না থাকে, তবে ডিফল্ট হিসেবে "Remote" সেট করতে হবে (Optional Chaining বা Default Value ব্যবহার করে ক্র্যাশ ঠেকাবেন)।

// Rest Parameter & Array Reduce: newDevs অ্যারের সবগুলো সংখ্যা যোগ করে মোট কতজন নতুন ডেভেলপার জয়েন করলো তা বের করতে হবে।

// Spread Operator (Object): employeeStats এর একটি শ্যালো কপি তৈরি করে তার নাম দিন updatedStats। এরপর updatedStats এর ভেতরে থাকা dev এর সংখ্যার সাথে নতুন ডেভেলপারদের সংখ্যা যোগ করে আপডেট করুন (যদি dev আগে থেকে না থাকে, তবে 0 ধরে নেবেন)।

// Object Methods (delete, Object.keys, Object.values):

// updatedStats থেকে hr ডিপার্টমেন্টটি delete কিওয়ার্ড দিয়ে রিমুভ করে দিন (কোম্পানি HR আউটসোর্স করছে তাই)।

// Object.values() ব্যবহার করে updatedStats এর সবগুলো ডিপার্টমেন্টের এমপ্লয়ি সংখ্যা যোগ করে মোট এমপ্লয়ি (Total Employees) বের করুন।

// Template Literal ব্যবহার করে নিচের ফরম্যাটে আউটপুট রিটার্ন করুন।



const updateCompanyDash = (companyData, employeeStats, ...newDevs) => {

    
    if(Object.keys(employeeStats).length === 0 ){
        return "No Stats Available"
    }

    let {title: companyName } = companyData
    
    let cityName = companyData?.location?.city || "Remote"


    
    let newDeveloper = newDevs.reduce((total, item)=>{
        return total + item
    },0)

    
    let updatedStats = {
        ...employeeStats
    }

    
    updatedStats.dev = (updatedStats.dev || 0) + newDeveloper
    

    delete updatedStats.hr 

    let TotalEmployees = Object.values(updatedStats).reduce((total, item)=>{
        return total + item
    },0)

   
    return `
        Company: ${companyName} - ${cityName}
        Active Departments: ${Object.keys(updatedStats).join(", ")}
        Total Employees: ${TotalEmployees}    
    `
    
    



}


const company1 = { title: "TechNova", location: { city: "Dhaka" } };
const stats1 = { hr: 5, marketing: 10, dev: 15 };

console.log(updateCompanyDash(company1, stats1, 2, 3));

const company2 = { title: "CodeCrafters" };
const stats2 = { marketing: 8 }; 

console.log(updateCompanyDash(company2, stats2));
