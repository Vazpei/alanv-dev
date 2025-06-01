
import { SkillsData } from '../data/SkillsData.js'
import SkillCard from './SkillCard.jsx'


export default function SkillSet(){
    return(
        <>
        <div className=''>
            <h2 className='skill-card-title  text-white text-2xl pl-20 pt-10 pb-10 font-bold'>Skill-Set</h2>
            <div className="skill-card-grid flex flex-wrap justify-center gap-5 bg-linear-20 pl-10 pr-10 pb-10  text-white">
                {SkillsData.map(tech => {
                    const { name,description,icon,id } = tech;
                    return(
                        <>
                            <SkillCard
                                name={name}
                                description={description}
                                icon={icon}
                                tech={tech}
                                id={id}
                            />
                        </>
                    )
                })}
            </div>
        </div>
        </>
    )
}