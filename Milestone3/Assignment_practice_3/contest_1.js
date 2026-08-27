function countNumberProperties(numbers) {

    let even = 0
    let odd = 0
    let negative = 0
    let positive = 0
    for(let num of numbers){
        // console.log(num);
        
        if(num % 2 === 0){
            even++
            
        }else{
            odd++
    
        }
        if(num > 0){
            positive ++
        }else if(num < 0){
            negative ++
        }

    }
    return {
        "even" : even,
        "negative": negative,
        "odd": odd,
        "positive": positive
    }
}
console.log(countNumberProperties([-5,0,3,-4,1]));
console.log(countNumberProperties([2,4,6,8,10]));
