// 3. Truthy Checker
// Function Name Must be: checkTruthy
// একটি Config Loader System যেকোনো Config Value নিয়ে বলে দেয় সেটা truthy না falsy, condition এ ব্যবহারের আগে।
// Input:
// Function একটি Parameter গ্রহণ করবে — value (any)
// নিয়ম / Output:
// • value যদি Falsy হয় (false, 0, "", null, undefined, NaN) → Return করবে "Falsy"
// • বাকি সব ক্ষেত্রে (empty array/object সহ) → Return করবে "Truthy"
// Validation:
// কোনো অতিরিক্ত Validation দরকার নেই।


const checkTruthy = (value) =>{
    if(!value){
        return "Falsy"
    }else {
        return "Truthy"
    }
} 

console.log(checkTruthy(0));
console.log(checkTruthy(""));
console.log(checkTruthy([]));
console.log(checkTruthy({}));
console.log(checkTruthy("0"));
