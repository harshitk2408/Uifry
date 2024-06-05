import React from "react";
import './Faq.css';
import FaqCard from "./FaqCard";
export default function Faq() {
    return (
        <div className="faq-cont">
            <div className="head">
                <span style={{color:"#FF5555"}}>FAQ</span>
                <h2>Frequently Asked Questions</h2>
            </div>
            <div className="content">
                {
                    Array.from({ length: 6 }).map((_, i) => {
                        if (i == 0 || i == 3 || i == 4) return <FaqCard key={i} bg={1} />
                        else return <FaqCard key={i}/>
                    })
                }
            </div>
        </div>
    )
}