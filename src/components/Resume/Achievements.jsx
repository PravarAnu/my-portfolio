import {achievements} from "./resumeData";

function Achievements() {
    return (
        <div className="achievements">
            <p class="heading">Achievements</p>
            <ul>
                {achievements.map(function(achievement) {
                    return <li>{achievement}</li>
                })}
            </ul>
        </div>
    );
}

export default Achievements;