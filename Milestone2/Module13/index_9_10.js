// problem 9: Find the largest number in an array

const largeArray = [200,20,50,500,79,1000]

let largeNum = largeArray[0]

for(let arr of largeArray){
    if(arr > largeNum){
        largeNum = arr
    }
}

console.log(largeNum);


// problem 10: Find the largest number in an array

const smallArray = [200,20,50,500,79,1000]
let smallnum = smallArray[0]

for(let arr of smallArray){
    if(arr < smallnum){
        smallnum = arr
    }
}
console.log(smallnum);
