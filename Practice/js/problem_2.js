
const secondMaxNum = (numbers) => {
    if(!Array.isArray(numbers) || numbers.length === 0){
        return null
    }

    let max = numbers[0]
    let secondMax = null
    for(let num of numbers){
        if(num === max) continue;

        if(num > max){
            secondMax = max
            max = num
        }else if(secondMax === null || num > secondMax){
            secondMax = num
        }
    }
    return secondMax

}


console.log(secondMaxNum([50, 10, 15, 25, 36]));
