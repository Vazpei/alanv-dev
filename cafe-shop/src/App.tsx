import Navegation from './components/Navegation'
import Home from './components/Home'
import Location from './components/Location'
import './App.css'
import { useState } from 'react'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [ page,setPage ] = useState('home')
  
  return (
    <>
      <Navegation
        page={page}
        setPage={setPage}
      />
      <div className=''>
        {page === 'home' && <Home/>}
        {page === 'menu' && <Menu/>}
        {page === 'location' && <Location/>}
        {page === 'contact' && <Contact/>}
      </div>
      <Footer/>
    </>
  )
}

export default App
