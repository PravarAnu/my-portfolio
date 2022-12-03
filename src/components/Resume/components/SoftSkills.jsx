import {softSkills} from "../resumeData";

function SoftSkills() {
    return (
        <div class="soft-skills">
            <p class="heading">Soft Skills</p>
            <ul>
                {softSkills.map(function(softSkill){
                    return <li>{softSkill}</li>
                }) }
            </ul>
        </div>
    );
}

export default SoftSkills;