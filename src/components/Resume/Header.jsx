function Header() {
    return (
        <header>
            <div className="head-part">
                <p className="name">Pravar Anu</p>
                <p className="stream">Computer Science & Engineering</p>
            </div>
            
            <div className="information">
                <p className="address">
                    <i className="fa-solid fa-location-dot"></i> Bangalore, Karnataka, INDIA |
                    &nbsp;
                </p>
                <p className="phone">
                    <i className="fa-solid fa-phone"></i> +91 7368098223 |{" "}
                </p>
                <p className="imp-links">
                    <span className="email re-icon">
                        <a className="conn" title="Mail Me" href="mailto:pravaranu6@gmail.com">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </span>
                    <span className="github re-icon">
                        <a className="conn" title="My Github Profile" href="https://github.com/PravarAnu">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </span>
                    <span className="linkedin re-icon">
                        <a className="conn" title="My LinkedIn Profile" href="https://www.linkedin.com/in/pravaranu/">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </span>
                    <span className="portfolio re-icon">
                        <a className="conn" title="My Portfolio" href="https://pravaranu.vercel.app/">
                            <i class="fa-solid fa-user"></i>
                        </a>
                    </span>
                </p>
            </div>
            <hr/>
        </header>
    );
}

export default Header;
