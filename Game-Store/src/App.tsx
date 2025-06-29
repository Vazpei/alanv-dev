import Hero from './components/Hero'
import Home from './components/Home'
import Explore from './components/Explore'
import Platforms from './components/Platforms'
import Consoles from './components/Consoles'
import About from './components/About'
import Payment from './components/Payment'
import './App.css'
import { useState } from 'react'
import useCart from './hooks/useCart'

function App() {

  const [ page,setPage ] = useState('home')
  const { setGame,game,cart,setCart } = useCart()

  return (
    <>
      { page ==='cart' ? (
        <Payment
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
              game={game}
              cart={cart}
              setCart={setCart}
              setGame={setGame}
            />}
            { page=='explore' && <Explore/>}
            { page=='platforms' && <Platforms/>}
            { page=='consoles' && <Consoles/>}
            { page=='about' && <About/>}
          </div> 
        </>
      )
      }
    </>
  )
}

export default App
