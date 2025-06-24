import Hero from './components/Hero'
import Home from './components/Home'
import Explore from './components/Explore'
import Platforms from './components/Platforms'
import Consoles from './components/Consoles'
import About from './components/About'
import './App.css'


import { useState } from 'react'

function App() {

  const [ page,setPage ] = useState('home')

  return (
    <>
      <Hero
        page={page}
        setPage={setPage}
      />
      <div className='p-5'>
        { page=='home' && <Home/>}
        { page=='explore' && <Explore/>}
        { page=='platforms' && <Platforms/>}
        { page=='consoles' && <Consoles/>}
        { page=='about' && <About/>}
      </div>
      
    </>
  )
}

export default App
