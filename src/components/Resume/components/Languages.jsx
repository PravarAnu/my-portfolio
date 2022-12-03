import { languages } from "../resumeData";

function Languages() {
    return (
        <div class="language">
            <p class="heading">Language</p>
            <ul>
                {languages.map(function(language) {
                    return <li>{language}</li>
                })}
            </ul>
        </div>
    )
}

export default Languages;