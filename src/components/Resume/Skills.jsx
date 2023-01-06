import {skills} from "./resumeData";

function Skills(){
    return(
        <div className="skills">
            <p class="heading">Technical Skills</p>

            {skills.map(function(skill){
                return (
                    <div className={skill.nameOfClass}>
                        <p class="sub-heading">{skill.type}</p>
                        <p>{skill.techs}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Skills;