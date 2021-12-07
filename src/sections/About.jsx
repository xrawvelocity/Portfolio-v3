import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Flex from "../components/Flex";

import htmllogo from "../images/logos/htmllogo.png";
import csslogo from "../images/logos/csslogo.png";
import sasslogo from "../images/logos/sasslogo.svg";
import gatsbylogo from "../images/logos/gatsbylogo.png";
import javascriptlogo from "../images/logos/javascript.svg";
import reactjslogo from "../images/logos/reactjslogo.png";
import reduxlogo from "../images/logos/reduxlogo.png";
import materialuilogo from "../images/logos/materialuilogo.png";
import mongodblogo from "../images/logos/mongodblogo.png";
import firebaselogo from "../images/logos/firebase.png";
import nodejslogo from "../images/logos/nodejslogo.png";
import expressjslogo from "../images/logos/expressjslogo.svg";
import Title from "../components/Title";

import hyperlapseVideo from "../video/codingHyperlapse.mp4";

const About = () => {
    let frontEndSkills = [
        { name: "HTML", image: htmllogo },
        { name: "CSS", image: csslogo },
        { name: "SASS", image: sasslogo },
        { name: "Javascript", image: javascriptlogo },
        { name: "React JS", image: reactjslogo },
        { name: "Redux", image: reduxlogo },
        { name: "Material UI", image: materialuilogo },
        { name: "Gatsby", image: gatsbylogo },
    ];

    let backEndSkills = [
        { name: "Node JS", image: nodejslogo },
        { name: "Express JS", image: expressjslogo },
        { name: "Mongo DB", image: mongodblogo },
        { name: "Firebase", image: firebaselogo },
    ];

    const Skill = ({ each }) => {
        return (
            <Flex
                sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    mb: { xs: "2.5rem", lg: "2rem", xl: "1.5rem" },
                }}
            >
                <img
                    src={each.image}
                    alt={each.name}
                    style={{
                        height: "30px",
                        width: "30px",
                        marginRight: "1.5rem",
                    }}
                />
                <Typography sx={{ fontSize: "2rem" }}>{each.name}</Typography>
            </Flex>
        );
    };

    return (
        <section className="about">
            <Title color="#000">About</Title>

            <Flex sx={{ flexDirection: "column" }}>
                <Flex
                    sx={{
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                    }}
                >
                    <Flex
                        sx={{
                            flexDirection: "column",
                            alignItems: "center",
                            width: { xs: "100%", md: "50%" },
                            mr: { xs: "0", md: "5rem", xl: "7rem" },
                            pl: { xs: "0", md: "10%" },
                        }}
                    >
                        <video height="100%" width="100%" autoPlay loop muted>
                            <source src={hyperlapseVideo} type="video/mp4" />
                        </video>
                    </Flex>
                    <Flex
                        sx={{
                            flexDirection: "column",
                            width: { xs: "100%", md: "50%" },
                            p: { xs: "0 10%", md: "0 10% 0 0" },
                            ml: { xs: "0", md: "5rem", xl: "7rem" },
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            className="about-story-paragraph"
                            sx={{
                                width: "100%",
                                fontSize: {
                                    xs: "15px",
                                    md: "18px",
                                    lg: "18px",
                                    xl: "24px",
                                },

                                mt: { xs: "5rem", md: "0" },
                                lineHeight: 1.7,
                            }}
                        >
                            Programmer born in Cuba, but raised in Miami.
                            Solving problems with creative and efficient
                            solutions is what I'm best at. I've been coding
                            since High School and it has always been my dream to
                            be a Software Engineer. I attended the Ironhack
                            Miami Coding Bootcamp on January 2020. So far I've
                            acquired 1 year of professional experience working
                            at a fin tech company where I built the entire front
                            end for their software's admin and merchant portals.
                        </Typography>
                    </Flex>
                </Flex>
                <Flex
                    sx={{
                        my: "7rem",
                        width: "100%",
                        p: { xs: "0 10%", xl: "0 10%" },
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "flex-start",
                        justifyContent: "center",
                    }}
                >
                    <Flex
                        sx={{
                            justifyContent: { xs: "center", md: "center" },
                            width: { xs: "100%", md: "50%" },
                            mr: { xs: "0", xl: "7rem" },
                            mb: { xs: "7rem", md: "0" },
                        }}
                    >
                        <Flex
                            sx={{
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    mb: { xs: "4rem", lg: "2.5rem" },
                                    fontSize: "2.8rem",
                                    fontWeight: "600",
                                }}
                            >
                                Front End
                            </Typography>
                            <Grid container spacing={2}>
                                {frontEndSkills.map((each) => {
                                    return (
                                        <Grid item xs={6} xl={3}>
                                            <Skill each={each} />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Flex>
                    </Flex>
                    <Flex
                        sx={{
                            justifyContent: { xs: "center", md: "center" },
                            width: { xs: "100%", md: "50%" },
                            ml: { xs: "0", xl: "7rem" },
                            mb: { xs: "7rem", md: "0" },
                        }}
                    >
                        <Flex
                            sx={{
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    mb: { xs: "4rem", lg: "2.5rem" },
                                    fontSize: "2.8rem",
                                    fontWeight: "600",
                                }}
                            >
                                Back End
                            </Typography>
                            <Grid container spacing={2}>
                                {backEndSkills.map((each) => {
                                    return (
                                        <Grid item xs={6}>
                                            <Skill each={each} />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <div id="contact" />
        </section>
    );
};

export default About;
