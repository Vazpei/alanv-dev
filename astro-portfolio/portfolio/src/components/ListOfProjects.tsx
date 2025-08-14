import  { Projects } from "../db/db.ts"


export default function ListOfProjects() {
  return (
    <div>
        {Projects.map(project => {
            const { name, description, technologies, url, image } = project
            return(
                <div className="card bg-slate-950 p-3 rounded">
                    <div className="mb-5 font-bold">{name}</div>
                    <img 
                        src={image} 
                        className="hover:cursor-pointer" 
                        alt="" 
                        onClick={() => window.open(url,'_blank')}
                    />
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
