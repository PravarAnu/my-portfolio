function Project(props) {
    return (
        <article className={props.articleClass}>
            <div className={props.class}>
                <h3>{props.heading}</h3>
                <p>
                    {props.description}
                    <a href={props.projectLink} target="_blank" rel="noreferrer">this</a>
                    {props.extraThings}
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