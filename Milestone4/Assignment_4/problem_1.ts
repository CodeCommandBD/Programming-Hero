const getBatteryStatus = (percentage:number):string => {
    
    if(percentage < 0 || percentage > 100){
        return "Invalid percentage"
    }
    
    if(percentage <= 20){
        return "Low"
    }else if(percentage <= 50){
        return "Medium"
    }else if(percentage <= 90){
        return "High"
    }
    return "Full"
}

console.log(getBatteryStatus(10));
