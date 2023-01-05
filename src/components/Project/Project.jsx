function Project(props) {
    return (
        <article className={props.articleClass}>
            <div className={props.class}>
                <h3>
                    {props.heading}
                    {props.isLive ? <a className="head-link" href={props.liveLink} title="Live"><i class="fa-solid fa-globe fa-xl head-icon"></i></a> : null}
                    <a className="head-link" href={props.projectLink}><i class="fa-brands fa-github fa-xl head-icon"></i></a>
                </h3>
                <p>
                    {props.description}
                </p>
                <h4>Technology Used:</h4>
                <ul>
                    {props.technology.map((tech) =>{
                        return <li>{tech}</li>
                    })}
                </ul>
            </div>
            <img src={props.imgSrc} alt={props.imgAlt} />
        </article>
    );
}


export default Project;