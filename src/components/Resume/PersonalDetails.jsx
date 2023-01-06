import { personalDetails } from "./resumeData";

function PersonalDetails() {
    return (
        <div class="personal-details">
            <p class="heading">Personal Information</p>
            {personalDetails.map(function(personalDetail){
                return <p class="sub-sub-heading">{personalDetail.title}<span>{personalDetail.value}</span></p>
            })}
        </div>
    )
}

export default PersonalDetails;