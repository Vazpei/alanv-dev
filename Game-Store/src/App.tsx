import Hero from './components/Hero'
import Home from './components/Home'
import Explore from './components/Explore'
import About from './components/About'
import Payment from './components/Payment'
import './App.css'
import { useState } from 'react'
import useCart from './hooks/useCart'
import Footer from './components/Footer'

function App() {

  const [ page,setPage ] = useState('home')
  const { cart,setCart,removeFromCart,addToCart,increaseQty,decreaseQty,total,restoreCart} = useCart()
  return (
    <>
      { page ==='cart' ? (
        <Payment
          restoreCart={restoreCart}
          total={total}
          decreaseQty={decreaseQty}
          increaseQty={increaseQty}
          removeFromCart={removeFromCart}
          setPage={setPage}
          page={page}
          cart={cart}
          />
      ):(
        <>
          <Hero
            page={page}
            setPage={setPage}
          />
          <div className='p-5'>
            { page=='home' && 
            <Home
              addToCart={addToCart}
              cart={cart}
              setCart={setCart}
            />}
            { page=='explore' && 
            <Explore
            />}
            { page=='about' && <About/>}
          </div> 
          <Footer/>
        </>
      )
      }
    </>
  )
}

export default App
