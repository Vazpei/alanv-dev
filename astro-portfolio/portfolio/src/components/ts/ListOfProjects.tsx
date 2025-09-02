import  { Projects } from "../../db/db.ts"
import Index from "../../pages/index.astro"


export default function ListOfProjects() {
  return (
    <div className="flex flex-wrap gap-5 justify-center mb-10">
        {Projects.map(project => {
            const { name, description, technologies, url, image,id } = project
            return(
                <div key={id} className="card max-w-120 flex flex-col gap-4 bg-slate-950 p-3 rounded-2xl">
                    <div className=" font-bold">{name}</div>
                    <img 
                        src={image} 
                        alt="" 
                    />
                    <a 
                        target="_blank"
                        href={url}
                        className="text-sky-400 transition-all hover:text-white">Check</a>
                    <div>{description}</div>
                    <div className=" flex gap-3 mt-3">{technologies.map(tech =>{
                        return(
                            <div key={tech + Index} className="bg-slate-600 p-1 rounded">{tech}</div>
                        )
                    })}</div>
                </div>
            )
        })}
    </div>
  )
}
