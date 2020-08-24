import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default class Work extends Component {
  state = {
    popup: "",
  };
  render() {
    return (
      <section id="work" className="work">
        <h2 className="about-story-title" style={{marginTop: "30px"}}>Work</h2>
        <div className="work-grid">

          <div className="work-grid-card-container">
            <div className="work-grid-card">
              <div className="work-grid-card__side work-grid-card__side--front">
                <div className="work-grid-card__picture work-grid-card__picture--5">
                  &nbsp;
                </div>
                <h4 className="work-grid-card__heading">
                  <span className="work-grid-card__heading-image work-grid-card__heading-image--5"></span>
                  <span className="work-grid-card__heading-span work-grid-card__heading-span--5">
                    TheRusticDude
                  </span>
                </h4>
                <div className="work-grid-card__details">
                  <ul>
                    <li>
                      React.js{" "}
                      <span className="work-grid-card__details-logo-react"></span>
                    </li>
                    <li>
                      SASS{" "}
                      <span className="work-grid-card__details-logo-sass"></span>
                    </li>
                    <li>
                      Javascript{" "}
                      <span className="work-grid-card__details-logo-js"></span>
                    </li>
                    <li>
                      Firebase{" "}
                      <span className="work-grid-card__details-logo-firebase"></span>
                    </li>
                    <li>
                      Premiere Pro{" "}
                      <span className="work-grid-card__details-logo-premiere"></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="work-grid-card__side work-grid-card__side--back work-grid-card__side--back-5">
                <div className="work-grid-card__cta">
                  <p className="work-grid-card__description">
                    Portfolio for a small carpenter company with hidden admin route
                  </p>
                  <div
                    onClick={() => {
                      this.setState({ popup: "therusticdude" });
                    }}
                    className="work-grid-card__btn"
                  >
                    More Info
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="work-grid-card-container">
            <div className="work-grid-card">
              <div className="work-grid-card__side work-grid-card__side--front">
                <div className="work-grid-card__picture work-grid-card__picture--4">
                  &nbsp;
                </div>
                <h4 className="work-grid-card__heading">
                  <span className="work-grid-card__heading-image work-grid-card__heading-image--4"></span>
                  <span className="work-grid-card__heading-span work-grid-card__heading-span--4">
                    fitsocial
                  </span>
                </h4>
                <div className="work-grid-card__details">
                  <ul>
                    <li>
                      React.js{" "}
                      <span className="work-grid-card__details-logo-react"></span>
                    </li>
                    <li>
                      Redux{" "}
                      <span className="work-grid-card__details-logo-redux"></span>
                    </li>
                    <li>
                      Node.js{" "}
                      <span className="work-grid-card__details-logo-node"></span>
                    </li>
                    <li>
                      Express.js{" "}
                      <span className="work-grid-card__details-logo-express"></span>
                    </li>
                    <li>
                      Firebase{" "}
                      <span className="work-grid-card__details-logo-firebase"></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="work-grid-card__side work-grid-card__side--back work-grid-card__side--back-4">
                <div className="work-grid-card__cta">
                  <p className="work-grid-card__description">
                    Social Media for exercise enthusiasts. Features instant
                    messaging, notifications, and more.
                  </p>
                  <div
                    onClick={() => {
                      this.setState({ popup: "fitsocial" });
                    }}
                    className="work-grid-card__btn"
                  >
                    More Info
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="work-grid-card-container">
            <div className="work-grid-card">
              <div className="work-grid-card__side work-grid-card__side--front">
                <div className="work-grid-card__picture work-grid-card__picture--1">
                  &nbsp;
                </div>
                <h4 className="work-grid-card__heading">
                  <span className="work-grid-card__heading-image work-grid-card__heading-image--1"></span>
                  <span className="work-grid-card__heading-span work-grid-card__heading-span--1">
                    Track Trade
                  </span>
                </h4>
                <div className="work-grid-card__details">
                  <ul>
                    <li>
                      React.js{" "}
                      <span className="work-grid-card__details-logo-react"></span>
                    </li>
                    <li>
                      Redux{" "}
                      <span className="work-grid-card__details-logo-redux"></span>
                    </li>
                    <li>
                      Node.js{" "}
                      <span className="work-grid-card__details-logo-node"></span>
                    </li>
                    <li>
                      Express.js{" "}
                      <span className="work-grid-card__details-logo-express"></span>
                    </li>
                    <li>
                      MongoDB{" "}
                      <span className="work-grid-card__details-logo-mongo"></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="work-grid-card__side work-grid-card__side--back work-grid-card__side--back-1">
                <div className="work-grid-card__cta">
                  <p className="work-grid-card__description">
                    Social media for Foreign Exchange Traders that allows users
                    to visualize their performance using charts.
                  </p>
                  <div
                    onClick={() => {
                      this.setState({ popup: "tracktrade" });
                    }}
                    className="work-grid-card__btn"
                  >
                    More Info
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="work-grid-card-container">
            <div className="work-grid-card">
              <div className="work-grid-card__side work-grid-card__side--front">
                <div className="work-grid-card__picture work-grid-card__picture--2">
                  &nbsp;
                </div>
                <h4 className="work-grid-card__heading">
                  <span className="work-grid-card__heading-image work-grid-card__heading-image--2"></span>
                  <span className="work-grid-card__heading-span work-grid-card__heading-span--2">
                    Live Style
                  </span>
                </h4>
                <div className="work-grid-card__details">
                  <ul>
                    <li>
                      React.js{" "}
                      <span className="work-grid-card__details-logo-react"></span>
                    </li>
                    <li>
                      Express.js{" "}
                      <span className="work-grid-card__details-logo-express"></span>
                    </li>
                    <li>
                      SASS{" "}
                      <span className="work-grid-card__details-logo-sass"></span>
                    </li>
                    <li>
                      Cheerio{" "}
                      <span className="work-grid-card__details-logo-cheerio"></span>
                    </li>
                    <li>
                      AJAX{" "}
                      <span className="work-grid-card__details-logo-ajax"></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="work-grid-card__side work-grid-card__side--back work-grid-card__side--back-2">
                <div className="work-grid-card__cta">
                  <p className="work-grid-card__description">
                    Single-page web app built with React. Uses custom Amazon Web
                    Scrape and YouTube API to recommend specific videos and
                    products to the users.
                  </p>
                  <div
                    onClick={() => {
                      this.setState({ popup: "livestyle" });
                    }}
                    className="work-grid-card__btn"
                  >
                    More Info
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.state.popup === "therusticdude" ? (
          <div className="work-popup">
            <div className="work-popup-content">
              <div className="work-popup-demo work-popup-demo_therusticdude"></div>
              <FontAwesomeIcon
                onClick={() => {
                  this.setState({ popup: "" });
                }}
                icon={faTimes}
                className="work-popup-info-close"
              />
              <div className="work-popup-info">
                <div className="work-popup-info-text">
                  This project taught me about working with a client who had no previous online exposure aside from an offerup store.
                  I made their name, logo, website, video, and social medias.
                </div>
                <div className="work-popup-info-btns">
                  <a
                    href="https://www.therusticdude.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-popup-info-btns_demo"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/xrawvelocity/theRusticDude"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-popup-info-btns_code"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {this.state.popup === "fitsocial" ? (
          <div className="work-popup">
            <div className="work-popup-content">
              <div className="work-popup-demo work-popup-demo_fitsocial"></div>
              <FontAwesomeIcon
                onClick={() => {
                  this.setState({ popup: "" });
                }}
                icon={faTimes}
                className="work-popup-info-close"
              />
              <div className="work-popup-info">
                <div className="work-popup-info-text">
                  This project taught me a lot about Firebase's realtime
                  database and handling the global state using Redux.
                </div>
                <div className="work-popup-info-btns">
                  <a
                    href="https://fitsocial.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-popup-info-btns_demo"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/xrawvelocity/Workout-Challenge-v2-Frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-popup-info-btns_code"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {this.state.popup === "tracktrade" ? (
          <div className="work-popup">
            <div className="work-popup-content">
              <div className="work-popup-demo work-popup-demo_tracktrade"></div>
              <div className="work-popup-info">
                <FontAwesomeIcon
                  onClick={() => {
                    this.setState({ popup: "" });
                  }}
                  icon={faTimes}
                  className="work-popup-info-close"
                />
                <div className="work-popup-info-text">
                  This project taught me about authentication, creating,
                  reading, updating, and deleting data from databases.
                </div>
                <div className="work-popup-info-btns">
                  <a
                    href="https://tracktrade.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-popup-info-btns_demo"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/TrackTraders/TrackTrade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-popup-info-btns_code"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {this.state.popup === "livestyle" ? (
          <div className="work-popup">
            <div className="work-popup-content">
              <div className="work-popup-demo work-popup-demo_livestyle"></div>
              <div className="work-popup-info">
                <FontAwesomeIcon
                  onClick={() => {
                    this.setState({ popup: "" });
                  }}
                  icon={faTimes}
                  className="work-popup-info-close"
                />
                <div className="work-popup-info-text">
                  This project taught me about fetching data from APIs and Web
                  Scraping.
                </div>
                <div className="work-popup-info-btns">
                  <a
                    href="https://livestyle.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-popup-info-btns_demo"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/xrawvelocity/LiveStyle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-popup-info-btns_code"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    );
  }
}
