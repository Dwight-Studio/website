'use client'

import React from "react";
import './footer.css'
import Link from 'next/link';
import {getAllMembers} from "../../data/member";
import {getAllProjects} from "../../data/project";
import {useParams} from "next/navigation";

export default function Footer() {

    const {lang}: {lang: string} = useParams();

    return (
        <div className="footer">
            <div className="columns">
                <div className="section">
                    <div className="title">PAGES</div>
                    <Link href={lang}>Home</Link>
                    <Link href={"/" + lang + "/projects"}>Projects</Link>
                    <Link href={lang+ "/members"}>Members</Link>
                    <Link href={"/" + lang + "/about-us"}>About us</Link>
                </div>
                <div className="section">
                    <div className="title">MEMBERS</div>
                    {getAllMembers().map(member => <Link href={"/" + lang + member.getMemberURL()} key={member.pseudo}>{member.pseudo}</Link>)}
                </div>
                <div className="section">
                    <div className="title">PROJECTS</div>
                    {getAllProjects().map(project => <Link href={"/" + lang + project.getProjectURL()} key={project.getURLFriendlyName()}>{project.projectName}</Link>)}
                </div>
            </div>
            <div className="bottom">
                <div className="text">
                    © 2023-{new Date().getFullYear()} Dwight Studio - <Link href={"/" + lang + "/legal"}>Legal information</Link>
                </div>
            </div>
        </div>
    )
}