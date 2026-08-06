// 12. Module 17 Final Refactor Challenge
// Function Name Must be: refactorLegacyCart (concept task)
// নিচের পুরনো ES5-style Function-টি Cart Total ও Item Names বের করে, কিন্তু var, Regular Function, String Concat, ও for-loop ব্যবহার করা হয়েছে। এই পুরো মডিউলের Concept (const/let, Arrow Function, Template Literal, Closure দিয়ে Private State, map/reduce) প্রয়োগ করে পুরোপুরি Refactor করো। Refactor শেষে ChatGPT/Claude কে দিয়ে নিজের Refactor Verify করাও।
// Input:
// নিচের ES5 Snippet-টি ইনপুট হিসেবে ধরো
// নিয়ম / Output:
// • var সব দূর করে let/const দিয়ে বদলাও
// • Regular Function → Arrow Function এ Refactor করো
// • String Concatenation ('+') দূর করে Template Literal দিয়ে বদলাও
// • for-loop এর Total Sum একটি Array.reduce() দিয়ে লেখো, আর Item Names একটি Array.map() দিয়ে বের করো
// • একটি Closure ব্যবহার করে Cart-এর item count Private ভাবে Track করো (প্রতিবার নতুন item Add হলে বাড়বে)
// স্টার্টার কোড:
// // ES5 — refactor this fully using Module 17 concepts:
// var getCartSummary = function(items) {
//   var total = 0;
//   var names = [];
//   for (var i = 0; i < items.length; i++) {
//     total = total + items[i].price;
//     names.push(items[i].name);
//   }
//   return 'Cart: ' + names.join(', ') + ' | Total: ' + total + ' Taka';
// };
// Validation:
// Refactor-এর পর মূল Function-এর Output অপরিবর্তিত থাকতে হবে; শুধু Style বদলাবে, Logic-এর Result বদলাবে না।

const refactorLegacyCart = () => {
    let count = 0;


    return (items)=>{
        count += items.length;

        let total = items.reduce((total, item)=>{
            return total + item.price
        },0)
    
        // console.log(total);
        
    
        let name = items.map((elem)=>{
            return elem.name
        })
  
        // console.log(name);
        return `Cart: ${name.join(', ')} | Total: ${total} Taka`
    }

    
    
    


}

const myCart = refactorLegacyCart()

console.log(myCart([
    {name: 'Pen', price: 100},
    {name: 'Bag', price: 250}
]));

console.log(myCart([
    { name: 'Cup', price: 80 }
]));


