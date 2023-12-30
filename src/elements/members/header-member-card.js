import React from "react";
import './header-member-card.css'
import {LargeMemberCard} from "./large-member-card";

export function HeaderMemberCard(props) {
    return (
        <div className="header-member-card">
            <LargeMemberCard member={props.member} noButton/>
            {props.member.getProjectsCarousel()}
        </div>
    );
}