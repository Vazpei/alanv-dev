import '../styles/maincolors.css'
import { useState,useEffect } from 'react';

type NavigationProps = {
  page: string,
  setPage: React.Dispatch<React.SetStateAction<string>>
}


export default function Navigation({page, setPage }: NavigationProps) {
  
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const stored = localStorage.getItem('isLoggedIn');
    return stored === 'true';
  });

  useEffect(() => { 
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
  }, [isLoggedIn]);

  const handleLogin = () => {
    if(isLoggedIn){
      setIsLoggedIn(false);
      alert("Has cerrado sesion");
    }else{
      setIsLoggedIn(true);
      alert("Has iniciado sesion");
    }
  }

  return (

    <>
    <div className='bg-cafe-nav h-20 pt-3'>
        <nav className="flex justify-between items-center pt-3 pr-3 pl-3">
            <div className="flex gap-5 md:pl-20 ">
                <img src="/LunaLogo.png" alt="" width={30} />
                <div className="text-white text-2xl">Tinta de luna</div>
            </div>
            <div className="flex gap-10 text-white md:w-150 justify-between">
                <a href="#"
                  className={`border-b-2 border-transparent w-40 text-center transition-all duration-300 ${page === 'home' ? 'border-white' : 'border-transparent'}`}
                  onClick={e => {e.preventDefault(); setPage('home')}}
                >Inicio</a>
                <a href="#"
                  className={`border-b-2 border-transparent w-40 text-center transition-all duration-300 ${page === 'products' ? 'border-white' : 'border-transparent'}`}
                  onClick={e => {e.preventDefault(); setPage('products')}}
                >Productos</a>
                <a href="#"
                  className={`border-b-2 border-transparent w-40 text-center transition-all duration-300 ${page === 'about' ? 'border-white' : 'border-transparent'}`}
                  onClick={e => {e.preventDefault(); setPage('about')}}
                >Sobre nosotros</a>
                <a href="#"
                  className={`border-b-2 border-transparent w-40 text-center transition-all duration-300 ${page === 'contact' ? 'border-white' : 'border-transparent'}`}
                  onClick={e => {e.preventDefault(); setPage('contact')}}
                >Contacto</a>
            </div>
            <div  className='md:pr-20'>
                <button 
                onClick={handleLogin}
                className="text-black p-2 rounded bg-crema font-bold   hover:bg-amber-500 "
                >{isLoggedIn
                  ? (<h2>Alan V</h2>)
                  : (<h2>Log in</h2>)
                }</button>
            </div>
        </nav>
    </div>
        
    </>
  )
}
