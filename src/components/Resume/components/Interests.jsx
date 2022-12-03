import { interests } from "../resumeData";

function Interests() {
    return (
        <div className="interest">
            <p class="heading">Interests</p>
            <ul> 
                {interests.map(function(interest) {
                    return <li>{interest}</li>
                })}
            </ul>
        </div>
    )
}

export default Interests;