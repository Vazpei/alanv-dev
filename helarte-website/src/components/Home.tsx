
import { db } from "../db/data"


export default function Home() {
  return (
    <div>
      <div className="cover-home flex flex-wrap gap-2 p-3 justify-center items-center mt-5 mb-5">
        <div className="w-120">
          <div className="text-4xl">En <span className="text-amber-600 font-bold">Helarte</span> se hace arte y servimos helado.</div>
          <div className="text-2xl">Ven y prueba nuestros productos, contamos con gran variedad.</div>
        </div>
        <div className="w-120">
          <img
          className="" 
          src="/nieve-home.png" 
          alt="Imagen de menu" 
          /></div>
      </div>
      <div 
      className="mini-hero mb-10 bg-blue-800 bg-cover w-full h-80 flex justify-center items-center p-10"
      style={{backgroundImage:"url('/mini-hero.png'"}}
      >
        <div className="text-white text-2xl max-w-300">En Helarte nos especializamos en la fabricacion de helado. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis reprehenderit nam id? Dolore quos libero quaerat esse illo amet, accusamus neque aliquid! Esse ipsum quibusdam ea alias quos explicabo possimus.</div>
      </div>
      <div className="mini-menu">
        <p className="text-2xl max-w-320 m-auto mb-10">Destacados</p>
        <div className="flex flex-wrap justify-center gap-8 m-auto max-w-320">
          {db.map(item => {
            const { name, description, price, img } = item
            return (
              <div className="card flex flex-col w-80">
                <div><img src={img} className="w-full h-50" alt="" /></div>
                <div className="font-bold text-amber-600 text-2xl">{name}</div>
                <div>{description}</div>
                <div className="font-bold text-2xl ">{price}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
      
  )
}
