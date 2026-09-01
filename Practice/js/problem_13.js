const getDiscountedTotalForCategory = (products, category) => {
  const totalPrice = products
    .filter((filterItem) => filterItem.category === category)
    .map((SingleItem) => SingleItem.price)
    .reduce((acc, totalItem) => acc + totalItem, 0);
  return totalPrice;
};

console.log(
  getDiscountedTotalForCategory(
    [
      { name: "Pen", category: "stationery", price: 100 },
      { name: "Bag", category: "accessory", price: 500 },
      { name: "Notebook", category: "stationery", price: 60 },
    ],
    "stationery",
  ),
);
