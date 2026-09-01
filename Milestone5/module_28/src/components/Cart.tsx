import { useState } from "react";

const Cart = () => {
    const [cart, setCart] = useState(0)
    const handle = () => {
        // console.log('hello');
        setCart(cart + 1)
    }
  return (
    <div>
        <h1>Shoping cart</h1>
        <p>Item in the cart: {cart}</p>
        <button onClick={handle}>Add more cart</button>
    </div>
  )
}

export default Cart