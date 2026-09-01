
const getCommonElements = (arr1, arr2) =>{
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return null
    }

    let res = []

    for(let arr of arr1){
        if(arr2.includes(arr)){
            if(!res.includes(arr)){
                res.push(arr)
            }
        }
    }
    return res

}


const list1 = [1, 2, 3, 4, 5, 3, 3];
const list2 = [3, 4, 5, 6, 7, 3];

console.log(getCommonElements(list1, list2));