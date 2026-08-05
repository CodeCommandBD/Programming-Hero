// 5. Hoisting Behavior Predictor
// Function Name Must be: predictHoisting
// একটি Interview-Prep Tool var/let/const দিয়ে declare করা keyword নিয়ে বলে দেয়, Declaration-এর আগে Access করলে কী হবে।
// Input:
// Function একটি Parameter গ্রহণ করবে — keyword (String): "var" / "let" / "const"
// নিয়ম / Output:
// • "var" হলে Return করবে "undefined (hoisted, not initialized)"
// • "let" হলে Return করবে "ReferenceError (Temporal Dead Zone)"
// • "const" হলে Return করবে "ReferenceError (Temporal Dead Zone)"
// Validation:
// Return "Invalid" যদি keyword এই তিনটির একটিও না হয়।


const predictHoisting = (keyword) =>{

    if(keyword === 'var'){
        return "undefined (hoisted, not initialized)"
    }else if(keyword === 'let'){
        return "ReferenceError (Temporal Dead Zone)"
    }else if(keyword === 'const'){
        return "ReferenceError (Temporal Dead Zone)"
    }else{
        return "Invalid"
    }
}

console.log(predictHoisting("var"));
console.log(predictHoisting("let"));
console.log(predictHoisting("const"));
console.log(predictHoisting("function"));

