function Header() {
    return (
        <header>
            <div className="head-part">
                <p className="name">Pravar Anu</p>
                <p className="stream">Computer Science & Engineering</p>
            </div>
            
            <div className="information">
                <p className="address">
                    <i className="fa-solid fa-location-dot"></i> Begusarai, Bihar, India |
                    &nbsp;
                </p>
                <p className="phone">
                    <i className="fa-solid fa-phone"></i> +91 7368098223 |{" "}
                </p>
                <p className="imp-links">
                    <span className="email icon">
                        <a href="mailto:pravaranu6@gmail.com">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </span>
                    <span className="github icon">
                        <a href="https://github.com/PravarAnu">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </span>
                    <span className="linkedin icon">
                        <a href="https://www.linkedin.com/in/pravaranu/">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </span>
                </p>
            </div>
            <hr/>
        </header>
    );
}

export default Header;
