
function bothValue(numbers){
    if(!Array.isArray(numbers) || numbers.length === 0){
        return "Invalid"
    }

    let Largest = numbers[0]
    let Smallest = numbers[0]

    for(let num of numbers){
        if(typeof num !== "number" || Number.isNaN(num)){
            return "Invalid"
        }

        if(num > Largest){
            Largest = num
        }else if(num < Smallest){
            Smallest = num
        }
    }
    return {
        min: Smallest,
        max: Largest
    }
}
console.log(bothValue([45, 12, 89, 3, 67]));
