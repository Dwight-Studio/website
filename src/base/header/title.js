import '../base.css';
import './title.css';
import down from './down.svg';
import ScrollToTop from "../ScrollToTop";
import React from "react";

function Title({backgroundVideo}) {
    return (
        <div className="title-wrapper">
            <ScrollToTop/>
            <video autoPlay muted loop className="title-background-video">
                <source src={backgroundVideo} type="video/mp4"/>
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
}

export default Title;
