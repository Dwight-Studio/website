import './title-header.css';
import down from '../../medias/down.svg';
import React from "react";

export default function TitleHeader(props) {
    return (
        <div className="title-header">
            <video autoPlay muted loop className="title-background" src={props.background}/>
            <div className="logo-wrapper">
                <img src={props.logo} className="logo"
                     alt="TitleHeader logo"/>
            </div>
            <a href="#header">
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
