import React from "react";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import About from "./sections/About";
import Contact from "./sections/Contact";
import { Navigation } from "./components/Navigation";

const App = () => {
    return (
        <main id="top">
            <Navigation />
            <Hero />
            <About />
            <Work />
            <Contact />
        </main>
    );
};

export default App;
