
import { useState } from "react";
import type { CartItem,Game } from "../types"
import AllGamesSection from "./AllGamesSection";

type HomeProps = {
  cart:CartItem[]
  setCart:React.Dispatch<React.SetStateAction<CartItem[]>>
  addToCart: (item:Game) => void
}

export default function Home({setCart,addToCart}:HomeProps) {

  const [ message,setMessage ] = useState(false)

  function addGame() {
    const newGame:Game = {
      id: 5,
      name: 'Final Fantasy VII: Rebirth',
      year: 2024,
      distributor: 'Square Enix',
      platform: 'PlayStation 5',
      unitPrice: 1399,
      img: 'https://upload.wikimedia.org/wikipedia/en/7/75/Boxart_for_Final_Fantasy_VII_Rebirth.png'
    }
    addToCart(newGame)
    setMessage(true)
  }
  return (
    <div>
      <div className="modal">
        {message && (
          <div>
            <h2>Felicidades</h2>
            <div></div>
          </div>
        )
        }
      </div>
      <div className="img-text flex flex-col mt-10 gap-5 p-5 justify-center">
        <h2 className="font-bold text-2xl mt-10 ml-5">
        Featured
        </h2>
        <h2 className="text-2xl text-center mb-5">Buy Final Fantasy VII: Rebirth!</h2>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <img 
          src="https://anewgameplus.com/wp-content/uploads/2024/03/final-fantasy-vii-rebirth-cover.jpg" 
          width={300}
          className="rounded"
          alt="" />
          <p className="m-5 max-w-110">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dolores non, fugiat doloribus libero aliquid! Voluptatum, rerum sunt optio in asperiores eum quaerat atque maiores, dicta ad, accusantium cum facilis?</p>
        </div>
        <div className="button-add flex justify-center">
          <button 
          className="w-60 rounded outline-2 outline-violet-800 p-1 font-bold mt-3 transition-all duration-300 hover:bg-violet-800"
          onClick={() => addGame()}>Add to cart</button>
        </div>
      </div>
      <div className="all-games ">
        <h2 className="font-bold text-2xl mt-10 ml-5 mb-10">
        All games
        </h2>
        <AllGamesSection
          addToCart={addToCart}
          setCart={setCart}
        />
      </div>
    </div>
  )
}
