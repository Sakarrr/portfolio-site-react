import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/GitHub.png";
import linkedin from "../assets/LinkedIn.png";
import resume from "../assets/Resume.png";

const Header = () => {
  return (
    <>
      <div className="ss-header">
        <div className="ss-container">
          <div className="ss-row">
            <Link to="/" className="ss-header__logo-link">
              <div className="ss-header__logo">Sakar Shrestha.</div>
            </Link>
            <div className="ss-header__navbar">
              <div className="ss-header__navbar__links">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href="https://github.com/Sakarrr"
                  target="_blank"
                  rel="noreferrer"
                  className="ss-header__navbar__link"
                >
                  <img src={github} alt="github" />
                </a>

                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href="https://www.linkedin.com/in/sakarshrestha97/"
                  target="_blank"
                  rel="noreferrer"
                  className="ss-header__navbar__link"
                >
                  <img src={linkedin} alt="github" />
                </a>

                <Link to="/pdf-viewer" className="ss-header__navbar__link">
                  <img src={resume} alt="Resume" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ss-divider"></div>
    </>
  );
};

export default Header;
