import React from "react";
import './member-card.css'
import {Link} from "react-router-dom";
import RoundButton from "../buttons/round-button";

export function TinyMemberCard(props) {
    return (
        <Link to={props.member.getMemberURL()} className="tiny-member-card">
            <img src={props.member.logoURL} alt="Member logo"/>
            <div className="text">
                <div className="pseudo">{props.member.pseudo}</div>
                <div className="realname">{props.member.firstName + " " + props.member.lastName}</div>
            </div>
        </Link>
    );
}

export function LargeMemberCard(props) {
    return (
        <div className="large-member-card">
            <img src={props.member.logoURL} alt="Member logo"/>
            <div className="text">
                <div className="pseudo">{props.member.pseudo}</div>
                <div className="realname">{props.member.firstName + " " + props.member.lastName}</div>
                <div className="short-description">{props.member.shortDescription}</div>
                <div className="long-description">{props.member.longDescription}</div>
            </div>
            <center className="button-wrapper">
                <RoundButton text={"See personal page"} link={props.member.getMemberURL()}/>
            </center>
        </div>
    );
}