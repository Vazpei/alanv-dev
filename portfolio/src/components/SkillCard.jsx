



export default function SkillCard({tech,name,description,icon}){
    console.log(tech)
    return(
        <>
            <div className="skill-cards-container">
                    <div className="card">
                        <div className="icon">
                            <img src={icon} alt="" />
                        </div>
                        <div className="title-card">
                            <h2>{name}</h2>
                        </div>
                        <div className="description-card">
                            <p>{description}</p>
                        </div>
                        
                    </div>
                </div>
        </>
    )
}