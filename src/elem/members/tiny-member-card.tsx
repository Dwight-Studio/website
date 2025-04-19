import React from "react";
import './tiny-member-card.css'
import {Link} from "@/i18n/navigation";
import {Member} from "@/data/member";

export function TinyMemberCard({member}: { member: Member }) {
    return (
        <Link href={member.getMemberURL()} key={member.id}>
            <div className="tiny-member-card">
                <img src={member.logo} alt="Member logo"/>
                <div className="text">
                    <div className="pseudo">{member.displayName}</div>
                    <div className="realname">{member.firstName + " " + member.lastName}</div>
                </div>
            </div>
        </Link>
    );
}