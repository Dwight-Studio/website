import '../base.css';
import './header.css';
import {Link} from "react-router-dom";
import {useState} from "react";

function Header({selected}) {
    const [show, setShow] = useState(false)

    function handleShow() {
        setShow(!show)
    }

    return (
        <div className="header">
            <div className="nav">
                <Link to="/" className="header-logo-wrapper">
                    <img src="https://static.dwightstudio.fr/dwightstudio/LOGO_BANNER_RED.svg" className="header-logo"
                         alt="Logo"/>
                </Link>
                <Link to="/" className={selected === "home" ? "header-selected" : "header-unselected"}>
                    <div>HOME</div>
                </Link>
                <Link to="/projects" className={selected === "projects" ? "header-selected" : "header-unselected"}>
                    <div>PROJECTS</div>
                </Link>
                <Link to="/members" className={selected === "members" ? "header-selected" : "header-unselected"}>
                    <div>MEMBERS</div>
                </Link>
                <Link to="/about-us" className={selected === "about-us" ? "header-selected" : "header-unselected"}>
                    <div>ABOUT US</div>
                </Link>
            </div>
            <div className="social-medias">
            </div>
        </div>
    )
}

export default Header;