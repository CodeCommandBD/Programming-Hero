// problem 2: Merge & deduplicates Arrays


//  Merge two arrays remove duplicates using spread + set.

//  Ex: [1,2,3] + [2,3,4] -> [1,2,3,4]



const MergeAndDupli = (arr1, arr2) => {
    let mergeArr = [...arr1, ...arr2]
    // console.log(mergeArr);
    let duplicatesItem = [...new Set(mergeArr)]
    // console.log(duplicatesItem);
    
    return duplicatesItem
    
}
let arr1 = [1,2,3]
let arr2 = [2,3,4]
console.log(MergeAndDupli(arr1, arr2));
