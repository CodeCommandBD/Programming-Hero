const getCategoryTotal=(products)=>{
  const total = {}

  for(let product of products){   
    if(total[product.category]){
      total[product.category] = total[product.category] + product.price      
    }else{
      total[product.category] = product.price
    }
  }
return total

}

// console.log(getCategoryTotal([
//   { name: "Pen", category: "stationery", price: 100 },
//   { name: "Notebook", category: "stationery", price: 60 },
//   { name: "Bag", category: "accessory", price: 500 }
// ]));


// reduce 
// reduce 

const getCategoryTotal2=(products)=>{

  const total = products.reduce((acc,item)=>{
    if(acc[item.category]){
      acc[item.category] = acc[item.category] + item.price
    }else{
      acc[item.category] = item.price
    }
    return acc
  },{})
return total

}

// console.log(getCategoryTotal2([
//   { name: "Pen", category: "stationery", price: 100 },
//   { name: "Notebook", category: "stationery", price: 60 },
//   { name: "Bag", category: "accessory", price: 500 }
// ]));

// short cut 

const getCategoryTotal3=(products)=>{

  const total = products.reduce((acc,item)=>{
    acc[item.category] = (acc[item.category] || 0) + item.price
    return acc
  },{})
return total

}

console.log(getCategoryTotal3([
  { name: "Pen", category: "stationery", price: 100 },
  { name: "Notebook", category: "stationery", price: 60 },
  { name: "Bag", category: "accessory", price: 500 }
]));