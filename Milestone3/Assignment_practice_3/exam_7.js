/*
    problem : safe Nested Access 

    Safely access deeply nested optional data using ?. and ?? without throwing errors.

    ex: user?.address?.city ?? "city not found" when address is undefined.

*/



const getcity = (user) => {
    return user?.address?.city ? "user Active" : "info not found"
}
let user1 = {
    name: "shanto",
    address: {
        city: "gazipur"
    }
}
let user2 = {
    name: "skadk",
    address: null
}
console.log(getcity(user1));
console.log(getcity(user2));