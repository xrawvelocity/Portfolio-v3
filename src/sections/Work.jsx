import { Grid } from "@mui/material";
import React from "react";
import Project from "../components/Project";

import rusticdudebg from "../images/rusticdudebg.png";
import tracktradebg from "../images/tracktradebg.png";
import micturbobg from "../images/micturbobg.png";
import luisavilabg from "../images/luisavilabg.png";

import reactLogo from "../images/logos/reactjslogo.png";
import materialUIlogo from "../images/logos/materialuilogo.png";
import rechartsLogo from "../images/logos/chart-icon.png";

import firebaseLogo from "../images/logos/firebase.png";
import sassLogo from "../images/logos/sasslogo.svg";
import Title from "../components/Title";

const Work = () => {
    return (
        <section className="work" style={{ position: "relative" }}>
            <Title>Work</Title>
            <Grid container spacing={6} justify="center">
                <Project
                    image={tracktradebg}
                    title={"Track Trade | Software"}
                    description={
                        "Social media for Foreign Exchange traders that allows users to visualize their performance using charts and to share their trading ideas. "
                    }
                    started="February, 2020"
                    updated="December, 2021"
                    technologies={[
                        { logo: reactLogo, name: "React JS" },
                        { logo: materialUIlogo, name: "Material UI" },
                        { logo: rechartsLogo, name: "Recharts" },
                        { logo: firebaseLogo, name: "Firebase" },
                    ]}
                    demo={"https://www.tracktrade.co"}
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
                    demo={"https://www.therusticdude.com"}
                    code={"https://github.com/xrawvelocity/theRusticDude"}
                />

                <Project
                    image={micturbobg}
                    title={"Mic Turbo | E-Commerce"}
                    description={
                        "A custom responsive e-commerce site for a mechanic shop with payment processing capabilities."
                    }
                    started="September, 2021"
                    updated="December, 2021"
                    technologies={[
                        { logo: reactLogo, name: "React JS" },
                        { logo: materialUIlogo, name: "Material UI" },
                        {
                            logo: "https://res.cloudinary.com/practicaldev/image/fetch/s--ITpGWFxn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/2134/d92f50cd-7ad7-48ba-9970-7abecdeb2194.png",
                            name: "Commerce JS",
                        },
                        {
                            logo: "https://stripe.com/img/v3/home/twitter.png",
                            name: "Stripe JS",
                        },
                    ]}
                    demo={"https://micturbo.netlify.app"}
                    code={"https://github.com/xrawvelocity/micturbo"}
                />

                <Project
                    image={luisavilabg}
                    title={"Luis Avila | Portfolio"}
                    description={
                        "This is a simple portfolio for an actor that allows visitors to get to know him and his work"
                    }
                    started="November, 2021"
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
