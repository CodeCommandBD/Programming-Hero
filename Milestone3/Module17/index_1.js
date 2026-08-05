// 1. Data Type Classifier
// Function Name Must be: classifyDataType
// একটি Debugging Tool যেকোনো JavaScript value নিলে বলে দেয় সেটা Primitive নাকি Non-Primitive টাইপ।
// Input:
// Function একটি Parameter গ্রহণ করবে — value (any type)
// নিয়ম / Output:
// • value যদি string, number, boolean, undefined, null, symbol, বা bigint হয় → Return করবে "Primitive"
// • value যদি object, array, বা function হয় → Return করবে "Non-Primitive"
// • typeof এবং Array.isArray() ব্যবহার করে detect করতে হবে
// Validation:
// কোনো অতিরিক্ত Validation দরকার নেই — সব JS value valid input।


const classifyDataType =  (valid) => {
    if(
        typeof valid === 'string' || 
        typeof valid === 'number' || 
        typeof valid === 'boolean' || 
        typeof valid === 'undefined' || 
        typeof valid === 'symbol' ||
        typeof valid === "bigint" ||
        valid === null ){

        return "Primitive"

    }else if(
        typeof valid === 'function' ||
        typeof valid === 'object' || 
        Array.isArray(valid)){

        return "Non-Primitive"
    }

}

console.log(classifyDataType(25));
console.log(classifyDataType("hi"));
console.log(classifyDataType([1,2,3]));
console.log(classifyDataType({a:1}));
console.log(classifyDataType(null));
console.log(classifyDataType(function(){}));
