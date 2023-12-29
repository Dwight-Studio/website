import React from "react";
import './footer.css'
import {Link} from "react-router-dom";
import {Member} from "../../data/member";

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
                    {Member.allMembers.map((item) => <Link to={item.getMemberURL()}>{item.pseudo}</Link>)}
                </div>
            </div>
            <div className="bottom">
                <div className="text">
                    © 2023 Dwight Studio (Maxime SAVARY, Kevin TOLLEMER & Alexandre LECONTE)
                </div>
            </div>
        </div>
    )
}