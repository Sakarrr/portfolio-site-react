import React from "react";

let arrow = <svg xmlns="http://www.w3.org/2000/svg"
                 width="40" height="41"
                 viewBox="0 0 40 41" fill="none">
    <path d="M8.33331 20.5H31.6666" stroke="#E6E6E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 8.83331L31.6667 20.5L20 32.1666" stroke="#E6E6E6" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"/>
</svg>

const github = <svg xmlns="http://www.w3.org/2000/svg" width="54" height="55" viewBox="0 0 54 55" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M27.0585 5C14.6633 5 4.617 15.0462 4.617 27.4415C4.617 37.355 11.0453 45.7677 19.9643 48.7377C21.087 48.9402 21.492 48.2495 21.492 47.6555C21.492 47.1222 21.474 45.7092 21.4673 43.8395C15.2235 45.194 13.905 40.829 13.905 40.829C12.888 38.237 11.4143 37.5462 11.4143 37.5462C9.378 36.1535 11.5695 36.185 11.5695 36.185C13.824 36.3425 15.0053 38.498 15.0053 38.498C17.0078 41.927 20.2613 40.937 21.5347 40.3632C21.7395 38.912 22.3245 37.922 22.9635 37.3617C17.982 36.797 12.744 34.871 12.744 26.2692C12.744 23.8235 13.6193 21.8165 15.048 20.2505C14.8208 19.6812 14.0445 17.3975 15.2708 14.3105C15.2708 14.3105 17.154 13.7052 21.4403 16.6077C23.2708 16.1098 25.1591 15.8556 27.0562 15.8517C28.9534 15.8548 30.8418 16.109 32.6722 16.6077C36.9607 13.703 38.8417 14.3105 38.8417 14.3105C40.068 17.3975 39.2985 19.6812 39.0645 20.2505C40.5045 21.8165 41.3685 23.8212 41.3685 26.2692C41.3685 34.8935 36.126 36.788 31.1265 37.3437C31.9252 38.0367 32.6452 39.4047 32.6452 41.4972C32.6452 44.4987 32.6182 46.9197 32.6182 47.6555C32.6182 48.2562 33.0187 48.9537 34.164 48.7332C43.0785 45.7587 49.5 37.3527 49.5 27.4415C49.5 15.0462 39.4537 5 27.0585 5Z"
          fill="#F3F3F3"/>
</svg>

function footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-content">
                    <span className={"footer-head"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle
                            cx="4.85716" cy="4" r="4" fill="#2ADB0D"/></svg>
                        Available for Work
                    </span>
                    <h4>
                        Hire Me ! <br/>
                        Together We'll Bring Idea to Life
                    </h4>
                    <span className={"footer-cta"} id={"footer-cta"}>
                        ctha.sakar@gmail.com
                    </span>
                    <p>Click to copy email ☝️</p>
                    <div className="footer-social">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" target="_blank" rel="noreferrer">
                            <span>
                                <div className={"social-icon"}> {github}  GitHub.com </div>  {arrow}
                            </span>
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" target="_blank" rel="noreferrer">
                            <span>
                                <div className={"social-icon"}> {github} GitHub.com </div>  {arrow}
                            </span>
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" target="_blank" rel="noreferrer">
                            <span>
                                <div className={"social-icon"}> {github} GitHub.com </div>  {arrow}
                            </span>
                        </a>
                    </div>
                </div>
                <div className="footer-line"></div>
                <div className="footer-bottom">
                    <span> SS. </span>
                </div>
            </div>
        </div>
    );
}

export default footer;