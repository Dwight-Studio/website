import './title-header.css';
import React from "react";
import {FaAngleDown} from "react-icons/fa";

export default function TitleHeader(props) {
    return (
        <div className="title-header">
            <video autoPlay muted loop className="title-background" src={props.background}/>
            <div className="logo-wrapper">
                <img src={props.logo} className="logo"
                     alt="TitleHeader logo"/>
            </div>
            <a href="#header">
                <div className="animation">
                    <div className="down-logo-wrapper">
                        <FaAngleDown />
                    </div>
                    <div className="down-logo-wrapper">
                        <FaAngleDown />
                    </div>
                    <div className="down-logo-wrapper">
                        <FaAngleDown />
                    </div>
                </div>
            </a>
        </div>
    )
}
