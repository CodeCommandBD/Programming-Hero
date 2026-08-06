// 2. Missing Value Describer
// Function Name Must be: describeMissingValue
// একটি Form Validator System প্রতিটি Field Value চেক করে বলে দেয় সেটা ইচ্ছাকৃতভাবে খালি (null) নাকি কখনো set-ই হয়নি (undefined)।
// Input:
// Function একটি Parameter গ্রহণ করবে — fieldValue (any)
// নিয়ম / Output:
// • fieldValue === undefined হলে Return করবে "Field was never set"
// • fieldValue === null হলে Return করবে "Field intentionally left empty"
// • অন্য যেকোনো value হলে Return করবে "Field has value: <value>"
// Validation:
// Validation দরকার নেই — undefined/null/other সব branch cover করবে।


const describeMissingValue = (fieldValue) => {

    if(fieldValue === undefined){
       return "Field was never set"
    }else if(fieldValue === null){
        return "Field intentionally left empty"
    }else{
        return "Field has value: " + fieldValue 
    }

}

console.log(describeMissingValue(undefined));
console.log(describeMissingValue(null));
console.log(describeMissingValue('Rafi'));
console.log(describeMissingValue(0));
