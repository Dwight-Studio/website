import '../base.css';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="nav">
                <a href="/" className="header-logo-wrapper">
                    <img src="https://static.dwightstudio.fr/dwightstudio/LOGO_BANNER_RED.svg" className="header-logo"
                         alt="Logo"/>
                </a>
                <a href="/" className="header-selected">
                    <div>HOME</div>
                </a>
                <a href="/projects">
                    <div>PROJECTS</div>
                </a>
                <a href="/members">
                    <div>MEMBERS</div>
                </a>
                <a href="/about-us">
                    <div>ABOUT US</div>
                </a>
            </div>
            <div className="social-medias">
            </div>
        </div>
    )
}

export default Header;