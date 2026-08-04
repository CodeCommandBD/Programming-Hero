// Question 4: The Student Result Processor
// Function Name Must be: generateResult

// একটি স্কুলের স্টুডেন্টদের রেজাল্ট প্রসেস করার জন্য একটি ফাংশন লিখতে হবে।

// Inputs:

// studentData (Object) - স্টুডেন্টের বেসিক তথ্য এবং আগের সেমিস্টারের মার্কস।

// ...newMarks (Rest Parameter) - নতুন সেমিস্টারের বিভিন্ন সাবজেক্টের মার্কস। এটি অবজেক্টের একটি অ্যারে হবে (যেমন: { subject: "math", score: 80 })।

// Rules / Logic (শুধুমাত্র আপনার শেখা টপিকগুলো দিয়ে):

// Validation: শুরুতেই চেক করুন studentData.id আছে কিনা। না থাকলে রিটার্ন করুন "Invalid Student"।

// Destructuring & Renaming: studentData থেকে name বের করুন। info.phone বের করে তার নাম দিন mobile, আর যদি info বা phone না থাকে তবে ডিফল্ট ভ্যালু দিন "N/A" (Optional Chaining ব্যবহার করে)।

// Spread Operator: studentData থেকে marks অবজেক্টটি বের করুন (না থাকলে {} নিন)। এরপর স্প্রেড অপারেটর দিয়ে এর একটি কপি তৈরি করুন, যার নাম দিন finalMarks।

// Dynamic Update (আগের প্রবলেমের মতো): newMarks অ্যারের উপর for...of লুপ চালান। প্রতিটি আইটেমের subject অনুযায়ী finalMarks-এ তার score যোগ করুন। (আগে থেকে থাকলে যোগ হবে, না থাকলে ০ ধরে যোগ হবে)।

// Delete Keyword: finalMarks থেকে optional নামের সাবজেক্টটি ডিলিট করে দিন (কারণ অপশনাল সাবজেক্টের মার্কস মূল রেজাল্টে যোগ হবে না)।

// Total Calculation: Object.values() এবং reduce() ব্যবহার করে finalMarks এর মোট মার্কস বের করুন।

// Template Literal: নিচের হুবহু ফরম্যাটে আউটপুট রিটার্ন করুন।

// Output Format Example:

// Plaintext
// Student: <name> | Mobile: <mobile>
// Subjects: <finalMarks এর key গুলো কমা দিয়ে>
// Total Score: <calculated total></calculated>


const generateResult = (studentData, ...newMarks) =>{

    if(!studentData.id){
        // return "Invalid Student"
    }

    let {name} = studentData

    let mobile = studentData?.info?.phone || "N/A"

    let marks = studentData?.marks || {}

    let finalMarks = {
        ...marks
    }

    for(let mark of newMarks){
        let subject = mark.subject

        finalMarks[subject] = (finalMarks[subject] || 0) + mark.score
    }

    delete finalMarks['optional']

    let  totalCalculation = Object.values(finalMarks).reduce((total,item)=>{
        return total + item
    },0)

    return `
        Student: ${name} | ${mobile}
        Subjects: ${Object.keys(finalMarks).join(', ')}
        Total Score: ${totalCalculation}
    `
    


}

const student1 = {
  id: 101,
  name: "Sakib",
  info: { phone: "017111" },
  marks: { math: 60, physics: 70, optional: 40 }
};

// Function Call:
console.log(generateResult(student1, { subject: "math", score: 20 }, { subject: "chemistry", score: 80 }));

const student2 = { id: 102, name: "Tamim" }; 

// Function Call:
console.log(generateResult(student2, { subject: "english", score: 90 }, { subject: "biology", score: 85 }));