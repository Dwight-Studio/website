'use client'

import './header.css';
import Link from 'next/link';
import React from "react";
import {FaDiscord, FaGithub, FaYoutube} from "react-icons/fa";
import {useParams, usePathname} from 'next/navigation'

export default function Header() {
    const hamburgerRef = React.useRef<HTMLDivElement>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);

    function toggleHamburger() {
        if (menuRef.current) {
            menuRef.current.classList.toggle("open");
        }

        if (hamburgerRef.current) {
            hamburgerRef.current.classList.toggle("open");
        }
    }

    const pathname = usePathname();
    const {lang}: {lang: string} = useParams();

    return (
        <div id="header" className="header">
            <div className="mobile">
                <div id="hamburger" ref={hamburgerRef} onClick={() => toggleHamburger()}>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
            <div className="menu" ref={menuRef}>
                <div className="nav">
                    <Link href={"/" + lang} className="logo-wrapper">
                        <img src="https://static.dwightstudio.fr/dwightstudio/LOGO_BANNER_RED.svg"
                             className="logo"
                             alt="Logo"/>
                    </Link>
                    <Link href={"/" + lang} className={pathname === "/home" ? "link-selected" : "link-unselected"}>
                        <div>HOME</div>
                    </Link>
                    <Link href={"/" + lang + "/projects"}
                          className={pathname === "/projects" ? "link-selected" : "link-unselected"}>
                        <div>PROJECTS</div>
                    </Link>
                    <Link href={"/" + lang + "/members"}
                          className={pathname === "/members" ? "link-selected" : "link-unselected"}>
                        <div>MEMBERS</div>
                    </Link>
                    <Link href={"/" + lang + "/about-us"}
                          className={pathname === "/about-us" ? "link-selected" : "link-unselected"}>
                        <div>ABOUT US</div>
                    </Link>
                </div>
                <div className="social-medias">
                    <a href="https://www.youtube.com/@dwightstudio">
                        <FaYoutube/>
                    </a>
                    <a href="https://discord.gg/Eqake7q">
                        <FaDiscord/>
                    </a>
                    <a href="https://github.com/Dwight-Studio">
                        <FaGithub/>
                    </a>
                </div>
            </div>
        </div>
    )
}