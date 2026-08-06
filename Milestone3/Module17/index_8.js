// 8. Mutate or Copy
// Function Name Must be: mutateOrCopy
// একটি Data-Safety Checker System দেখাতে চায়, একটি Function কল করার পর Original Data বদলায় কিনা — Type অনুযায়ী।
// Input:
// Function একটি Parameter গ্রহণ করবে — data (Number অথবা Object, যেখানে Object এ একটি value Property থাকবে)
// নিয়ম / Output:
// • data একটি Number হলে: একটি Local Copy বানিয়ে সেটাকে 100 দিয়ে বদলাও, তারপর Return করো "Original unaffected: <original data>"
// • data একটি Object হলে: data.value কে 100 এ বদলে দাও (mutate), তারপর Return করো "Original changed: <data.value>"
// Validation:
// Return "Invalid" যদি data Number বা Object কোনোটাই না হয়।


const mutateOrCopy =(data)=>{

    if(typeof data === 'number'){
        let local = data
        local = 100
        
        return `Original unaffected: ${data}`
    }else if(typeof data === 'object'){
        data.value = 100
        return `Original changed: ${data.value}`
    }else{
        return "Invalid"
    }
    
}

console.log(mutateOrCopy(10));
console.log(mutateOrCopy({value:10}));
console.log(mutateOrCopy("10"));

