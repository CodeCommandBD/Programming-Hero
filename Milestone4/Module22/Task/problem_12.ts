
const getFirstOrNull = <T> (arr: T[]): T | null => {
    if(arr.length !== 0 ){
        return arr[0]
    }else{
        return null
    }
}

console.log(getFirstOrNull([50, 100, 150]));
console.log(getFirstOrNull([]));



