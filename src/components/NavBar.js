import React from 'react';
import github from '../assets/GitHub.png';
import linkedin from '../assets/LinkedIn.png';
import resume from '../assets/Resume.png';

function NavBar() {
    return (
        <>
            <div className="ss__header--navbar">
                <div className="ss_header--navbar container">
                    <div className="ss_header--navbar branding">Sakar Shrestha.</div>
                    <div className="ss_header--navbar links">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="https://github.com/Sakarrr" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>

                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="https://www.linkedin.com/in/sakarshrestha97/" target="_blank" rel="noreferrer"><img src={linkedin} alt="github" /></a>

                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" target="_blank" rel="noreferrer"><img src={resume} alt="github" /></a>
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </>
    );
}

export default NavBar;