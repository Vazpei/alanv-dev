import type React from "react"
import { gameList } from "../data/db";
import { useState } from "react";

export default function Explore() {
  const [ filteredList,setFilteredList ] = useState(gameList)
  const [ search,setSearch ] = useState(``)

  const handleClick = () =>{
    const filtered = gameList.filter(game =>
      game.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredList(filtered)
  }
  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setSearch(e.target.value)
  }
  return (
    <div>
      <div className="font-bold text-2xl">
        Explore or search all our games
      </div>
      <div className="flex justify-center mt-10">
        <input 
          type="text" 
          className="bg-slate-600 rounded-tl rounded-bl p-2 h-10 w-80" 
          name="search-inp" 
          onChange={handleInput}
          />
        <button
          onClick={handleClick}
        ><img 
          src="/img/search.svg"  
          className='bg-violet-800 rounded-tr rounded-br w-10 transition-all active:bg-violet-500 p-2 border-0 h-10'
          alt="" 
        /></button>
      </div>
      <div className="all-games mt-20 flex flex-col gap-5 items-center justify-center max-w-190 m-auto">
        {filteredList.map(game =>{
          const { name,year,platform,distributor,img } = game
          return(
            <div className="flex items-center gap-1 bg-slate-800 w-full  p-5 rounded-2xl">
              <p><img src={img} alt="" className="w-40 h-50"/></p>
              <div className="flex flex-col pl-10">
                <p className="font-bold">{name}</p>
                <p>{year}</p>
                <p>{platform}</p>
                <p>{distributor}</p>
              </div>
              
            </div>
            
          )
        })}
      </div>
    </div>
  )
}
