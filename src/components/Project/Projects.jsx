import { Link } from "react-router-dom";
import Project from "./Project";
import allProjects from "./projectList";

export default function Projects() {
    return (
        <div className="Project-bg">
            <section id="projects">
                <h2>Some Projects I'm Proud of</h2>

                {allProjects.slice(0, 2).map((project) => (
                    <Project
                        articleClass={project.articleClass}
                        class={project.class}
                        heading={project.heading}
                        description={project.description}
                        projectLink={project.projectLink}
                        technology={project.technology}
                        imgSrc={project.imgSrc}
                        imgAlt={project.imgAlt}
                        isLive={project.isLive}
                        liveLink={project.liveLink}
                    />
                ))}
            </section>
            <p className="more-proj">
                <Link className="mr-prj" to="/projects">
                    More Projects
                </Link>
            </p>
        </div>
    );
}
