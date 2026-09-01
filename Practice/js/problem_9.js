
const getAvailableProducts = (product) => {
    const productItem = product.filter((item)=>{
        return item.stock > 0
    })
    return productItem
}


console.log(getAvailableProducts([
  { name: "Pen", stock: 5 },
  { name: "Bag", stock: 0 },
  { name: "Notebook", stock: 2 }
]));
