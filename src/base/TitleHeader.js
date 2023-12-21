import './TitleHeader.css';
import mouse from './mouse.svg';
import down from './down.svg';

function TitleHeader() {
    return (
        <div className="TitleHeader">
            <header className="TitleHeader-header">
                <img src="https://static.dwightstudio.fr/dwightstudio/LOGO_RED.svg" className="TitleLogo" alt="Logo" />
            </header>
            <footer className="TitleHeader-footer">
                <div vertical layout>
                    <div>
                        <img src={mouse} className="MouseLogo" alt="Mouse"/>
                    </div>
                    <div>
                        <img src={down} className="DownLogo" alt="Down"/>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default TitleHeader;
