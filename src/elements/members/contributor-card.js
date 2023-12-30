import {Link} from "react-router-dom";
import React from "react";
import "./contributor-card.css"

export default function ContributorCard(props) {
    return (
        <Link to={props.contributor.member.getMemberURL()} className="contributor-card">
            <img src={props.contributor.member.logo} alt="Member logo"/>
            <div className="text">
                <div className="pseudo">{props.contributor.member.pseudo}</div>
                <div className="role">{props.contributor.role}</div>
            </div>
        </Link>
    )
}