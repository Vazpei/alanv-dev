
type HeroProps = {
    page:string
    setPage:React.Dispatch<React.SetStateAction<string>>
}

export default function Hero({page,setPage}:HeroProps) {


  const handleACLick = (e: React.MouseEvent<HTMLAnchorElement>,page:string) => {
    e.preventDefault()
    setPage(page)
  }

  return (
    <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent),url('/img/background.png')] h-100 w-full bg-cover p-5">
        <div className="register-buttons flex justify-between items-center ml-2 mr-2">
            <div className="image-logo flex justify-center pb-5">
                <img src="/img/icon.png" width={30} height={30} alt=""/>
                <p className="text-2xl">Game Over</p>
            </div>
            <div className="buttons flex gap-5">
                <button 
                className="btn p-2 outline-2 rounded hover:bg-white hover:text-black transition-all"
                onClick={() => alert(`Register clicked!`)}
                >Register</button>
                <button className="transition-all hover:scale-110 hover:border-b-2">Sign in</button>
            </div>
        </div>
        <nav className="flex gap-5 justify-between m-auto pt-10 max-w-2xl">
                <a 
                href=''
                onClick={(e) => handleACLick(e,'home')}  
                className={`transition-all hover:scale-120 ${page === 'home' ? 'font-bold' : ''}`}
                >Home</a>

                <a href="" 
                onClick={(e) => handleACLick(e,'explore')}  
                className={`transition-all hover:scale-120 ${page === 'explore' ? 'font-bold' : ''}`}
                >Explore</a>

                <a href="platforms" 
                onClick={(e) => handleACLick(e,'platforms')} className={`transition-all hover:scale-120 ${page === 'platforms' ? 'font-bold' : ''}`}>Platforms</a>

                <a href="" 
                onClick={(e) => handleACLick(e,'consoles')} 
                className={`transition-all hover:scale-120 ${page === 'consoles' ? 'font-bold' : ''}`}>Consoles</a>

                <a href="" 
                onClick={(e) => handleACLick(e,'about')} 
                className={`transition-all hover:scale-120 ${page === 'about' ? 'font-bold' : ''}`}>About Us</a>
        </nav>
        <div className="promotion-now mt-10 flex flex-col w-full gap-3">
            <p className="text-3xl">Play <span className="text-red-500 font-bold">Resident Evil 4</span> now!</p>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellendus perferendis accusamus adipisci aperiam illum alias qui.</p>
        </div>
    </div>
  )
}
