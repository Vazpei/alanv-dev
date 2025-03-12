import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero.jsx'
import Navegation from './components/Navegation.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [page,setPage] = useState("Home");
  return (
    <>
      <Navegation setPage={setPage}/>
      <Hero/>
      <Content page={page}/>
      <Footer/>
    </>
  )
}

export default App
