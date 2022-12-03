import { education } from "../resumeData";

function EducationalDetails(){
    return (
        <div className="educational-qualification">
            <p class="heading">Educational Qualification</p>
            
            { education.map(function (edu){
                return (
                    <div className= {edu.nameOfClass} >
                        <p class="degree sub-heading">{edu.degree}</p>
                        <div class="details">
                            <p class="college-name">{edu.institute}</p>
                            <p class="years">{edu.from} - {edu.to}</p>
                            <p class="score">{edu.score}</p>
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}

export default EducationalDetails;