import { useState } from 'react'
import './App.css'
import Navegation from './components/Navegation.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'
import { useMemo } from 'react'

function App() {
  const [page,setPage] = useState("Home");
  const [cart,setCart] = useState([]);
  const [total,setTotal] = useState("0");

  function addToCart(item){
    const { id, price } = item;
    const itemExists = cart.findIndex(itemCart => itemCart.id === id);

    if(itemExists >= 0){//cart exist just add to qty
      const updatedCart = [...cart]//Exactly of current cart
      updatedCart[itemExists].quantity++;//Updating cart quant
      setCart(updatedCart);//setting the cart copy with the old one to apply changes on state
    
    }else{// not exists on cart then create a new one with the prev cart
      setCart(prevCart => [...prevCart,item])//copiamos el previo y agregamos nuevo item
      item.quantity = 1;
  
    }
    console.log(itemExists);
  }

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
