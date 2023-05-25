import React from "react";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa"
import "./Footer.scss";
import Payment from "../../assets/payments.png"
import { Link } from "react-router-dom";


const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="fotcol">
                <div className="fottitle">About</div>
                <div className="fottext">Welcome to the world of wholesome and nutritious breakfasts! At UNICO FOODS, we believe that the key to a great day starts with a nutritious and delicious breakfast. That's why we're proud to offer a wide variety of millet-based breakfast options that are sure to please even the most discerning palate.</div>
            </div>
            <div className="fotcol">
                <div className="fottitle">Contact</div>
                <div className="c-items">
                    <FaLocationArrow/>
                    <div className="fottext">
                        Sadar, Near Kali Mandir, Jabalpur MP,482001
                    </div>
                </div>
                <div className="c-items">
                    <FaMobileAlt/>
                    <div className="fottext">
                        Phone : 1234567890
                    </div>
                </div>
                <div className="c-items">
                    <FaEnvelope/>
                    <div className="fottext">
                        Email : sample@gmail.com
                    </div>
                </div>
            </div>
            <div className="fotcol">
                <div className="fottitle">Categories</div>
                <span className="fottext"><Link className="link" to="/category/1">Millet Meusli</Link></span>
                <span className="fottext"><Link className="link" to="/category/1">Millet Bars</Link></span>
                <span className="fottext"><Link className="link" to="/category/1">Millet Ladoos</Link></span>
            </div>
            <div className="fotcol">
                <div className="fottitle">Pages</div>
                <span className="fottext"><Link className="link" to="/login">Login</Link></span>
                <span className="fottext"><Link className="link" to="/contact">Contact US</Link></span>
                <span className="fottext"><Link className="link" to="/signup">SignUP</Link></span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="fottext">
                    ©Unico Foods, All Rights Reserved
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>;
};

export default Footer;
