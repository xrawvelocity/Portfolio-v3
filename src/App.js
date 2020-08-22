import React, { Fragment } from "react";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import { Switch, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  state = {
    selected: ""
  }

  setSelected = (what) => {
    this.setState({
      selected: what
    })
  }

  render() {
    return (
      <main className="landing">
        <nav className="landing-top">
          <a href="#" className="landing-top-logo ">VD</a>
          <div className="landing-top-nav">
            <a className="landing-top-nav-link" href="#work">Work</a>
            <a className="landing-top-nav-link" href="#about">About</a>
            <a className="landing-top-nav-link" href="#contact">Contact</a>
          </div>
        </nav>

        <Home />
        <Work />
        <About />
        <Contact />

      </main>
    );
  }
}
