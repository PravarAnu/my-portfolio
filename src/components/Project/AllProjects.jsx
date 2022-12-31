import "./AllProjects.css";
import projects from "./projectList";


function AllProjects() {
    return (
        <div className="projects">
            {
                projects.map(function (project) {
                    return (
                        <div className="project">
                            <img className="proj-img" src={project.imgSrc} alt={project.imgAlt}></img>
                            <hr/>
                            <div className="proj-heading">
                                <h2>{project.heading} </h2>
                                <i className={project.member === "solo" ? "fa-solid fa-person-walking-luggage fa-xl head-icon" : "fa-solid fa-people-carry-box fa-xl head-icon"} title={project.member === "solo" ? "Self Made Project" : "Group Project"}></i>
                                {project.isLive ? <a className="head-link" href={project.liveLink} title="Live"><i class="fa-solid fa-globe fa-xl head-icon"></i></a> : null}
                                <a className="head-link" href={project.projectLink}><i class="fa-brands fa-github fa-xl head-icon"></i></a>
                            </div>
                            
                            <div className="proj-description">
                                <p>{project.description}</p>
                            </div>
                            
                            <div className="proj-tech">
                                <h3>Tech Used:</h3>
                                {project.technology.map(function (tech){
                                    let techPath = `images/${tech.toLowerCase()}.svg`;
                                    return (
                                        <img className="icon" src={techPath} alt={tech} title={tech}/>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default AllProjects;