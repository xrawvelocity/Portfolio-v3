import { Grid } from "@mui/material";
import React from "react";
import Project from "../components/Project";

import rusticdudebg from "../images/backgrounds/rusticdudebg.png";
import tracktradebg from "../images/backgrounds/tracktradebg.png";
import nowpalletbg from "../images/backgrounds/nowpalletbg.png";
import luisavilabg from "../images/backgrounds/luisavilabg.png";

import reactLogo from "../images/logos/reactjslogo.png";
import materialUIlogo from "../images/logos/materialuilogo.png";
import rechartsLogo from "../images/logos/chart-icon.png";

import firebaseLogo from "../images/logos/firebase.png";
import sassLogo from "../images/logos/sasslogo.svg";
import Title from "../components/Title";

const Work = () => {
    return (
        <section
            className="work"
            style={{ position: "relative", paddingTop: "5rem" }}
        >
            <Title>Projects</Title>
            <Grid container spacing={6} justify="center">
                <Project
                    image={nowpalletbg}
                    title={"Now Pallet | E-Commerce"}
                    description={
                        "A custom responsive e-commerce site for a wholesale distribution company with inventory management."
                    }
                    started="November, 2023"
                    updated="February, 2024"
                    technologies={[
                        { logo: reactLogo, name: "React JS" },
                        { logo: materialUIlogo, name: "Material UI" },
                        { logo: firebaseLogo, name: "Firebase" },
                    ]}
                    demo={"https://www.nowpallet.com/"}
                    code={"https://github.com/xrawvelocity/nowpallet"}
                />
                <Project
                    image={tracktradebg}
                    title={"Track Trade | Software"}
                    description={
                        "Social media for Foreign Exchange traders that allows users to visualize their performance using charts and to share their trading ideas. "
                    }
                    started="February, 2020"
                    updated="February, 2024"
                    technologies={[
                        { logo: reactLogo, name: "React JS" },
                        { logo: materialUIlogo, name: "Material UI" },
                        { logo: rechartsLogo, name: "Recharts" },
                        { logo: firebaseLogo, name: "Firebase" },
                    ]}
                    demo={"https://tracktrade.netlify.app/"}
                    code={"https://github.com/TrackTraders/TrackTrade"}
                />

                <Project
                    image={rusticdudebg}
                    title={"The Rustic Dude | Portfolio"}
                    description={
                        "A portfolio for a woodworking company with a hidden admin route to manage the products being displayed."
                    }
                    started="June, 2020"
                    updated="October, 2021"
                    technologies={[
                        { logo: reactLogo, name: "React JS" },
                        { logo: materialUIlogo, name: "Material UI" },
                        { logo: firebaseLogo, name: "Firebase" },
                        { logo: sassLogo, name: "SASS" },
                    ]}
                    demo={"https://therusticdude2.netlify.app/"}
                    code={"https://github.com/xrawvelocity/theRusticDude"}
                />

                <Project
                    image={luisavilabg}
                    title={"Luis Avila | Portfolio"}
                    description={
                        "This is a simple portfolio for an actor that allows visitors to get to know him and his work"
                    }
                    started="November, 2021"
                    updated="June, 2022"
                    technologies={[
                        { logo: reactLogo, name: "React JS" },
                        { logo: materialUIlogo, name: "Material UI" },
                        {
                            logo: sassLogo,
                            name: "SASS",
                        },
                    ]}
                    demo={"https://www.luisofavila.com"}
                    code={"https://github.com/xrawvelocity/luisofavila"}
                />
            </Grid>
            <div id="contact" style={{ position: "absolute", bottom: 70 }} />
        </section>
    );
};

export default Work;
