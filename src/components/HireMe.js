import React, { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blinkAnimation from "../assets/blinkEffect.gif";

let arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="41"
    viewBox="0 0 40 41"
    fill="none"
  >
    <path
      d="M8.33331 20.5H31.6666"
      stroke="#E6E6E6"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 8.83331L31.6667 20.5L20 32.1666"
      stroke="#E6E6E6"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const github = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="55"
    viewBox="0 0 54 55"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M27.0585 5C14.6633 5 4.617 15.0462 4.617 27.4415C4.617 37.355 11.0453 45.7677 19.9643 48.7377C21.087 48.9402 21.492 48.2495 21.492 47.6555C21.492 47.1222 21.474 45.7092 21.4673 43.8395C15.2235 45.194 13.905 40.829 13.905 40.829C12.888 38.237 11.4143 37.5462 11.4143 37.5462C9.378 36.1535 11.5695 36.185 11.5695 36.185C13.824 36.3425 15.0053 38.498 15.0053 38.498C17.0078 41.927 20.2613 40.937 21.5347 40.3632C21.7395 38.912 22.3245 37.922 22.9635 37.3617C17.982 36.797 12.744 34.871 12.744 26.2692C12.744 23.8235 13.6193 21.8165 15.048 20.2505C14.8208 19.6812 14.0445 17.3975 15.2708 14.3105C15.2708 14.3105 17.154 13.7052 21.4403 16.6077C23.2708 16.1098 25.1591 15.8556 27.0562 15.8517C28.9534 15.8548 30.8418 16.109 32.6722 16.6077C36.9607 13.703 38.8417 14.3105 38.8417 14.3105C40.068 17.3975 39.2985 19.6812 39.0645 20.2505C40.5045 21.8165 41.3685 23.8212 41.3685 26.2692C41.3685 34.8935 36.126 36.788 31.1265 37.3437C31.9252 38.0367 32.6452 39.4047 32.6452 41.4972C32.6452 44.4987 32.6182 46.9197 32.6182 47.6555C32.6182 48.2562 33.0187 48.9537 34.164 48.7332C43.0785 45.7587 49.5 37.3527 49.5 27.4415C49.5 15.0462 39.4537 5 27.0585 5Z"
      fill="#F3F3F3"
    />
  </svg>
);

const linkedin = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="55"
    viewBox="0 0 54 55"
    fill="none"
  >
    <path
      d="M45 7.25H9C8.40326 7.25 7.83097 7.48705 7.40901 7.90901C6.98705 8.33097 6.75 8.90326 6.75 9.5V45.5C6.75 46.0967 6.98705 46.669 7.40901 47.091C7.83097 47.5129 8.40326 47.75 9 47.75H45C45.5967 47.75 46.169 47.5129 46.591 47.091C47.0129 46.669 47.25 46.0967 47.25 45.5V9.5C47.25 8.90326 47.0129 8.33097 46.591 7.90901C46.169 7.48705 45.5967 7.25 45 7.25ZM18.7627 41.7583H12.7507V22.4307H18.7627V41.7583ZM15.7567 19.7915C14.833 19.7915 13.9471 19.4245 13.2939 18.7714C12.6407 18.1182 12.2737 17.2322 12.2737 16.3085C12.2737 15.3848 12.6407 14.4988 13.2939 13.8456C13.9471 13.1925 14.833 12.8255 15.7567 12.8255C16.6805 12.8255 17.5664 13.1925 18.2196 13.8456C18.8728 14.4988 19.2397 15.3848 19.2397 16.3085C19.2397 17.2322 18.8728 18.1182 18.2196 18.7714C17.5664 19.4245 16.6805 19.7915 15.7567 19.7915ZM41.2605 41.7583H35.2552V32.36C35.2552 30.119 35.2148 27.2368 32.1322 27.2368C29.0048 27.2368 28.53 29.6803 28.53 32.2025V41.7605H22.5292V22.433H28.2892V25.0745H28.3725C29.1712 23.5557 31.1332 21.9537 34.0515 21.9537C40.1355 21.9537 41.2583 25.9543 41.2583 31.1607L41.2605 41.7583Z"
      fill="#F3F3F3"
    />
  </svg>
);

const twitter = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="55"
    viewBox="0 0 54 55"
    fill="none"
  >
    <path
      d="M44.1742 18.4932C44.2035 18.887 44.2035 19.2785 44.2035 19.67C44.2035 31.6512 35.0842 45.4572 18.4185 45.4572C13.284 45.4572 8.514 43.97 4.5 41.387C5.229 41.4702 5.931 41.4995 6.68925 41.4995C10.7685 41.5093 14.7322 40.1453 17.9415 37.6272C16.0502 37.593 14.2168 36.969 12.6973 35.8424C11.1778 34.7158 10.048 33.1427 9.46575 31.343C10.026 31.4262 10.5885 31.4825 11.178 31.4825C11.9902 31.4825 12.807 31.37 13.5652 31.1742C11.5127 30.7598 9.66707 29.6473 8.34214 28.0258C7.01722 26.4043 6.29481 24.3739 6.29775 22.28V22.1675C7.506 22.8402 8.90775 23.261 10.3927 23.3172C9.1487 22.4905 8.12862 21.3688 7.42351 20.052C6.71841 18.7352 6.3502 17.2644 6.35175 15.7707C6.35175 14.0877 6.7995 12.5442 7.58475 11.1987C9.86206 14 12.7024 16.2917 15.9218 17.9255C19.1411 19.5592 22.6678 20.4985 26.2733 20.6825C26.1338 20.0075 26.0482 19.3077 26.0482 18.6057C26.0477 17.4154 26.2817 16.2366 26.7369 15.1368C27.1922 14.0369 27.8597 13.0376 28.7014 12.1959C29.5431 11.3542 30.5424 10.6867 31.6423 10.2314C32.7421 9.77615 33.9209 9.54213 35.1112 9.54273C37.7212 9.54273 40.077 10.6362 41.733 12.4047C43.762 12.0124 45.7077 11.2717 47.484 10.2155C46.8077 12.3098 45.391 14.0857 43.4993 15.2105C45.2988 15.0052 47.0575 14.532 48.717 13.8065C47.4775 15.6134 45.9417 17.198 44.1742 18.4932Z"
      fill="#F3F3F3"
    />
  </svg>
);

const HireMe = () => {
  const emailRef = useRef(null);

  const handleCopyClick = () => {
    if (emailRef.current) {
      const emailText = emailRef.current.innerText;
      navigator.clipboard.writeText(emailText).then(() => {
        toast.success("Email copied to clipboard!", {
          position: "bottom-center",
          autoClose: 1000,
        });
      });
    } else {
      toast.error("Error: Email element not found.", {
        position: "bottom-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="ss-hire-me">
      <div className="ss-container">
        <div className="ss-row">
          <span className={"ss-hire-me__work-status"}>
            <img src={blinkAnimation} alt="Work Status" />
            Available for Work
          </span>
          <h4 className="ss-hire-me__header">
            Hire Me ! <br />
            Together We'll Bring Idea to Life
          </h4>
          <span
            ref={emailRef}
            className={"ss-hire-me__cta"}
            id={"ss-hire-me__cta"}
            onClick={handleCopyClick}
          >
            ctha.sakar@gmail.com
          </span>
          <p className="ss-hire-me__cta-description">Click to copy email ☝️</p>
          <div className="ss-hire-me__social-links">
            <a
              href="https://github.com/sakarrr"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ss-hire-me__social-link">
                <div className={"social-icon"}> {github} GitHub.com </div>
                {arrow}
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/sakarshrestha97/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ss-hire-me__social-link">
                <div className={"social-icon"}> {linkedin} LinkedIn.com </div>{" "}
                {arrow}
              </span>
            </a>
            <a
              href="https://twitter.com/sakarrstha"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ss-hire-me__social-link">
                <div className={"social-icon"}> {twitter} Twitter.com </div>{" "}
                {arrow}
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="ss-divider"></div>
    </div>
  );
};

export default HireMe;
