import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Navigation = () => {
    return (
        <nav className="landing-top">
            <a href="#top" className="landing-top-logo ">
                VD
            </a>
            <div className="landing-top-nav">
                <a
                    className="landing-top-nav-link landing-top-nav-link_work"
                    href="#work"
                >
                    Work
                </a>
                <a className="landing-top-nav-link" href="#about">
                    About
                </a>
                <a className="landing-top-nav-link" href="#contact">
                    Contact
                </a>
            </div>
            <div>
                <a
                    href="https://linkedin.com/in/victor--fernandez"
                    className="footer-links_linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="https://github.com/xrawvelocity"
                    className="footer-links_github"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://github.com/xrawvelocity"
                    className="footer-links_email"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </nav>
    );
};
