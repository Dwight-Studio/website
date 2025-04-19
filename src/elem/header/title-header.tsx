import './title-header.css';
import React from "react";
import {FaAngleDown} from "react-icons/fa";

export default function TitleHeader({logo, background}: { logo: string, background?: string }) {
    return (
        <div className="title-header">
            <video autoPlay muted loop className="title-background" src={background}/>
            <div className="logo-wrapper">
                <img src={logo} className="logo" alt="TitleHeader logo"/>
            </div>
            <a href="#header">
                <div className="animation">
                    <div className="down-logo-wrapper">
                        <FaAngleDown/>
                    </div>
                    <div className="down-logo-wrapper">
                        <FaAngleDown/>
                    </div>
                    <div className="down-logo-wrapper">
                        <FaAngleDown/>
                    </div>
                </div>
            </a>
        </div>
    )
}
