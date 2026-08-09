
const MargeAndDuplicate = (arr1, arr2) => {
    let margeArr = [...arr1, ...arr2]

    let duplicate = [...new Set(margeArr)]
 
    console.log(duplicate);
    
}

let arr1 = [10,20,30,40,50]
let arr2 = [40,50,60]

console.log(MargeAndDuplicate(arr1, arr2));
// console.log(MargeAndDuplicate());
