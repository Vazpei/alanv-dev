import { useState } from 'react'
import './App.css'
import Navegation from './components/Navegation.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'

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
      //Adding the summon of the products
      //Convert to float and assign to Total
      let priceNoComa = price.replace(/,/g, "");//erase coma to price
      let totalNoComa = total.replace(/,/g,"");//erase coma to total
      let tempTotal = parseFloat(totalNoComa) + parseFloat(priceNoComa);//convert to do operation
      console.log(`priceNoComa ${priceNoComa} total ${totalNoComa} tempTotal ${tempTotal}`);
      tempTotal = tempTotal.toLocaleString("en-US");
      setTotal(tempTotal.toString());
    
    }else{// not exists on cart then create a new one with the prev cart
      setCart(prevCart => [...prevCart,item])//copiamos el previo y agregamos nuevo item
      item.quantity = 1;
      //TOTAL verify
      console.log("Total ",total);
      console.log(typeof total);
      console.log("Price item ",price);
      console.log(typeof price);
      //Convert to float and assign to Total
      let priceNoComa = price.replace(/,/g, "");
      let totalNoComa = total.replace(/,/g,"");
      let tempTotal = parseFloat(totalNoComa) + parseFloat(priceNoComa);
      console.log(`priceNoComa ${priceNoComa} total ${totalNoComa} tempTotal ${tempTotal}`);
      tempTotal = tempTotal.toLocaleString("en-US");
      setTotal(tempTotal.toString());
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
