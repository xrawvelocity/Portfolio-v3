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
        {/* <div className="about-story">
          <h2 className="about-story-title">Services</h2>
          <div className="about-services">
            <div className="about-services-each">
              <div className="about-services-each-container">
                <h6 className="about-services-each-container-title">Web Design &amp; Development</h6>
                <p className="about-services-each-container-paragraph">
                  I build bespoke, scalable web applications using modern web
                  technologies and tools. I ensure all websites adhere to
                  insustry standards and deliver the best possible user
                  experience.
                </p>
              </div>
            </div>
            <div className="about-services-each">
              <div className="about-services-each-container">
                <h6 className="about-services-each-container-title">Responsive Design</h6>
                <p className="about-services-each-container-paragraph">
                  Mobile phones now account for more than half of all internet
                  traffic which is why I ensure that all websites I develop are
                  responsive; this means that the website can adjust to any
                  screen size or device.{" "}
                </p>
              </div>
            </div>
            <div className="about-services-each">
              <div className="about-services-each-container">
                <h6 className="about-services-each-container-title">e-Commerce</h6>
                <p className="about-services-each-container-paragraph">
                  I utilize powerfull platforms and tools to build scalable,
                  purpose-driven e-Commerce solutions. Your bespoke online store
                  will provide a seamless user experience, that turns leads in
                  to customers.
                </p>
              </div>
            </div>
            <div className="about-services-each">
              <div className="about-services-each-container">
                <h6 className="about-services-each-container-title">Content Management</h6>
                <p className="about-services-each-container-paragraph">
                  It's important that you're able to self-manage your website
                  from any place at any time, which is why I develop content
                  management systems that give you control over your website
                  data.
                </p>
              </div>
            </div>
            <div className="about-services-each">
              <div className="about-services-each-container">
                <h6 className="about-services-each-container-title">Website Management</h6>
                <p className="about-services-each-container-paragraph">
                  I provide various website management options which include -
                  updating content, backing-up important data, monitoring and
                  security/software updates.
                </p>
              </div>
            </div>
            <div className="about-services-each">
              <div className="about-services-each-container">
                <h6 className="about-services-each-container-title">SEO</h6>
                <p className="about-services-each-container-paragraph">
                  Standard on-page SEO practices are included with every website
                  I develop. This allows your website to rank higher in search
                  engine results and potentially drive more traffic to your
                  site.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <iframe className="youtube-video" title="Web Dev Journey" src="https://www.youtube.com/embed/vZATCcCbpSw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        <div className="about-story">
          <h2 className="about-story-title" style={{marginTop: "30px"}}>Background</h2>
          <p className="about-story-paragraph">
            Self taugh web developer since June 2019. Attended Ironhack Miami
            Coding Bootcamp from January 2020 to March 2020. Web Developer Intern From March 2020 to May 2020. Freelancer since.
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
