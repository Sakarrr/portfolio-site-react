import React from "react";
import magazinex from "../assets/MagazineX.png";
import magazineblocks from "../assets/MagazineBlocks.png";
import reactjs from "../assets/ReactJs.png";

function displaySection() {
    return (
        <div className="display-section">
            <div className="container">
                <div className="display-content-top">
                    <div>
                        <img src={magazinex} alt="MagazineX"/>
                    </div>
                    <div>
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
                            <img src={reactjs} alt="ReactJS"/>
                            <div className={"description"}>
                                <h4>React.js</h4>
                                <p>JavaScript library by Facebook.</p>
                            </div>
                        </span>
                        <span>
                            <img src={reactjs} alt="ReactJS"/>
                            <div className={"description"}>
                                <h4>React.js</h4>
                                <p>JavaScript library by Facebook.</p>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default displaySection;