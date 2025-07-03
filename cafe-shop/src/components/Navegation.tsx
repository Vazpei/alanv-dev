import React, { useState } from "react"

type NavigationProps ={
    page:string
    setPage:React.Dispatch<React.SetStateAction<string>>
}

export default function Navegation({setPage,page}:NavigationProps) {
    const [ isOpen,setIsOpen ] = useState(false)

    const sendPage = (page:string,e:React.MouseEvent<HTMLElement>) =>{
        e.preventDefault()
        setPage(page)
    }
  return (
    <div className="flex flex-col sm:flex-row gap-5 justify-center pl-1 pr-1 max-w-300 m-auto pt-5">
        <div className="image flex justify-center">
            <img src="/cafelogo.png" className="w-20 rounded-full" alt="" />
        </div>
        <div className="flex sm:hidden justify-center">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl rounded-md"
            >
                ☰
            </button>
        </div>

        <nav 
        className={`overflow-hidden transition-all duration-1000 ease-in-out flex sm:flex flex-col sm:flex-row justify-around gap-2 items-center ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } sm:max-h-full sm:opacity-100`}
        >
            <a 
            href="#" 
            className={`w-40 text-center transition-all hover:scale-120 p-1 ${page === 'home' ? 'font-bold text-lg' : ''}`}
            onClick={(e) => sendPage(`home`,e)}
            >Inicio</a>
            
            <a 
            href="#" 
            className={`w-40 text-center transition-all hover:scale-120 p-1 ${page === 'menu' ? 'font-bold' : ''}`}
            onClick={(e) => sendPage(`menu`,e)}
            >Menu</a>
            
            <a 
            href="#" 
            className={`w-40 text-center transition-all hover:scale-120 p-1 ${page === 'location' ? 'font-bold' : ''}`}
            onClick={(e) => sendPage(`location`,e)}
            >Ubicacion</a>
            
            <a 
            href="#" 
            className={`w-40 text-center transition-all hover:scale-120 p-1 ${page === 'contact' ? 'font-bold' : ''}`}
            onClick={(e) => sendPage(`contact`,e)}
            >Contactanos</a>
        </nav>
    </div>
  )
}
