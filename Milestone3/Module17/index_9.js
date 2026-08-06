// 9. Ticket Number Tracker
// Function Name Must be: trackTicketNumber
// একটি Support Desk System প্রতিটা নতুন Ticket-এ Serial Number বাড়ায়, কিন্তু Increment Type (Pre বা Post) অনুযায়ী কোন Value ব্যবহার হবে তা আলাদা।
// Input:
// Function দুইটি Parameter গ্রহণ করবে — currentNumber (Number), type (String): "pre" / "post"
// নিয়ম / Output:
// • type "pre" হলে: আগে 1 বাড়িয়ে সেই Value Return করবে (++currentNumber এর মতো Logic)
// • type "post" হলে: আগের Value Return করবে, কিন্তু বাড়ানো Value ও দেখাতে হবে — Format: "Used: <old>, Now: <new>"
// Validation:
// Return "Invalid" যদি type "pre"/"post" ছাড়া অন্য কিছু হয়।

const  trackTicketNumber =(currentNumber , type) =>{
    if(type === 'pre'){
        return ++currentNumber
    }else if(type === 'post'){
        return `Used: ${currentNumber++}, Now: ${currentNumber}`
    }else{
        return "Invalid"
    }

}
console.log(trackTicketNumber(5, "pre"));
console.log(trackTicketNumber(5, "post"));
console.log(trackTicketNumber(5, "skip"));
