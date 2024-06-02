import React from "react";
import github from "../assets/GitHub.png";
import linkedin from "../assets/LinkedIn.png";
import resume from "../assets/Resume.png";

function Header() {
  return (
    <>
      <div className="ss-header">
        <div className="ss-header__logo">Sakar Shrestha.</div>
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

            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="ss-header__navbar__link"
            >
              <img src={resume} alt="github" />
            </a>
          </div>
        </div>
      </div>
      <div className="ss-divider"></div>
    </>
  );
}

export default Header;
