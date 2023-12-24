import '../base.css';
import './header.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="nav">
                <Link to="/" className="header-logo-wrapper">
                    <img src="https://static.dwightstudio.fr/dwightstudio/LOGO_BANNER_RED.svg" className="header-logo"
                         alt="Logo"/>
                </Link>
                <Link to="/" className="header-selected">
                    <div>HOME</div>
                </Link>
                <Link to="/Projects">
                    <div>PROJECTS</div>
                </Link>
                <Link to="/members">
                    <div>MEMBERS</div>
                </Link>
                <Link to="/about-us">
                    <div>ABOUT US</div>
                </Link>
            </div>
            <div className="social-medias">
            </div>
        </div>
    )
}

export default Header;