import React from "react";
import heroImage from "../images/profile.jpg";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h2 className="hero-text-title">
                    Welcome to my
                    <br />
                    <span>Portfolio</span>
                </h2>
                <p className="hero-text-subtitle">
                    My name is Victor Fernandez and I've been crafting creative
                    and result-&#8288;oriented websites for
                    forward-&#8288;thinking brands,
                    like&nbsp;yours,&nbsp;since&nbsp;2019.
                </p>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="victor fernandez" />
            </div>
            <div class="scroll-down"></div>
            <div id="about" style={{ position: "absolute", bottom: 70 }} />
        </div>
    );
};

export default Hero;
