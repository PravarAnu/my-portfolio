export default function Header() {
    return (
        <nav>
            <ul>
                <li><h1>
                    <a href="/">Pravar Anu</a>
                </h1></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                    <a href="https://www.linkedin.com/in/pravaranu/">
                        <span className="fab fa-linkedin-in" aria-hidden="true"></span>
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/PravarAnu">
                        <span className="fab fa-github" aria-hidden="true"></span>
                        <span className="sr-only">Github</span>
                    </a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/13qZGG_5mxJJek_PoJGuPuzLAnuDGXlNX/view?usp=sharing" class="button" target="_blank" rel="noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    )
}