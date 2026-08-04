// Task 2: Smart Profile Extractor (Destructuring & Optional Chaining)

// Function Name Must be: extractDeveloperProfile

// একটি রিমোট জব পোর্টালের API থেকে ডেভেলপারদের ডেটা আসে। ডেটা অনেক সময় অসম্পূর্ণ থাকে। আপনার কাজ হলো Destructuring ও Optional Chaining দিয়ে ডেটাগুলো ঠিকঠাক বের করে আনা।


// Input
// extractDeveloperProfile(devObj) — devObj হলো একটি Object।


// Output / নিয়ম (Rules)

// devObj থেকে name বের করতে হবে।

// devObj থেকে address.city বের করে তার নাম (rename) দিতে হবে location, এবং ডিফল্ট ভ্যালু দিতে হবে "Remote"। (যেহেতু address নাও থাকতে পারে, তাই Optional Chaining ?. বা Default {} ব্যবহার করতে পারেন)।

// skills অ্যারের প্রথম আইটেমটি (First item) Destructure করে বের করতে হবে এবং তার নাম দিতে হবে firstSkill। skills না থাকলে বা খালি থাকলে ডিফল্ট হবে "HTML"।

// Template Literal ব্যবহার করে Return করতে হবে: "<name> works from <location> and knows <firstSkill>"


// Validation

// যদি name না থাকে, তবে Return করতে হবে "Invalid Profile"।



const extractDeveloperProfile = (devObj) =>{

    if(!devObj.name){
        return "Invalid Profile"
    }

    let location = devObj?.address?.city || "Remote"

    let  [firstSkill = "HTML"] = devObj?.skills || []



    return`${devObj.name} works from ${location} and knows ${firstSkill}`
    
    

}

console.log(extractDeveloperProfile({ name: "Anis", address: { city: "Dhaka" }, skills: ["React", "Node"] }));


console.log(extractDeveloperProfile({ name: "Ria" }));

console.log(extractDeveloperProfile({ address: { city: "Sylhet" } }));
