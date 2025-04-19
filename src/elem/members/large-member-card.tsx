import React from "react";
import './large-member-card.css'
import RoundButton from "@/elem/buttons/round-button";
import {Member} from "@/data/member";
import {useTranslations} from "next-intl";

export function LargeMemberCard({member, noButton}: { member: Member, noButton?: boolean }) {
    const t = useTranslations(member.getTKey())

    return (
        <div className="large-member-card" key={member.id}>
            <div className="card-header" style={{backgroundColor: member.accentColor}}>
                <div className="logo-wrapper">
                    <img src={member.logo} alt="Member logo"/>
                </div>
                <div className="text">
                    <div className="display-name">{member.displayName}</div>
                    <div className="realname">{member.firstName + " " + member.lastName}</div>
                </div>
                <div className="social-medias">
                    {member.getSocials()}
                </div>
            </div>
            <div className="card-body">
                <div className="short-description">{t("short_description").toUpperCase()}</div>
                <div className="long-description">{t("long_description")}</div>
                {noButton ? <div/> :
                    <RoundButton text={"Learn more"} focused={true} link={"/" + member.getMemberURL()}/>}
            </div>
        </div>
    );
}