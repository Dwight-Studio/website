import {Link} from "@/i18n/navigation";
import React from "react";
import "./contributor-card.css"
import {Member} from "@/data/member";
import {Project} from "@/data/project";
import {useTranslations} from "next-intl";

export default function ContributorCard({project, member}: { project: Project, member: Member }) {
    let t = useTranslations(member.getContributionTKey())

    return (
        <Link href={"/" + member.getMemberURL()} className="contributor-card" style={{"--member-color": member.accentColor} as React.CSSProperties}>
            <img src={member.logo} alt="Member logo"/>
            <div className="text">
                <div className="pseudo">{member.displayName}</div>
                <div className="role">{t(project.id)}</div>
            </div>
        </Link>
    )
}