import React, { Component } from "react";

export default class About extends Component {
    showSkills = (skills) => {
        return skills.map((skill) => {
            return (
                <div className="about-skills-list-each">
                    <div
                        className={`about-skills-list-each-image about-skills-list-each-image-${skill}`}
                    ></div>
                    <div className="about-skills-list-each-name">
                        {skill.charAt(0).toUpperCase() + skill.slice(1)}
                    </div>
                </div>
            );
        });
    };
    render() {
        return (
            <section id="about" className="about">
                <h2
                    className="about-story-title"
                    style={{
                        marginTop: "50px",
                        width: "100%",
                        textAlign: "center",
                        color: "#000 !important",
                    }}
                >
                    About
                </h2>
                <iframe
                    className="youtube-video"
                    title="Web Dev Journey"
                    src="https://www.youtube.com/embed/vZATCcCbpSw"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
                <div className="about-story">
                    <p className="about-story-paragraph">
                        Self taugh web developer since June 2019. Attended
                        Ironhack Miami Coding Bootcamp from January 2020 to
                        March 2020. Worked as a Software Engineer for a payment
                        processing company since November 2020.
                    </p>
                </div>
                <div className="about-picture"></div>
                <div className="about-skills">
                    <h2 className="about-skills-title">Skills</h2>
                    <div className="about-skills-list">
                        {this.showSkills([
                            "HTML",
                            "CSS",
                            "SASS",
                            "javascript",
                            "reactJS",
                            "redux",
                            "mongoDB",
                            "firebase",
                            "nodeJS",
                            "expressJS",
                        ])}
                    </div>
                </div>
            </section>
        );
    }
}
