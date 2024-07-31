import React from "react";
import magazinex from "../assets/MagazineX.png";
import magazineblocks from "../assets/MagazineBlocks.png";
import colormag from "../assets/ColorMag.png";
import reactjs from "../assets/ReactJs.png";
import javascript from "../assets/JavaScript.png";
import php from "../assets/PHP.png";
import css from "../assets/CSS.png";
import wordpress from "../assets/WordPress.png";
import sass from "../assets/Sass.png";

const Portfolio = () => {
  return (
    <div className="ss-portfolio">
      <div className="ss-container">
        <div className="ss-row">
          <div className="ss-portfolio__projects">
            <div className={"ss-portfolio__project-logo"}>
              <img src={magazinex} alt="MagazineX" />
            </div>
            <div className={"ss-portfolio__project-logo"}>
              <img src={magazineblocks} alt="MagazineX" />
            </div>
            <div className={"ss-portfolio__project-logo"}>
              <img src={colormag} alt="ColorMag" />
            </div>
          </div>
          <div className="ss-portfolio__skills">
            <h2 className="ss-portfolio__skills-header">
              Experienced working with <br></br>
              <b>Multiple</b> Programming Languages
            </h2>
            <div className="ss-portfolio__skills-list">
              <span className="ss-portfolio__skill">
                <img src={javascript} alt="JavaScript" />
                <div className={"ss-portfolio__skill-content"}>
                  <h4 className="ss-portfolio__skill-title">JavaScript</h4>
                  <p className="ss-portfolio__skill-description">
                    High-Level, Object-Oriented, Multi-Paradigm programming
                    language.
                  </p>
                </div>
              </span>
              <span className="ss-portfolio__skill">
                <img src={reactjs} alt="ReactJS" />
                <div className={"ss-portfolio__skill-content"}>
                  <h4 className="ss-portfolio__skill-title">React.js</h4>
                  <p className="ss-portfolio__skill-description">
                    A JavaScript library for building user interfaces, enabling
                    the creation of reusable UI components and managing state
                    efficiently.
                  </p>
                </div>
              </span>
              <span className="ss-portfolio__skill">
                <img src={php} alt="PHP" />
                <div className={"ss-portfolio__skill-content"}>
                  <h4 className="ss-portfolio__skill-title">PHP</h4>
                  <p className="ss-portfolio__skill-description">
                    Server-side scripting language, known for its flexibility
                    and integration with databases.
                  </p>
                </div>
              </span>
              <span className="ss-portfolio__skill">
                <img src={css} alt="CSS" />
                <div className={"ss-portfolio__skill-content"}>
                  <h4 className="ss-portfolio__skill-title">CSS</h4>
                  <p className="ss-portfolio__skill-description">
                    Stylesheet language used to describe the presentation of a
                    document written in HTML or XML.
                  </p>
                </div>
              </span>
              <span className="ss-portfolio__skill">
                <img src={sass} alt="Sass" />
                <div className={"ss-portfolio__skill-content"}>
                  <h4 className="ss-portfolio__skill-title">Sass</h4>
                  <p className="ss-portfolio__skill-description">
                    Advanced CSS preprocessor that offers variables, nesting,
                    and mixins to streamline and enhance stylesheet development.
                  </p>
                </div>
              </span>
              <span className="ss-portfolio__skill">
                <img src={wordpress} alt="WordPress" />
                <div className={"ss-portfolio__skill-content"}>
                  <h4 className="ss-portfolio__skill-title">WordPress</h4>
                  <p className="ss-portfolio__skill-description">
                    A flexible, open-source CMS platform for building and
                    managing websites, with extensive themes and plugins to
                    customize functionality and design.
                  </p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
