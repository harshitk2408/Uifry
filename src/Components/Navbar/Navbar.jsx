import React from "react";
import './Navbar.css';
import logo from '../../assets/logo.svg';
export default function Navbar() {
    return (
        <div className="nav-cont">
            <div className="nav-links">
                <img src={logo} className="logo"/>
                <div className="nav-items">
                    <span style={{ fontWeight: "bold",color:"#FF5555"}}>Home</span>
                    <span>About Us</span>
                    <span>Pricing</span>
                    <span>Features</span>
                </div>
            </div>
            <button className="down-butt">
                Download
            </button>
        </div>
    )
}