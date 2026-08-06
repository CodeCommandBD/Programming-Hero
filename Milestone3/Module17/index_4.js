// 4. Value Comparator
// Function Name Must be: compareValues
// একটি Learning Tool দুইটা Value নিয়ে == এবং === দুইভাবেই Compare করে দেখায়, যাতে Implicit Conversion কীভাবে কাজ করে বোঝা যায়।
// Input:
// Function দুইটি Parameter গ্রহণ করবে — a (any), b (any)
// নিয়ম / Output:
// • Return করতে হবে একটি Object: { loose: (a == b), strict: (a === b) }
// • শুধু Boolean value বসবে দুই Key তে
// Validation:
// কোনো অতিরিক্ত Validation দরকার নেই।

const  compareValues = (a, b) => {
    return {
        loose: a == b ,
        strict: a === b
    }
}

console.log(compareValues(5, "5"));
console.log(compareValues(0, false));
console.log(compareValues("5", 5));
console.log(compareValues(null, undefined));
console.log(compareValues(7, 7));
