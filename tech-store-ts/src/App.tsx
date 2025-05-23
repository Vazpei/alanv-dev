import { useState } from 'react'
import './App.css'
import Navegation from './components/Navegation.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'
import { useCart } from './hooks/useCart.js'

function App() {

  const { cart,total,setCart,setTotal,addToCart } = useCart();
  const [page,setPage] = useState("Home");

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
