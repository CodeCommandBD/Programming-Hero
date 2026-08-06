// problem 2: Merge & deduplicates Arrays


//  Merge two arrays remove duplicates using spread + set.

//  Ex: [1,2,3] + [2,3,4] -> [1,2,3,4]




let arr1 = [10,20,30,40,50]
let arr2 = [30,40,50]


let marge = [...new Set([...arr1 , ...arr2])]



console.log(marge);
