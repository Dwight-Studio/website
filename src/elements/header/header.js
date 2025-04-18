import './header.css';
import {Link} from "react-router-dom";
import React from "react";
import ScrollToTop from "../scroll-to-top";
import {FaDiscord, FaGithub, FaYoutube} from "react-icons/fa";

export default function Header(props) {
    const hamburgerRef = React.useRef();
    const menuRef = React.useRef();

    function toggleHamburger() {
        menuRef.current.classList.toggle("open");
        hamburgerRef.current.classList.toggle("open");
    }

    return (
        <div id="header" className="header">
            <ScrollToTop/>
            <div className="mobile">
                <div id="hamburger" ref={hamburgerRef} onClick={() => toggleHamburger()}>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
            <div className="menu" ref={menuRef}>
                <div className="nav">
                    <Link to="/" className="logo-wrapper">
                        <img src="https://static.dwightstudio.fr/dwightstudio/LOGO_BANNER_RED.svg"
                             className="logo"
                             alt="Logo"/>
                    </Link>
                    <Link to="/" className={props.selected === "home" ? "link-selected" : "link-unselected"}>
                        <div>HOME</div>
                    </Link>
                    <Link to="/projects"
                          className={props.selected === "projects" ? "link-selected" : "link-unselected"}>
                        <div>PROJECTS</div>
                    </Link>
                    <Link to="/members" className={props.selected === "members" ? "link-selected" : "link-unselected"}>
                        <div>MEMBERS</div>
                    </Link>
                    <Link to="/about-us"
                          className={props.selected === "about-us" ? "link-selected" : "link-unselected"}>
                        <div>ABOUT US</div>
                    </Link>
                </div>
                <div className="social-medias">
                    <a href="https://www.youtube.com/@dwightstudio">
                        <FaYoutube/>
                    </a>
                    <a href="https://discord.gg/Eqake7q">
                        <FaDiscord/>
                    </a>
                    <a href="https://github.com/Dwight-Studio">
                        <FaGithub/>
                    </a>
                </div>
            </div>
        </div>
    )
}