import { Suspense, useState } from "react"
import type { ProductType } from "./Type"
import Products from "./Components/Products/Products"


const productPromise = async():Promise<ProductType[]> => {
  let res = await fetch('https://fakestoreapi.com/products')
  let data = await res.json()
  return data
}







const App = () => {
  return (
    <>  

        <Suspense fallback={<p>Loading.....</p>}>
          <Products productPromise={productPromise()}></Products>
        </Suspense>
    </>
  )
}

export default App