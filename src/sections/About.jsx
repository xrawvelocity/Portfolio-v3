import { Grid, Typography } from "@mui/material";
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
import angularlogo from "../images/logos/angularlogo.png";
import typescriptlogo from "../images/logos/typescriptlogo.svg";
import Title from "../components/Title";

import hyperlapseVideo from "../video/codingHyperlapse.mp4";

const About = () => {
    let skills = [
        { name: "HTML", image: htmllogo },
        { name: "CSS", image: csslogo },
        { name: "SASS", image: sasslogo },
        { name: "Javascript", image: javascriptlogo },
        { name: "React JS", image: reactjslogo },
        { name: "Angular", image: angularlogo },
        { name: "Gatsby", image: gatsbylogo },
        { name: "Typescript", image: typescriptlogo },
        { name: "Material UI", image: materialuilogo },
        { name: "Redux", image: reduxlogo },
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
                    justifyContent: { xs: "flex-start", lg: "center" },
                    mb: { xs: "2.5rem", lg: "2rem", xl: "1.5rem" },
                    pl: { xs: "4rem", lg: "0" },
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
                <Typography sx={{ fontSize: "2rem", whiteSpace: "nowrap" }}>
                    {each.name}
                </Typography>
            </Flex>
        );
    };

    return (
        <section className="about" style={{ position: "relative" }}>
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
                            width: { xs: "100%", md: "40%" },
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
                            width: { xs: "100%", md: "40%" },
                            p: { xs: "0 10%", md: "0 10% 0 0" },
                            ml: { xs: "0", md: "5rem", xl: "7rem" },
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                width: "100%",
                                fontSize: {
                                    xs: "15px",
                                    md: "18px",
                                    lg: "18px",
                                    xl: "20px",
                                },

                                mt: { xs: "5rem", md: "0" },
                                lineHeight: 2,
                            }}
                        >
                            Originally from Cuba and raised in Florida, I've
                            been passionate about coding since high school. In
                            2020, I attended Ironhack's Miami coding bootcamp,
                            solidifying my knowledge. With two years of
                            professional experience, I've contributed to
                            projects in both fintech and dental software
                            companies. I've also successfully managed freelance
                            projects, all which led me to strengthen these
                            following&nbsp;skills:
                        </Typography>
                    </Flex>
                </Flex>
                <Flex
                    sx={{
                        mt: "7rem",
                        width: "100%",
                        p: { xs: "0 10%", xl: "0 10%" },
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "flex-start",
                        justifyContent: "center",
                    }}
                >
                    <Flex
                        sx={{
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Grid
                            container
                            spacing={2}
                            sx={{ justifyContent: "center" }}
                        >
                            {skills.map((each) => {
                                return (
                                    <Grid item xs={6} xl={1.7}>
                                        <Skill each={each} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Flex>
                </Flex>
            </Flex>
            <div id="projects" style={{ position: "absolute", bottom: 70 }} />
        </section>
    );
};

export default About;
