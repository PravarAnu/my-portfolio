import Project from "./Project";
import allProjects from "./projectList";


export default function Projects() {
    return (
        <div className="Project-bg">
            <section id="projects">
                <h2>Projects I'm proud of</h2>
                
                {
                    allProjects.map( (project) => 
                        <Project
                            articleClass = {project.articleClass}
                            class = {project.class}
                            heading = {project.heading}
                            description = {project.description}
                            projectLink = {project.projectLink}
                            technology = {project.technology}
                            imgSrc = {project.imgSrc}
                            imgAlt = {project.imgAlt}
                        />
                )}
            </section>
        </div>
    );
}
