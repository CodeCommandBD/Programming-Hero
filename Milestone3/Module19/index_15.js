// Task 10: getTopSellingProduct(orders) — Mixed (map + reduce, capstone-style)
// Given an array of orders { product, unitsSold },
// return the name of the product with the highest total units sold across all orders (a product may appear in multiple orders).

// Input: [{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }]
// Output: "Pen"

const getTopSellingProduct = (orders) => {
    const totalObj = orders.reduce((acc, order)=>{
      
      if(acc[order.product]){
        acc[order.product] += order.unitsSold
      }else{
        acc[order.product] = order.unitsSold
      }
      return acc  
    },{})
    
    const totalArr = Object.keys(totalObj).map((product)=>{
      // console.log(totalObj[product]);
      
      return{
        product: product,
        unitsSold: totalObj[product]
      }
      
    })

    const topProduct = totalArr.reduce((max, current)=>{

      // console.log(max);
      // console.log(current);
      if(max.unitsSold < current.unitsSold){
        return  current
      }else{
        return max
      }
    })

    return topProduct.product

    
  };

const item = [
  { product: "Pen", unitsSold: 30 },
  { product: "Bag", unitsSold: 12 },
  { product: "Pen", unitsSold: 25 },
];

console.log(getTopSellingProduct(item));
