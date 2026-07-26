// problem 9: Find the largest number in an array

const largeArrray = [200,20,50,500,79,1000]

let largeNum = largeArrray[0]

for(let arr of largeArrray){
    if(arr > largeNum){
        largeNum = arr
    }
}

console.log(largeNum);
