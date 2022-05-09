import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="top">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="./">Daniel Hinbest</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.github.com/DanielHinbest">GitHub Repositories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.linkedin.com/in/daniel-hinbest">LinkedIn Profile</a>
                                </li>
                            </ul>
                            <ul class="d-flex">
                                <li>
                                    <a className="nav-link">Contact: daniel.hinbest@dcmail.ca</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;
