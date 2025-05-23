import { useState } from 'react'
import './App.css'
import Navegation from './components/Navegation.js'
import Content from './components/Content.js'
import Footer from './components/Footer.js'
import Cart from './components/Cart.js'
import { useCart } from './hooks/useCart.js'

function App() {

  const { cart,total,setCart,setTotal,addToCart } = useCart();
  const [page,setPage] = useState("Home");

  const [auth, setAuth] = useState(false);

  return (
    <>
      <Navegation setPage={setPage} page={page}/>
      <Content page={page} addToCart={addToCart} setCart={setCart}/>
      <Footer/>
      <Cart cart={cart} setCart={setCart} addToCart={addToCart} setTotal={setTotal} total={total}/>
    </>
  )
}

export default App
