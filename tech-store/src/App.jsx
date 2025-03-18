import { useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import Navegation from './components/Navegation.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'

function App() {
  const [page,setPage] = useState("Home");
  const [cart,setCart] = useState([]);

  function addToCart(item){
    const itemExists = cart.findIndex(itemCart => itemCart.id === item.id);
    if(itemExists >= 0){
      item.quantity++;
    }else{
      setCart(prevCart => [...prevCart,item])//copiamos el previo y agregamos nuevo item
      item.quantity = 1;
    }
    console.log(itemExists);
  }

  return (
    <>
      <Navegation setPage={setPage} page={page}/>
      <Content page={page} addToCart={addToCart}/>
      <Footer/>
      <Cart cart={cart}/>
    </>
  )
}

export default App
