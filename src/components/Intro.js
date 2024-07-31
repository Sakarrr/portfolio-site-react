import React from "react";
import cv from "../assets/Sakar_Shrestha_CV_2024.pdf";

const IntroSection = () => {
  return (
    <div className="ss-intro">
      <div className="ss-container">
        <div className="ss-row">
          <h1 className="ss-intro__title">
            Hello, I am Sakar Shrestha. <span>👋</span>
          </h1>
          <p className="ss-intro__description">
            Motivated{" "}
            <b>
              <i> Frontend/WordPress Developer </i>
            </b>{" "}
            and{" "}
            <b>
              <i>JavaScript Engineer</i>
            </b>
            . <br></br>
            Working with my hands to make magic happen on the internet.
          </p>
          <p className={"ss-intro__tagline"}>
            Currently pursuing knowledge and embracing new challenges.
          </p>
          <span className="ss-intro__download-cv">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href={cv} download="Sakar_Shrestha_CV_2024.pdf">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="22"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M15 2.5H6C5.46957 2.5 4.96086 2.71071 4.58579 3.08579C4.21071 3.46086 4 3.96957 4 4.5V20.5C4 21.0304 4.21071 21.5391 4.58579 21.9142C4.96086 22.2893 5.46957 22.5 6 22.5H18C18.5304 22.5 19.0391 22.2893 19.4142 21.9142C19.7893 21.5391 20 21.0304 20 20.5V7.5L15 2.5Z"
                  stroke="#053969"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 2.5V6.5C14 7.03043 14.2107 7.53914 14.5858 7.91421C14.9609 8.28929 15.4696 8.5 16 8.5H20"
                  stroke="#053969"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 18.5V12.5"
                  stroke="#053969"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 15.5L12 18.5L15 15.5"
                  stroke="#053969"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Download CV
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
