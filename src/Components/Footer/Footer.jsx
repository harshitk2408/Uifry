import React from "react";
import './Footer.css';
import fb from '../../assets/footer-banner.svg';
import { FaApple } from "react-icons/fa";
import logo from '../../assets/logo.svg';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import FooterCard from "./FooterCard";
export default function Footer() {
    return (
        <div className="footer-cont">
            <div className="banner">
            <img src={fb} />
             <button>
                <span>Download App</span> <FaApple />
            </button>
            </div>
            <div className="banner-2">
                    <FooterCard logo={logo} t1="Help@Frybix.com" t2="+1234 456 678 89" l1={<IoIosMail />} l2={<FaPhoneAlt />} />
                    <FooterCard head="Links" t3="Home" t4="About Us" t5="Bookings" t6="Blog" />
                    <FooterCard head="Legal" t3="Terms of Use" t4="Privacy Policy" t5="Cookie Policy" />
                    <FooterCard head="Product" t3="Take Tour" t4="Live Chat" t5="Reviews" />
                    <FooterCard head="Newsletter" t3="Stay Up To Date" mail={true}/>
            </div>
            <div className="grad-line">
            </div>
            <div className="copyright">
                Copyright 2022 Uifry.Com All Rights Reserved
            </div>
        </div>
    )
}