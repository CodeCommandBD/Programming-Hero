/*
    problem : Nested Response Extractor


    Extract specific fields from a nested Api like response object using destructuring , with renaming + default value.

    ex: {user: {name: "Rafi", age: 22}} -> extract name as userName, default age =18 if missing
*/

const responseExtractor = (info) => {
    // console.log(info.user);
    let {user:{name: userName, age = 18}} = info 
    return  `${userName} is ${age} years old`
    
};
let info = { user: { name: "Rafi", age: 22 } };
let info2 = { user: { name: "sofiq" } };
console.log(responseExtractor(info));
console.log(responseExtractor(info2));
