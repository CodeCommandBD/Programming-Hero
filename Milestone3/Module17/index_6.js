// 6. Order Counter (Closure)
// Function Name Must be: createOrderCounter
// একটি Restaurant App প্রতিটা Branch-এর জন্য আলাদা Order Counter রাখে। Closure ব্যবহার করে Private Count Maintain করতে হবে।
// Input:
// createOrderCounter() কোনো Parameter নেয় না, একটি Function Return করে — সেই Returned Function কল করলে Count একটা করে বাড়বে
// নিয়ম / Output:
// • প্রতিবার Returned Function কল করলে Internal count 1 করে বাড়বে এবং নতুন count Return করবে
// • প্রতিটা createOrderCounter() Call আলাদা, Independent Counter তৈরি করবে (একটার Count অন্যটাকে প্রভাবিত করবে না)
// • count Variable বাইরে থেকে সরাসরি Access করা যাবে না — শুধু Returned Function দিয়েই বাড়ানো যাবে
// Validation:
// কোনো অতিরিক্ত Validation দরকার নেই।

const createOrderCounter =()=>{
    let count = 0

    return function c1() {
       count ++
       return  count
    }
}
const c1=createOrderCounter(); 
        console.log(c1());
        console.log(c1());
        

const c2=createOrderCounter(); 
        console.log(c2());
        

