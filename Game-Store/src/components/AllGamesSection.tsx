
import { gameList } from "../data/db"
import type { CartItem,Game } from "../types";

type AllGamesProps = {
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
    addToCart: (item:Game) => void
}

export default function AllGamesSection({addToCart}:AllGamesProps) {

    const addNewGame = (id:number,name:string,year:number,distributor:string,platform:string,price:number,img:string) => {
        console.log(`adding... ${name}`);
        const newGameToAdd:Game = {
            id:id,
            name:name,
            year:year,
            distributor:distributor,
            platform:platform,
            unitPrice:price,
            img:img
        }
        addToCart(newGameToAdd)
        console.log(`Current Game is ::: ${newGameToAdd.name}`);
    }

  return (
    <div className="flex flex-wrap gap-4 justify-center">
        {gameList.map(game =>{
            const { id,name,year,distributor,platform,unitPrice,img } = game;
            return(
                <div className=" bg-slate-800 w-80 flex gap-2 flex-col justify-center items-center rounded-2xl p-5">
                    <div className="flex items-center font-bold text-center min-h-[70px]">{name}</div>
                    <div className=""><img src={img} className="w-70 h-90 rounded" alt="" /></div>
                    <div className="font-bold">{platform}</div>
                    <div>{distributor}</div>
                    <div>{year}</div>
                    <div className="text-2xl font-bold text-green-400">${unitPrice}</div>
                    <button 
                        className="w-60 rounded bg-violet-800 p-1 font-bold mt-3 transition-all duration-300 active:bg-violet-500"
                        onClick={() => addNewGame(id,name,year,distributor,platform,unitPrice,img)}
                        >Add</button>
                </div>
            )
        })}
    </div>
  )
}
