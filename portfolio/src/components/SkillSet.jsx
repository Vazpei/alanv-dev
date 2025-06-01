
import { SkillsData } from '../data/SkillsData.js'
import SkillCard from './SkillCard.jsx'


export default function SkillSet(){
    return(
        <> 
        <h2 className='skill-card-title bg-indigo-950 text-white'>Skill-Set</h2>
            <div className="skill-card-grid bg-linear-20 from-indigo-950 to-black text-white">
                {SkillsData.map(tech => {
                    const { name,description,icon } = tech;
                    return(
                        <>
                            <SkillCard
                                name={name}
                                description={description}
                                icon={icon}
                                tech={tech}
                            />
                        </>
                    )
                })}
            </div>
            
        </>
    )
}