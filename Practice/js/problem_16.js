const groupProductsByCategory = (products) =>{
    const totalProduct = products.reduce((acc, item)=>{
        acc[item.category] = (acc[item.category] || [] ) 
        acc[item.category].push(item.name)
        return acc
    },{})

    return totalProduct
}

const items = [
  { name: "Pen", category: "stationery" },
  { name: "Bag", category: "accessory" },
  { name: "Notebook", category: "stationery" },
  { name: "Watch", category: "accessory" }
];

console.log(groupProductsByCategory(items));