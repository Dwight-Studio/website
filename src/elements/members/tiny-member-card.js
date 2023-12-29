import React from "react";
import './tiny-member-card.css'
import {Link} from "react-router-dom";

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