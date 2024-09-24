import Link from 'next/link';
import React from "react";
import "./contributor-card.css"
import {Contributor} from "@/lib/data/member";

export default function ContributorCard({contributor, lang}: { contributor: Contributor, lang: string }) {
    return (
        <Link href={"/" + lang + contributor.member.getMemberURL()} className="contributor-card">
            <img src={contributor.member.logo} alt="Member logo"/>
            <div className="text">
                <div className="pseudo">{contributor.member.pseudo}</div>
                <div className="role">{contributor.role}</div>
            </div>
        </Link>
    )
}