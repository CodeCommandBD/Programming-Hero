
interface Product{
    title: string
    price: number
    inStock?: boolean
}

const logProductPrice = (product: Product):number => {
    return product.price
}

console.log(logProductPrice({ title: "Laptop", price: 55000 }));
