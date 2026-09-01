import Cart from "./components/Cart"

const App = () => {

  const handle = () => {
    alert('click  me')
  }

  const addtoCart = (id: number) =>{
    alert(id)
  }

  return (
    <div>
      <button onClick={handle}>click</button>
      <button onClick={()=> addtoCart(5)}>callback click</button>
      <Cart></Cart>
    </div>
  )
}

export default App