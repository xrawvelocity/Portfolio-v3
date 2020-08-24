import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";


export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-links">
                    <a href="https://www.facebook.com/theRusticDude/" className="footer-links_linkedin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.instagram.com/therusticdude/" className="footer-links_github" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                </div>
                <a href="#" className="landing-top-logo ">VD</a>
                <div className="footer-contact">
                    <a
                        href="./files/VictorFernandezResume.docx"
                        class="contact-links__resume"
                        download
                    >
                        Resume</a>
                    <p>
                        Email:{" "}
                        <a href="mailto:fernandezvictordev@gmail.com">fernandezvictordev@gmail.com</a>
                    </p>
                    
                </div>
            </footer>
        )
    }
}
