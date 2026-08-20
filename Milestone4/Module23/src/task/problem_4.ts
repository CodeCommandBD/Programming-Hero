interface Product {
    name: string;
    price: number
}
const calculateCartTotal = (products: Product[]):number => {
    let total:number = products.reduce((acc, item)=>{
        return acc + item.price
    },0)    
    return total    
}

const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];

const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];

const emptyCart: Product[] = [];
console.log(calculateCartTotal(emptyCart));
 
console.log(calculateCartTotal(products));
console.log(calculateCartTotal(products2));



