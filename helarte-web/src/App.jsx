
import './App.css';
import './style/Header.css'
import Home from './components/Home.jsx';
import Products from './components/Products.jsx';
import Contact from './components/Contact.jsx';
import Locate from './components/Locate.jsx';
import { useState } from 'react';

function App() {
  const [cart,setCart] = useState([]);
  const [page,setPage] = useState("home");

  function addToCart(item){
    const itemExists = cart.findIndex(pipsha => pipsha.id === item.id)
    if(itemExists === -1){
        console.log(itemExists);
        console.log("Agregando.........");
        item.quantity = 1;
        setCart(prevCart => [...prevCart,item])
    }else{
        console.log(itemExists);
        console.log("Ya existe");
        const updatedCart = [...cart]
        updatedCart[itemExists].quantity++
        setCart(updatedCart);
        console.log(`${item.name} already added`);
    }
    console.log("current cart",cart);
  }
  return (
    <div className="App">
      <div className="header-container">
            <h2 className="title">RockPizza </h2>
            <nav className="navegation">
                <button onClick={() => setPage("home")}>Inicio</button>
                <button onClick={() => setPage("products")}>Productos</button>
                <button onClick={() => setPage("contact")}>Contactanos</button>
                <button onClick={() => setPage("location")}>Ubicacion</button>
            </nav>
            <div className="cart-space">
              <button className='btn-cart'>
                  <span class="material-symbols-outlined">
                  shopping_cart
                  </span>
              </button>
            </div>
      </div>
      <div className="cartbtn">
        
      </div>
      <main>
        {page === "home" && <Home
        setCart={setCart}
        addToCart={addToCart}
        />}
        {page === "contact" && <Contact/>}
        {page === "products" && <Products/>}
        {page === "location" && <Locate/>}
      </main>
      <footer className='footer'>
        <div className="footer-section">
          <p className='footer-title'>Nosotros</p>
          <p className='footer-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde qui ratione ducimus aperiam recusandae veniam cumque suscipit! Velit, libero? Delectus adipisci ipsum in non corporis. Quam nesciunt illum sequi debitis?</p>
        </div>
        <div className="footer-section">
          <p className='footer-title'>Empresa</p>
          <p className='footer-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde qui ratione ducimus aperiam recusandae veniam cumque suscipit! Velit, libero? Delectus adipisci ipsum in non corporis. Quam nesciunt illum sequi debitis?</p>
        </div>
        <div className="footer-section">
          <p className='footer-title'>Historia</p>
          <p className='footer-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde qui ratione ducimus aperiam recusandae veniam cumque suscipit! Velit, libero? Delectus adipisci ipsum in non corporis. Quam nesciunt illum sequi debitis?</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
