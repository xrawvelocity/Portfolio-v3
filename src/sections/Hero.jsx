import React from "react";
import codingillustration from "../images/coding-illustration.svg";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h2 className="hero-text-title">
                    Victor Fernandez
                    <br />
                    <span>Web Developer</span>
                </h2>
                <p className="hero-text-subtitle">
                    Welcome to my Portfolio. As a skilled web developer with a
                    track record of delivering high-quality websites and
                    solutions, I have been helping businesses and individuals
                    achieve their online goals since 2019. Whether you're a
                    potential employer or a freelance client, take a look at my
                    work and let's discuss how I can help bring your vision to
                    life.
                    {/* My name is Victor Fernandez and I've been crafting creative
                    and result-&#8288;oriented websites for
                    forward-&#8288;thinking brands,
                    like&nbsp;yours,&nbsp;since&nbsp;2019. */}
                </p>
            </div>
            <div className="hero-image">
                <img src={codingillustration} />
            </div>
            <div class="scroll-down"></div>
            <div id="about" style={{ position: "absolute", bottom: 70 }} />
        </div>
    );
};

export default Hero;
