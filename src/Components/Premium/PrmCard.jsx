import React from "react";
import './Premium.css';
import prm from '../../assets/prm1.png';
export default function PrmCard(props) {
    return (
        <div className="PrmCard">
            <div className="head">
                <img src={props.logo} />
                {props.head}
            </div>
            {props.desc}
        </div>
    )
} 