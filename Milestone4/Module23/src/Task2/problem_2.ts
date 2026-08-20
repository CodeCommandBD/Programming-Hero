const  getSignalStatus = (strength: number):string => {
    if(strength <= 20){
        return "Weak"
    }else if(strength <= 50){
        return "Fair"
    }else if(strength <= 80){
        return "Good"
    }

    return "Excellent"
}


console.log(getSignalStatus(10));
console.log(getSignalStatus(35));
console.log(getSignalStatus(65));
console.log(getSignalStatus(95));
