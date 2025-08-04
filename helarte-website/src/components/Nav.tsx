 import { useState } from "react"

 type NavProps = {
    page:String
    setPage: React.Dispatch<React.SetStateAction<string>>
 }

export default function Nav({page,setPage}:NavProps) {

    const [ isOpen,setIsOpen ] = useState(false)

    const handleNavButton = (page:string) =>{
        setPage(page)
    }

  return (
    <>
        <div className={`overflow-hidden transition-all duration-1000 ease-in-out flex sm:flex flex-col sm:flex-row justify-around gap-2 items-center ${
        isOpen ? "max-h-97 opacity-100" : "max-h-0 opacity-0"
        } sm:max-h-full sm:opacity-100`}>
            <div>
                <div><img src="/helarteLogo.png" className=' w-20'alt="" /></div>
            </div>
            <nav className=" flex gap-6  justify-between">
                <button
                className={`transition-all ${page === 'home' ? 'font-bold text-amber-600' : '' }`}
                onClick={() => handleNavButton('home')}
                >Inicio</button>
                <button
                className={`transition-all duration-300 ${page === 'menu' ? 'font-bold text-amber-600' : '' }`}
                onClick={() => handleNavButton('menu')}
                >Menu</button>
                <button
                className={`transition-all  ${page === 'contact' ? 'font-bold text-amber-600' : '' }`}
                onClick={() => handleNavButton('contact')}
                >Contactanos</button>
                <button
                className={`transition-all  ${page === 'location' ? 'font-bold text-amber-600' : '' }`}
                onClick={() => handleNavButton('location')}
                >¿Donde estamos?</button>
            </nav>
            <nav>
                <div><input className="border-2 border-gray-300 rounded-2xl w-40 p-1 text-center" type="text" placeholder="buscar" name="" id="" /></div>
            </nav>
        </div>
        <div className=" flex mt-5 sm:hidden justify-center">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl rounded-md"
            >
                ☰
            </button>
        </div>
    </>
  )
}
