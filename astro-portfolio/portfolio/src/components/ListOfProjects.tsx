import  { Projects } from "../db/db.ts"


export default function ListOfProjects() {
  return (
    <div className="flex flex-wrap gap-5">
        {Projects.map(project => {
            const { name, description, technologies, url, image } = project
            return(
                <div className="card max-w-120 flex flex-col gap-4 bg-slate-950 p-3 rounded">
                    <div className=" font-bold">{name}</div>
                    <img 
                        src={image} 
                        alt="" 
                    />
                    <a 
                        target="_blank"
                        href={url}>Check</a>
                    <div>{description}</div>
                    <div className=" flex gap-3 mt-3">{technologies.map(tech =>{
                        return(
                            <div className="bg-slate-600 p-1 rounded">{tech}</div>
                        )
                    })}</div>
                </div>
            )
        })}
    </div>
  )
}
