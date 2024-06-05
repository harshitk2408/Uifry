import React from "react";
import "./Adv.css";
export default function AdvCard(props) {
    const img_elem = document.querySelector("adv-card");

  return (
    <div className={`adv-card ${props.direction=="left"?"reverse":""}`}>
      <img src={props.image} className="phone-img"/>
      <div className="advContent">
        <h4 style={{color:"#FF5555"}}>{props.mainHead}</h4>
        <h2 style={{ fontSize: "2.8em",fontWeight:"800"}}>{props.head}</h2>
        <div className="adv">
          <div className="head">
            <img src={props.logo} style={{width:"1.8em"}}/>
            {props.advHead}
          </div>
          <div className="adv-desc">{props.desc}</div>
        </div>
      </div>
    </div>
  );
}
