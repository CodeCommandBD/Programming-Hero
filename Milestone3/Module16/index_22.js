// Task 6: Student Result Processor


// Function Name Must be: processStudentResult

// একটি স্কুলের পরীক্ষার রেজাল্ট শিট থেকে নির্দিষ্ট একজন স্টুডেন্টকে খুঁজে বের করে তার টোটাল মার্কস সহ একটি রিপোর্ট তৈরি করতে হবে।


// Function Name Must be: processStudentResult

// একটি স্কুলের পরীক্ষার রেজাল্ট শিট থেকে নির্দিষ্ট একজন স্টুডেন্টকে খুঁজে বের করে তার টোটাল মার্কস সহ একটি রিপোর্ট তৈরি করতে হবে।



// Output / নিয়ম (Rules):

// Array-এর .find() মেথড ব্যবহার করে students অ্যারে থেকে সেই স্টুডেন্টকে খুঁজে বের করুন যার id এবং searchId মিলে যায়।

// যদি ওই id-এর কোনো স্টুডেন্ট পাওয়া না যায়, তবে Return করুন "Student not found"।

// যদি স্টুডেন্ট পাওয়া যায়, তবে Destructuring ব্যবহার করে তার অবজেক্ট থেকে name, grade, এবং marks (মার্কসগুলো একটি অ্যারে) বের করে আনুন।

// .reduce() ব্যবহার করে marks অ্যারের সব বিষয়ের নম্বর যোগ করে টোটাল নম্বর (Total Marks) বের করুন।

// Template Literal ব্যবহার করে নিচের ফরম্যাটে একটি স্ট্রিং Return করুন:
// "<name> achieved grade <grade> with total marks of <totalMarks>."



const processStudentResult  = (students, searchId) =>{

    let match = students.find((elem)=>{
        return elem.id === searchId        
    })

    if(!match){
        return "Student not found"

    }

    let {name, grade, marks} = match 

    console.log(marks);
    

    let totalMarks = marks.reduce((total, item)=>{
        return total + item
    },0)

  

    return `${name} achived grade ${grade} with total marks of ${totalMarks}`
    




}

console.log(processStudentResult([{id: 1, name: "Ayaan", grade: "A", marks: [80, 90, 85]}], 1));
console.log(processStudentResult([{id: 1, name: "Ayaan", grade: "A", marks: [80, 90, 85]}], 5));

