import { projects } from "./resumeData"

function Projects() {
    return (
        <div className="re-projects">
            <p class="heading" title="Some of my best build projects that I'm proud of">Projects</p>
            {projects.map(function (project) {
                return (
                    <div className="re-project">
                        <p class="sub-heading">{project.name}</p>
                        <div class="proj-details">
                            <p class="sub-sub-heading">Description: <span>{project.description}</span></p>
                            <p class="sub-sub-heading">Technologies Used: <span>{project.techUsed}</span></p>
                            <p class="sub-sub-heading">My Contribution: <span>{project.contribution}</span></p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Projects;