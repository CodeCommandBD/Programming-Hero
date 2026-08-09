const extractor = (info) => {
    // console.log(info);
    let {user: {name: userName, age = 18}} = info

    return {
        userName,
        age
    }
    
}

let info = {user: {name: "Rafi", age: 22}}
let info2 = {user: {name: "koli"}}

console.log(extractor(info));
console.log(extractor(info2));
