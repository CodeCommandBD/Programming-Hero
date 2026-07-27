// problem 12: Filter number greater than a value.


let items = [24,35,68,97]

let userInput = 50

let filterItem = []

for(let item of items){
    if(item > userInput){
        filterItem.push(item)
    }
}

console.log(filterItem);
