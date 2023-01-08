import {Link} from "react-router-dom"

export default function Header() {
    return (
        <nav>
            <ul>
                <li><h1>
                    <a href="/">Pravar Anu</a>
                </h1></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li>
                    <a href="https://www.linkedin.com/in/pravaranu/" rel="noreferrer" target="_blank">
                        <span className="fab fa-linkedin-in" aria-hidden="true"></span>
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/PravarAnu" rel="noreferrer" target="_blank" >
                        <span className="fab fa-github" aria-hidden="true"></span>
                        <span className="sr-only">Github</span>
                    </a>
                </li>
                <li>
                    <Link to="/resume" target="_blank" className="button">Resume</Link>
                </li>
            </ul>
        </nav>
    )
}