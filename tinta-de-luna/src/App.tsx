import Navigation from './components/Navigation'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'

import './App.css'
import { useState } from 'react';

function App() {
  const [ page,setPage ] = useState('home');

  return (
    <>
      <Navigation
        page={page}
        setPage={setPage}
      />
      {page === 'home' && <Home/>}
      {page === 'products' && <Products/>}
      {page === 'about' && <About/>}
      {page === 'contact' && <Contact/>}
    </>
  )
}

export default App
