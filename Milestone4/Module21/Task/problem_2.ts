
const product = (name:string, price: number, isAvailable: boolean) => {
    return `${name} cost ${price} and is available: ${isAvailable}`
}

console.log(product("laptop", 45000, true));
