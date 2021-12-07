import React, { Component, Fragment } from "react";
import Stars from "../components/Stars";

const Hero = () => {
    return (
        <div className="landing">
            <Stars />
            <div className="landing-heading">
                <div className="landing-heading-top">
                    <h2 className="landing-heading-top-title">
                        Hi! I'm Victor, a full-stack <br /> web developer.
                    </h2>
                    <p className="landing-heading-top-subtitle">
                        I craft creative and result-oriented websites for
                        forward-thinking brands, like yours.
                    </p>
                </div>
                <a href="#contact" className="landing-heading-button">
                    Get In Touch
                </a>
                <div class="scroll-down"></div>
            </div>
            <div id="work" />
        </div>
    );
};

export default Hero;
