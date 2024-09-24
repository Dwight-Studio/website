import React from "react";
import './tiny-member-card.css'
import Link from 'next/link';
import {Member} from "@/lib/data/member";

export function TinyMemberCard({member, lang}: { member: Member, lang: string }) {
    return (
        <Link href={"/" + lang + member.getMemberURL()} key={member.pseudo}>
            <div className="tiny-member-card">
                <img src={member.logo} alt="Member logo"/>
                <div className="text">
                    <div className="pseudo">{member.pseudo}</div>
                    <div className="realname">{member.firstName + " " + member.lastName}</div>
                </div>
            </div>
        </Link>
    );
}