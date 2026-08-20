const getStockStatus = (curStock: number):string =>{
    if(curStock <= 0){
        return "Out of stock"
    }else if(curStock <= 5){
        return "Almost Sold Out"
    }else if(curStock <= 20){
        return "Available"
    }else{
        return "In Stock"
    }
}
console.log(getStockStatus(0));
console.log(getStockStatus(3));
console.log(getStockStatus(12));
console.log(getStockStatus(50));
