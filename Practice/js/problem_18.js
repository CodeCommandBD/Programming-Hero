const evenDigit = (number) => {
           
       let sumOfEven = 0

    for(let num of String(number)){
       let convertNum = Number(num) 


       if(convertNum % 2 === 0 ){
         sumOfEven += convertNum
       }
    }
    return sumOfEven
}
console.log(evenDigit(12345));


