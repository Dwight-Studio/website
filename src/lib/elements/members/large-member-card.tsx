import React from "react";
import './large-member-card.css'
import RoundButton from "@/lib/elements/buttons/round-button";
import {Member} from "@/lib/data/member";

export function LargeMemberCard({member, noButton} : {member: Member, noButton?: boolean}) {
    return (
        <div className="large-member-card">
            <div className="card-header" style={{backgroundColor: member.accentColor}}>
                <div className="logo-wrapper">
                    <img src={member.logo} alt="Member logo"/>
                </div>
                <div className="text">
                    <div className="pseudo">{member.pseudo}</div>
                    <div className="realname">{member.firstName + " " + member.lastName}</div>
                </div>
                <div className="social-medias">
                    {member.getSocials()}
                </div>
            </div>
            <div className="card-body">
                <div className="short-description">{member.shortDescription.toUpperCase()}</div>
                <div className="long-description">{member.longDescription}</div>
                {noButton ? <div/> : <RoundButton text={"Learn more"} link={member.getMemberURL()}/>}
            </div>
        </div>
    );
}