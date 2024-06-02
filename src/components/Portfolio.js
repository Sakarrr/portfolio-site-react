import React from "react";
import magazinex from "../assets/MagazineX.png";
import magazineblocks from "../assets/MagazineBlocks.png";
import reactjs from "../assets/ReactJs.png";
import javascript from "../assets/JavaScript.png";
import php from "../assets/PHP.png";

function Portfolio() {
  return (
    <div className="ss-portfolio">
      <div className="ss-portfolio__projects">
        <div className={"ss-portfolio__project-logo"}>
          <img src={magazinex} alt="MagazineX" />
        </div>
        <div className={"ss-portfolio__project-logo"}>
          <img src={magazineblocks} alt="MagazineX" />
        </div>
        <div className={"ss-portfolio__project-logo"}>
          <h1>ColorMag</h1>
        </div>
      </div>
      <div className="ss-portfolio__skills">
        <h2 className="ss-portfolio__skills-header">
          Experienced working with <br></br>
          <b>Multiple</b> Programming Languages
        </h2>
        <div className="ss-portfolio__skills-list">
          <span className="ss-portfolio__skill">
            <img src={reactjs} alt="ReactJS" />
            <div className={"ss-portfolio__skill-content"}>
              <h4 className="ss-portfolio__skill-title">React.js</h4>
              <p className="ss-portfolio__skill-description">
                JavaScript library by Facebook.
              </p>
            </div>
          </span>
          <span className="ss-portfolio__skill">
            <img src={javascript} alt="ReactJS" />
            <div className={"ss-portfolio__skill-content"}>
              <h4 className="ss-portfolio__skill-title">JavaScript</h4>
              <p className="ss-portfolio__skill-description">
                High-Level, Object-Oriented, Multi-Paradigm programming
                language.
              </p>
            </div>
          </span>
          <span className="ss-portfolio__skill">
            <img src={php} alt="ReactJS" />
            <div className={"ss-portfolio__skill-content"}>
              <h4 className="ss-portfolio__skill-title">Php</h4>
              <p className="ss-portfolio__skill-description">
                Server-side scripting language, known for its flexibility and
                integration with databases.
              </p>
            </div>
          </span>
          <span className="ss-portfolio__skill">
            <img src={reactjs} alt="ReactJS" />
            <div className={"ss-portfolio__skill-content"}>
              <h4 className="ss-portfolio__skill-title">React.js</h4>
              <p className="ss-portfolio__skill-description">
                JavaScript library by Facebook.
              </p>
            </div>
          </span>
          <span className="ss-portfolio__skill">
            <img src={reactjs} alt="ReactJS" />
            <div className={"ss-portfolio__skill-content"}>
              <h4 className="ss-portfolio__skill-title">React.js</h4>
              <p className="ss-portfolio__skill-description">
                JavaScript library by Facebook.
              </p>
            </div>
          </span>
          <span className="ss-portfolio__skill">
            <img src={reactjs} alt="ReactJS" />
            <div className={"ss-portfolio__skill-content"}>
              <h4 className="ss-portfolio__skill-title">React.js</h4>
              <p className="ss-portfolio__skill-description">
                JavaScript library by Facebook.
              </p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
