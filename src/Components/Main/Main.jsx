import React from "react";
import './Main.css';
import bg from '../../assets/bg1.png';
import bg2 from '../../assets/bg2.svg';
import { FaArrowRight } from "react-icons/fa6";
import { CgPlayButtonO } from "react-icons/cg";
import frame from '../../assets/Frame1.svg';
export default function Main() {
    return (
        <div className="main-cont">
            <div className="main-content">
                <div className="text">
                    <h1>Make The Best Financial Decisions</h1>
                        <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        <div className="buttons">
                            <button>
                                Get Started
                                <FaArrowRight/>
                            </button>
                            <div>
                               <CgPlayButtonO />
                               Watch Video
                            </div>
                        </div>
                </div>
                <img src={bg2} className="banner"/>
            </div>
            <img src={frame} className="frame"/>
        </div>
    )
}