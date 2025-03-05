import logo from './logo.svg';
import './App.css';
import './style/Header.css'
import Home from './components/Home.jsx';
import Products from './components/Products.jsx';
import Contact from './components/Contact.jsx';
import { useState } from 'react';

function App() {

  const [page,setPage] = useState("home");

  return (
    <div className="App">
      <div className="header-container">
            <h2 className="title">RockPizza</h2>
            <nav className="navegation">
                <button onClick={() => setPage("home")}>Inicio</button>
                <button onClick={() => setPage("products")}>Productos</button>
                <button onClick={() => setPage("contact")}>Contactanos</button>
                <button onClick={() => setPage("location")}>Ubicacion</button>
            </nav>
      </div>
      <main>
        {page === "home" && <Home/>}
        {page === "contact" && <Contact/>}
        {page === "products" && <Products/>}
      </main>
    </div>
  );
}

export default App;
