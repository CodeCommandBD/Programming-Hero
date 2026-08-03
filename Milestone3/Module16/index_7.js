// Inventory Merge & Max Score

// Function Name Must be: mergeInventory / highestScore
// একটি দোকানের Two Branch-এর Stock Array Spread Operator দিয়ে Merge করতে হবে, এবং একটি Student-দের Score Array থেকে Spread দিয়ে Highest Score বের করতে হবে।

// Input
// mergeInventory(arr1, arr2) — দুইটি Array; highestScore(scores) — একটি Number Array

// Output / নিয়ম
// mergeInventory: Spread Operator (...arr1, ...arr2) দিয়ে একটি Merged Array Return করবে
// highestScore: Math.max(...scores) দিয়ে Highest Number Return করবে
// Validation
// Return "Invalid" যদি Parameter Array না হয়।

const mergeInventory = (arr1, arr2) =>{
    let marge = [...arr1, ...arr2]
    return marge
}

console.log(mergeInventory([1,2],[3,4]));

const highestScore = (scores) => {   
    let max = Math.max(...scores)
    return max
}

console.log(highestScore([3,4,5,8,7,9]));
