import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero.jsx'
import Navegation from './components/Navegation.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'

function App() {
  const [page,setPage] = useState("Home");
  const [cart,setCart] = useState([]);

  return (
    <>
      <Navegation setPage={setPage}/>
      <Hero/>
      <Content page={page} setCart={setCart}/>
      <Footer/>
      <Cart cart={cart}/>
    </>
  )
}

export default App
