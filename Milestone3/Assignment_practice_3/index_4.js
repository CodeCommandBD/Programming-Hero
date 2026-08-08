const AvailableProductsFilter = (products) => {
    let FilterProduct = products.filter((product)=>{
        return product.inStock === true
    })
    return FilterProduct
};

let product = [
  { name: "Shirt", inStock: true },
  { name: "Shoes", inStock: false },
];

console.log(AvailableProductsFilter(product));
