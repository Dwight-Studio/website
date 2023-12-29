import React from "react";
import './large-member-card.css'
import RoundButton from "../buttons/round-button";

export function LargeMemberCard(props) {
    return (
        <div className="large-member-card">
            <div className="card-header" style={{backgroundColor: props.member.accentColor}}>
                <div className="logo-wrapper">
                    <img src={props.member.logo} alt="Member logo"/>
                </div>
                <div className="text">
                    <div className="pseudo">{props.member.pseudo}</div>
                    <div className="realname">{props.member.firstName + " " + props.member.lastName}</div>
                </div>
                <div className="social-medias">
                    {props.member.getSocials()}
                </div>
            </div>
            <div className="card-body">
                <div className="short-description">{props.member.shortDescription.toUpperCase()}</div>
                <div className="long-description">{props.member.longDescription}</div>
                {props.noButton ? <div/> : <RoundButton text={"Learn more"} link={props.member.getMemberURL()}/>}
            </div>
        </div>
    );
}