import React from "react";
import './Faq.css';
export default function FaqCard(props) {
    return (
        <div className={`faq-card${props.bg == 1 ? ' card-bg' : ''}`}>
            <h3>The Best Financial Accounting App Ever!</h3>
            <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
    )
}