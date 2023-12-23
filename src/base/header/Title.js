import '../base.css';
import './Title.css';
import down from './down.svg';

function Title() {
    return (
        <div className="title-wrapper">
            <video autoPlay muted loop className="title-background-video">
                <source src="/media/index.mp4" type="video/mp4"/>
            </video>
            <div className="title-logo-wrapper">
                <img src="https://static.dwightstudio.fr/dwightstudio/LOGO_BANNER_RED.svg" className="title-logo"
                     alt="Title logo"/>
            </div>
            <a href="#content">
                <div vertical layout className="title-animation-wrapper">
                    <div className="title-down-logo-wrapper">
                        <img src={down} className="title-down-logo" alt="Down"/>
                    </div>
                    <div className="title-down-logo-wrapper">
                        <img src={down} className="title-down-logo" alt="Down"/>
                    </div>
                    <div className="title-down-logo-wrapper">
                        <img src={down} className="title-down-logo" alt="Down"/>
                    </div>
                </div>
            </a>
        </div>
    )
        ;
}

export default Title;
