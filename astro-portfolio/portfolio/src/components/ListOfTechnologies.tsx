import { Technologies } from "../db/db.ts"

export default function ListOfTechnologies() {
  return (
        <div className="flex flex-wrap gap-4 justify-center items-center">
            {Technologies.map(tech =>{
                const { name,description,image } = tech
                return (
                    <div className="card flex gap-2 justify-center items-center p-2">
                        <div><img 
                        className="w-10"
                        src={image} 
                        alt="" /></div>
                        <div>
                            {name}
                        </div>
                    </div>
                )
            })}
        </div>
  )
}
