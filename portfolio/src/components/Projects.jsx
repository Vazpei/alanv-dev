import { ProjectsData } from "../data/SkillsData"

export default function Projects(){
    return(
        <>
            <div className="pb-10">
                <h2 className="font-bold pl-10 text-2xl mb-5">Projects</h2>
                <div className="flex flex-wrap justify-center gap-5 ml-10 mr-10">
                {
                    ProjectsData.map(project => {

                        const { name,link,tech } = project
                        return(
                            <div className="project-card w-80">
                                <div className="title mb-2 font-bold">
                                    <h2>{name}</h2>
                                </div>
                                <div className="img">
                                    <img src={project.imgLink} alt="" className="w-full h-50 hover:scale-105 transition-all duration-300 mb-4" onClick={() => window.open(link)}/>
                                </div>
                                <div className="tech">
                                    <p>{tech}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}