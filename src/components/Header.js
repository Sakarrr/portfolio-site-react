import React from "react";
import { Link } from "react-router-dom";
import resume from "../assets/Resume.png";

const Header = () => {
  return (
    <>
      <div className="ss-header">
        <div className="ss-container">
          <div className="ss-row">
            <Link to="/" className="ss-header__logo-link">
              <div className="ss-header__logo">SS.</div>
            </Link>
            <div className="ss-header__navbar">
              <div className="ss-header__navbar__links">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="/">Projects</a>
                <a href="/">Contact</a>
                <Link to="/pdf-viewer" className="ss-header__navbar__link">
                  <img src={resume} alt="Resume" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
