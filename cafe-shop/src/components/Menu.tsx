import { allMenu } from "../db/data"

export default function Menu() {
  return (
    <>
      <div className="text-3xl font-bold text-center mt-10 mb-5">Menu</div>
      <div className="flex flex-wrap m-auto justify-center gap-2 max-w-400 items-center">
        {allMenu.map(coffee =>{
          const { name,description,img } = coffee
          return(
            <div className="flex flex-col gap-3 w-100 p-2 rounded-2xl itemce">
              <div><img src={img} className="w-full h-90" alt="" /></div>
              <div className="text-lg font-bold">{name}</div>
              <div>{description}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}
