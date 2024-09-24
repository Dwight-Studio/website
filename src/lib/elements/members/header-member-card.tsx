import React from "react";
import './header-member-card.css'
import {LargeMemberCard} from "./large-member-card";
import {Member} from "@/lib/data/member";

export function HeaderMemberCard({member, lang}: { member: Member, lang: string }) {
    return (
        <div className="header-member-card" key={member.pseudo}>
            <LargeMemberCard member={member} noButton lang={lang}/>
            {member.getProjectsCarousel()}
        </div>
    );
}