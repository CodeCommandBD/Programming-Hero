/*
    problem : Nested Response Extractor


    Extract specific fields from a nested Api like response object using destructuring , with renaming + default value.

    ex: {user: {name: "Rafi", age: 22}} -> extract name as userName, default age =18 if missing
*/

const responseExtractor = (obj) => {
    // console.log(obj.user.name);
    
   
    let {name: userName, age = 18 } = obj.user 

    return {
        userName,
        age
    }
    
}

console.log(responseExtractor({user: {name: "Rafi", age: 22}}));
console.log(responseExtractor({user: {name: "Morli"}}));
