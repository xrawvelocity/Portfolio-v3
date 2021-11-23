import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";
import { Tooltip, Typography } from "@mui/material";
import Flex from "./Flex";

export const Navigation = () => {
    return (
        <>
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
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        alignItems: "center",
                    }}
                >
                    <Tooltip placement="bottom" arrow title="Visit Linked In">
                        <a
                            href="https://linkedin.com/in/victor--fernandez"
                            className="footer-links_linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </Tooltip>
                    <Tooltip placement="bottom" arrow title="Visit Github">
                        <a
                            href="https://github.com/xrawvelocity"
                            className="footer-links_github"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </Tooltip>
                    <Tooltip placement="bottom" arrow title="Send Email">
                        <a
                            href="mailto:fernandezvictordev@gmail.com"
                            className="footer-links_email"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </Tooltip>
                    <Tooltip placement="bottom" arrow title="Download Resume">
                        <a
                            href="./files/VictorFernandezResume.docx"
                            className="footer-links_resume"
                            download
                        >
                            <FontAwesomeIcon size="sm" icon={faFile} />
                        </a>
                    </Tooltip>
                </Box>
            </nav>
            {/* mobile social links */}
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    width: "100%",
                    justifyContent: "space-around",
                    padding: "2rem",
                }}
                className="social-links"
            >
                <a
                    href="https://linkedin.com/in/victor--fernandez"
                    style={{
                        color: "#ddd",
                        margin: "1rem 0",
                        fontSize: "4rem",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Flex
                        sx={{
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <FontAwesomeIcon size="xs" icon={faLinkedin} />
                        <Typography
                            sx={{
                                fontSize: "1.6rem",
                                fontWeight: "600",
                                mt: "1.5rem",
                            }}
                        >
                            Linked In
                        </Typography>
                    </Flex>
                </a>
                <a
                    href="https://github.com/xrawvelocity"
                    style={{
                        color: "#ddd",
                        margin: "1rem 0",
                        fontSize: "4rem",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Flex
                        sx={{
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <FontAwesomeIcon size="xs" icon={faGithub} />
                        <Typography
                            sx={{
                                fontSize: "1.6rem",
                                fontWeight: "600",
                                mt: "1.5rem",
                            }}
                        >
                            Github
                        </Typography>
                    </Flex>
                </a>
                <a
                    href="mailto:fernandezvictordev@gmail.com"
                    style={{
                        color: "#ddd",
                        margin: "1rem 0",
                        fontSize: "4rem",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Flex
                        sx={{
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <FontAwesomeIcon size="xs" icon={faEnvelope} />
                        <Typography
                            sx={{
                                fontSize: "1.6rem",
                                fontWeight: "600",
                                mt: "1.5rem",
                            }}
                        >
                            Email
                        </Typography>
                    </Flex>
                </a>
                <a
                    href="./files/VictorFernandezResume.docx"
                    style={{
                        color: "#ddd",
                        margin: "1rem 0",
                        fontSize: "4rem",
                    }}
                    download
                >
                    <Flex
                        sx={{
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <FontAwesomeIcon size="xs" icon={faFile} />
                        <Typography
                            sx={{
                                fontSize: "1.6rem",
                                fontWeight: "600",
                                mt: "1.5rem",
                            }}
                        >
                            Resume
                        </Typography>
                    </Flex>
                </a>
            </Box>
        </>
    );
};
