function calculateAiCost(tokensUsed) {
 if(typeof tokensUsed !== 'number' || tokensUsed < 0){
    return "Invalid"
 }

 let tokenFee = 0;

 if(tokensUsed <= 500){
    return tokenFee;
 }else {
    let extra = tokensUsed - 500
    // console.log(extra);
    
    tokenFee = Math.floor(extra / 100) * 5
    // console.log(tokenFee);
    
 }

 return tokenFee


}

console.log(calculateAiCost(300));
console.log(calculateAiCost(650));
console.log(calculateAiCost(1000));
console.log(calculateAiCost(-10));
console.log(calculateAiCost("500"));
