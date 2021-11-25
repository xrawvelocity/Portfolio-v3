import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Flex from "./Flex";

import htmllogo from "../images/logos/htmllogo.png";
import csslogo from "../images/logos/csslogo.png";
import sasslogo from "../images/logos/sasslogo.svg";
import tailwindcsslogo from "../images/logos/tailwindcsslogo.png";
import javascriptlogo from "../images/logos/javascript.svg";
import reactjslogo from "../images/logos/reactjslogo.png";
import reduxlogo from "../images/logos/reduxlogo.png";
import materialuilogo from "../images/logos/materialuilogo.png";
import mongodblogo from "../images/logos/mongodblogo.png";
import firebaselogo from "../images/logos/firebase.png";
import nodejslogo from "../images/logos/nodejslogo.png";
import expressjslogo from "../images/logos/expressjslogo.svg";

const About = () => {
    let frontEndSkills = [
        { name: "HTML", image: htmllogo },
        { name: "CSS", image: csslogo },
        { name: "SASS", image: sasslogo },
        { name: "Tailwind CSS", image: tailwindcsslogo },
        { name: "Javascript", image: javascriptlogo },
        { name: "React JS", image: reactjslogo },
        { name: "Redux", image: reduxlogo },
        { name: "Material UI", image: materialuilogo },
    ];

    let backEndSkills = [
        { name: "Node JS", image: nodejslogo },
        { name: "Express JS", image: expressjslogo },
        { name: "Mongo DB", image: mongodblogo },
        { name: "Firebase", image: firebaselogo },
    ];

    const showSkills = (skills) => {
        return skills.map((skill) => {
            return (
                <Flex sx={{ alignItems: "center", mb: "1.5rem" }}>
                    <img
                        src={skill.image}
                        alt={skill.name}
                        style={{
                            height: "30px",
                            width: "30px",
                            marginRight: "1.5rem",
                        }}
                    />
                    <Typography sx={{ fontSize: "2.5rem" }}>
                        {skill.name}
                    </Typography>
                </Flex>
            );
        });
    };
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
            <Flex
                sx={{
                    flexDirection: { xs: "column", md: "row" },
                    width: "100%",
                    px: "10%",
                    alignItems: "center",
                    justifyContent: {
                        xs: "flex-start",
                        md: "center",
                    },
                }}
            >
                <Flex
                    sx={{
                        flexDirection: "column",
                        alignItems: "center",
                        width: { xs: "100%", md: "35%" },
                        mr: { xs: "0", md: "5rem" },
                    }}
                >
                    <Box
                        sx={{
                            height: { xs: "200px", md: "250px" },
                            width: "100%",
                            mt: { xs: "5rem", md: "0" },
                        }}
                    >
                        <iframe
                            className="youtube-video"
                            title="Web Dev Journey"
                            src="https://www.youtube.com/embed/vZATCcCbpSw"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        ></iframe>
                    </Box>
                    <Typography
                        className="about-story-paragraph"
                        sx={{
                            width: "100%",
                            fontSize: { xs: "15px", md: "24px" },
                            mb: { xs: "3rem", md: "5rem" },
                            mt: { xs: "2rem", md: "3rem" },
                        }}
                    >
                        Programmer born in Cuba, but raised in Miami. Solving
                        problems with creative and efficient solutions is what
                        I'm best at. I've been coding since High School (2016)
                        and it was always my dream to be a Software Engineer.
                    </Typography>
                </Flex>
                <Flex
                    sx={{
                        justifyContent: "center",
                        width: "40%",
                    }}
                >
                    <Flex sx={{ mb: "5rem" }}>
                        <Flex sx={{ flexDirection: "column", mr: "5rem" }}>
                            <Typography
                                sx={{
                                    mb: "2.5rem",
                                    fontSize: "2.4rem",
                                    fontWeight: "600",
                                }}
                            >
                                Front End:
                            </Typography>
                            {showSkills(frontEndSkills)}
                        </Flex>
                        <Flex sx={{ flexDirection: "column", ml: "5rem" }}>
                            <Typography
                                sx={{
                                    mb: "2.5rem",
                                    fontSize: "2.4rem",
                                    fontWeight: "600",
                                }}
                            >
                                Back End:
                            </Typography>
                            {showSkills(backEndSkills)}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </section>
    );
};

export default About;
