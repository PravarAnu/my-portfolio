import {experience} from "./resumeData";

function Experience() {
    return(
        <div className="experience">
            <p class="heading">Work Experience</p>
            {experience.map(function(exp) {
                return (
                    <div className={exp.nameOfClass}>
                        <p class="sub-heading">{exp.heading} ({exp.from} - {exp.to})</p>
                        <ul>
                            {exp.work.map(function(w){
                                return <li>{w}</li>
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    )
}

export default Experience;