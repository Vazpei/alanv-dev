
import { SkillsData } from '../data/SkillsData.js'
import SkillCard from './SkillCard.jsx'
import './../styles/SkillCard.css'

export default function SkillSet(){
    return(
        <> 
        <h2 className='skill-card-title'>Skill-Set</h2>
            <div className="skill-card-grid">
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