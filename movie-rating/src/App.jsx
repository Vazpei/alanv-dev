import Sidebar from './Components/Sidebar.jsx'
import New from './Components/New.jsx';
import './App.css'
import { useState } from 'react'

function App() {
  const [page,setPage] = useState("home");
  
  return (
    <>  
      <Sidebar/>
      {page === "home" && <New/>}
    </>
  )
}

export default App
