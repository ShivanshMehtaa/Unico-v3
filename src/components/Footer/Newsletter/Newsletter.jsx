import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Newsletter.scss";
const Newsletter = () => {
    const Navigate = useNavigate();
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <Link to ="https://www.linkedin.com/company/unico-foods/?viewAsMember=true"className="icon" >
                        <FaLinkedinIn size={14} />
                    </Link>
                    <Link to="https://www.facebook.com/people/UNICO-FOODS/100087934491728/?mibextid=LQQJ4d" className="icon">
                        <FaFacebookF size={14} />
                    </Link>
                    <Link to="https://twitter.com/unico_foods" className="icon">
                        <FaTwitter size={14} />
                    </Link>
                    <Link to="https://www.instagram.com/" className="icon">
                        <FaInstagram size={14} />
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
