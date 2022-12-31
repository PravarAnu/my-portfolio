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
                    />
                ))}
            </section>
            <p className="more-proj">
                <a class="mail" href="/projects">
                    More Projects
                </a>
            </p>
        </div>
    );
}
