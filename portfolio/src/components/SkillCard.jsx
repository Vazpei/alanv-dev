



export default function SkillCard({tech,name,description,icon,id}){
    console.log(tech)
    return(
        <>
                    <div className="card flex flex-col bg-indigo-950 w-70 h-90 p-5 gap-5 justify-center rounded-2xl" key={id}>
                        <div className="icon w-full flex justify-center">
                            <img src={icon} alt="" className="w-25"/>
                        </div>
                        <div className="title-card mt-5 font-extrabold ">
                            <h2>{name}</h2>
                        </div>
                        <div className="description-card text-left ">
                            <p>{description}</p>
                        </div>
                    </div>
        </>
    )
}