import '../base.css';
import './TitleHeader.css';

function TitleHeader() {
    return (
        <div className="header">
            <div className="nav">
                <a href="/public" className="image">
                    <img src="https://static.dwightstudio.fr/dwightstudio/LOGO_RED.svg" className="header-logo"
                         alt="Logo"/>
                </a>
            </div>

            <div className="social-medias">

            </div>
        </div>
    )
}

export default TitleHeader;