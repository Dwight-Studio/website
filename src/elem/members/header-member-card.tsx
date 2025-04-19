import React from "react";
import './header-member-card.css'
import {LargeMemberCard} from "./large-member-card";
import {Member} from "@/data/member";

export function HeaderMemberCard({member}: { member: Member }) {
    return (
        <div className="header-member-card" key={member.id}>
            <LargeMemberCard member={member} noButton/>
            {member.getProjectsCarousel()}
        </div>
    );
}