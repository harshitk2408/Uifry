import React from "react";
import './Footer.css';
export default function FooterCard(props) {
    return (
        <div className="fcc">
            {props.logo && <img src={props.logo} />}
            {props.t1 && <div>
                <div className="fcl">{props.l1}</div>
                {props.t1}
            </div>}
            {props.t2 && <div>
                <div className="fcl">{props.l2}</div>
                {props.t2}
            </div>}
            {props.head && <h3>{props.head}</h3>}
            {props.t3 && <div>{props.t3}</div>}
            {props.t4 && <div>{props.t4}</div>}
            {props.t5 && <div>{props.t5}</div>}
            {props.t6 && <div>{props.t6}</div>}
            {
                props.mail && (
                        <div className="mail-box">
                                <input name="email" placeholder="Your email"/>                                <button>Subscribe</button>
                        </div>
                    )
            }
        </div>
    )
}