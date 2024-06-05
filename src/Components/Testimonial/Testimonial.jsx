import React from "react";
import './Testimonial.css';
import test from '../../assets/test.png';
import people from '../../assets/people.png';
export default function Testimonial() {
    return (
        <div className="test-cont">
            <div className="head">
                TESTIMONIAL
                <h2>What Our Users Say About Us?</h2>
            </div>
            <div className="testContent">
                <img src={test} />
                <div className="text-cont">
                    <h3>The Best Financial Accounting App Ever!</h3>
                    <p style={{color:"grey"}}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
                    <img src={people}/>
                    <h4>Nick Jonas</h4>
                </div>
            </div>
        </div>
    )
}