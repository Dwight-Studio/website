import React from "react";
import './footer.css'
import {Link} from "react-router-dom";
import {getAllMembers} from "../../data/member";
import {getAllProjects} from "../../data/project";

export default function Footer() {
    return (
        <div className="footer">
            <div className="columns">
                <div className="section">
                    <div className="title">PAGES</div>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/members">Members</Link>
                    <Link to="/about-us">About us</Link>
                </div>
                <div className="section">
                    <div className="title">MEMBERS</div>
                    {getAllMembers().map(member => <Link to={member.getMemberURL()}>{member.pseudo}</Link>)}
                </div>
                <div className="section">
                    <div className="title">PROJECTS</div>
                    {getAllProjects().map(project => <Link to={project.getProjectURL()}>{project.projectName}</Link>)}
                </div>
            </div>
            <div className="bottom">
                <div className="text">
                    © 2023-{new Date().getFullYear()} Dwight Studio - <Link to="/legal">Legal information</Link>
                </div>
            </div>
        </div>
    )
}