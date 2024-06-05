import React from "react";
import './Premium.css';
import prm from '../../assets/prm.svg';
import details from "./details";
import PrmCard from "./PrmCard";
export default function Premium() {
    return (
        <div className="prm-cont">
            <img src={prm} className="prm"/>
            <div className="features">
                <h3 style={{color:"#FF5555"}}>FEATURES</h3>
                <h2>Uifry Premium</h2>
                <div className="ft-cards">
                {
                    details.map((detail) => {
                        return <PrmCard logo={detail.logo} head={detail.head} desc={detail.desc} />
                    })
                }
                </div>
            </div>
        </div>
    )
}