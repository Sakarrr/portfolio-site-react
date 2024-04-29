import React from "react";
import magazinex from "../assets/MagazineX.png";
import magazineblocks from "../assets/MagazineBlocks.png";
import reactjs from "../assets/ReactJs.png";
import javascript from "../assets/JavaScript.png";
import php from "../assets/PHP.png";

function displaySection() {
    return (
        <div className="display-section">
            <div className="container">
                <div className="display-content-top">
                    <div className={"logo-container"}>
                        <img src={magazinex} alt="MagazineX"/>
                    </div>
                    <div className={"logo-container"}>
                        <img src={magazineblocks} alt="MagazineX"/>
                    </div>
                </div>
                <div className="display-content-bottom">
                    <h2>Experienced working with <br></br>
                        <b>Multiple</b> Programming Languages
                    </h2>
                    <div className="display-content-bottom-languages">
                        <span>
                            <img src={reactjs} alt="ReactJS"/>
                            <div className={"description"}>
                                <h4>React.js</h4>
                                <p>JavaScript library by Facebook.</p>
                            </div>
                        </span>
                        <span>
                            <img src={javascript} alt="ReactJS"/>
                            <div className={"description"}>
                                <h4>JavaScript</h4>
                                <p>Versatile scripting language used for web development, often associated with client-side interactivity.</p>
                            </div>
                        </span>
                        <span>
                            <img src={php} alt="ReactJS"/>
                            <div className={"description"}>
                                <h4>Php</h4>
                                <p>Server-side scripting language commonly used for web development, known for its flexibility and integration with databases.</p>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default displaySection;