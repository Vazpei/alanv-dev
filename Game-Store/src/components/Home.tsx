
import type { Game } from "../types"
import AllGamesSection from "./AllGamesSection";

type HomeProps = {
  game:Game
  cart:Game[]
  setGame: React.Dispatch<React.SetStateAction<Game>>
  setCart:React.Dispatch<React.SetStateAction<Game[]>>
}

export default function Home({setGame,setCart,game}:HomeProps) {
  const randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  function addGame() {
    const newGame:Game = {
      id:randomNumber,
      name:'Final Fantasy VII: Rebirth',
      year:2025,
      distributor:'Square Enix',
      platform:'Play Station 5',
      price:699,
      img:'https://anewgameplus.com/wp-content/uploads/2024/03/final-fantasy-vii-rebirth-cover.jpg'
    }

    console.log(`Setting game on cart ${game.name}`)
    setCart(prev => [...prev,newGame])
    setGame(newGame)
  }

  return (
    <div>
      
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
          setCart={setCart}
          setGame={setGame}
        />
      </div>
    </div>
  )
}
