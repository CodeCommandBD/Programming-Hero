// 10. Product Filter Suite
// Function Name Must be: filterProducts
// একটি Online Shop-এর Product List নিয়ে একাধিক Operation করতে হবে — action Parameter অনুযায়ী map/filter/find প্রয়োগ করে।
// Input:
// Function দুইটি Parameter গ্রহণ করবে — products (Array of Object, প্রতিটাতে name ও price থাকবে), action (String): "names" | "cheap" | "firstExpensive"
// নিয়ম / Output:
// • "names" → map() দিয়ে শুধু Product Name গুলোর একটি Array Return করবে
// • "cheap" → filter() দিয়ে যেসব Product-এর price ৫০০ টাকার কম, তাদের Array Return করবে
// • "firstExpensive" → find() দিয়ে প্রথম Product যার price ১০০০ টাকার বেশি, সেটা Return করবে (না পেলে undefined)
// Validation:
// Return "Invalid" যদি products Array না হয় অথবা action অচেনা হয়।

const filterProducts = (products, action) => {
  if (!Array.isArray(products)) {
    return "Invalid";
  }

  if (action === "names") {
    return products.map((elem) => {
      return elem.name;
    });
  } else if (action === "cheap") {
    return products.filter((item) => {
      return item.price < 500;
    });
  } else if (action === "firstExpensive") {
    return products.find((firstItem) => {
      return firstItem.price > 1000;
    });
  }else{
    return "Invalid"
  }
};
console.log(
  filterProducts(
    [
      { name: "Pen", price: 20 },
      { name: "TV", price: 1500 },
    ],
    "names",
  ),
);
console.log(filterProducts([{ name: "Pen", price: 20 }], "cheap"));
console.log(filterProducts([{ name: "TV", price: 1500 }], "firstExpensive"));
