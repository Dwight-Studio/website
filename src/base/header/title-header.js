import '../base.css';
import './title-header.css';
import down from './down.svg';
import ScrollToTop from "../scroll-to-top";
import React from "react";

function TitleHeader(props) {
    return (
        <div className="title-header">
            <ScrollToTop/>
            <video autoPlay muted loop className="title-background-video">
                <source src={props.backgroundVideo} type="video/mp4"/>
            </video>
            <div className="logo-wrapper">
                <img src="https://static.dwightstudio.fr/dwightstudio/LOGO_BANNER_RED.svg" className="logo"
                     alt="TitleHeader logo"/>
            </div>
            <a href="#content">
                <div vertical layout className="animation">
                    <div className="down-logo-wrapper">
                        <img src={down} className="down-logo" alt="Down"/>
                    </div>
                    <div className="down-logo-wrapper">
                        <img src={down} className="down-logo" alt="Down"/>
                    </div>
                    <div className="down-logo-wrapper">
                        <img src={down} className="down-logo" alt="Down"/>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default TitleHeader;
