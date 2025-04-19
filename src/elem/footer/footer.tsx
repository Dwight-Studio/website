import React from "react";
import './footer.css'
import {Link} from "@/i18n/navigation";
import {getMembers} from "@/data/member";
import {getProjects} from "@/data/project";

export default async function Footer() {

    return (<div className="footer">
            <div className="columns">
                <div className="section">
                    <div className="title">PAGES</div>
                    <Link href="/">Home</Link>
                    <Link href={"/projects"}>Projects</Link>
                    <Link href={"/members"}>Members</Link>
                    <Link href={"/about-us"}>About us</Link>
                </div>
                <div className="section">
                    <div className="title">
                        <Link href={"/members"}>MEMBERS</Link>
                    </div>
                    {await getMembers().then(members => members.map(member => <Link href={member.getMemberURL()}
                                                                                      key={member.id}>{member.displayName}</Link>))}
                </div>
                <div className="section">
                    <div className="title">
                        <Link href={"/projects"}>PROJECTS</Link>
                    </div>
                    {await getProjects().then(
                        projects => projects.map(project => <Link href={project.getProjectURL()}
                                                                  key={project.id}>{project.displayName}</Link>))}
                </div>
            </div>
            <div className="bottom">
                <div className="text">
                    © 2023-{new Date().getFullYear()} Dwight Studio - <Link href={"/legal"}>Legal
                    information</Link>
                </div>
            </div>
        </div>)
}