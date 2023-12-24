import React from "react";
import './footer.css'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-columns-wrapper">
                <div className="footer-section-wrapper">
                    <div className="footer-section-title">PAGES</div>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/members">Members</Link>
                    <Link to="/about-us">About us</Link>
                </div>
                <div className="footer-section-wrapper">
                    <div className="footer-section-title">MEMBERS</div>
                    <Link to="/">GamerMine</Link>
                    <Link to="/">Deleranax</Link>
                    <Link to="/">Yinx</Link>
                </div>
            </div>
            <div className="footer-bottom-wrapper">
                <div className="footer-bottom-text">
                    © 2023 Dwight Studio (Maxime SAVARY, Kevin TOLLEMER & Alexandre LECONTE)
                </div>
            </div>
        </div>
    )
}

export default Footer;