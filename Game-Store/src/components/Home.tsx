
export default function Home() {
  return (
    <div>
      <h2 className="font-bold text-2xl mt-10 ml-5">
        Home
      </h2>
      <div className="img-text flex flex-col mt-20 gap-5 p-5 justify-center">
        <h2 className="text-2xl text-center mb-5">Compra Final Fantasy VII: Rebirth!</h2>
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
          onClick={() => alert(`Final Fantasy 7: Rebirth added to cart`)}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
