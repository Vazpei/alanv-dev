import Nav from './components/Nav'
import { useState } from 'react'
import Home from './components/Home'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Location from './components/Location'

import './App.css'



function App() {
  
  const [page,setPage] = useState('home')

  return (
    <>
      <Nav
        setPage={setPage}      
      />
      {page === 'home' && <Home/>}
      {page === 'menu' && <Menu/>}
      {page === 'location' && <Location/>}
      {page === 'contact' && <Contact/>}
    </>
  )
}

export default App
