import React from "react";
import {TinyMemberCard} from "../elements/members/tiny-member-card";
import {LargeMemberCard} from "../elements/members/large-member-card";
import {HeaderMemberCard} from "../elements/members/header-member-card";
import GamerMine from "./members/gamermine";
import Yinx from "./members/yinx";
import Deleranax from "./members/deleranax";
import {getAllProjects} from "./project";
import ProjectCardCarousel from "../elements/projects/project-card-carousel";
import {FaXTwitter} from "react-icons/fa6";
import {FaGithub, FaLinkedin, FaReddit, FaTwitch, FaYoutube} from "react-icons/fa";
import {CiLink} from "react-icons/ci";

export class Member {
    public readonly logo: string;
    public readonly accentColor: string;
    public readonly pseudo: string;
    public readonly firstName: string;
    public readonly lastName: string;
    public readonly shortDescription: string;
    public readonly longDescription: string;
    public readonly socials: string[];
    public readonly pageContent: React.ReactNode;

    constructor(logo: string, accentColor: string, pseudo: string, firstName: string, lastName: string, shortDescription: string, longDescription: string, socials: string[], pageContent: React.ReactNode) {
        this.logo = logo;
        this.accentColor = accentColor
        this.pseudo = pseudo;
        this.firstName = firstName;
        this.lastName = lastName;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.socials = socials;
        this.pageContent = pageContent;
    }

    getEmail() {
        return (this.firstName.at(0) + this.lastName).toLowerCase();
    }

    getMemberURL() {
        return "/members/" + this.pseudo
    }

    getTinyCard(lang: string) {
        return (<TinyMemberCard member={this} lang={lang} key={this.pseudo}/>)
    }

    getLargeCard(lang: string) {
        return (<LargeMemberCard member={this} lang={lang}/>)
    }

    getHeaderCard(lang: string) {
        return (<HeaderMemberCard member={this} lang={lang}/>)
    }

    getMemberProjects() {
        return getAllProjects().filter(project => project.isContributor(this));
    }

    getProjectsCarousel(lang: string) {
        return (
            <ProjectCardCarousel projects={this.getMemberProjects()} lang={lang}/>
        )
    }

    getSocials() {
        return (
            <div>
                {this.socials.map(item => {
                    let icon = null;
                    switch (new URL(item).hostname) {
                        case "twitter.com":
                        case "www.twitter.com":
                        case "x.com":
                        case "www.x.com":
                            icon = <FaXTwitter/>;
                            break;

                        case "youtube.com":
                        case "www.youtube.com":
                            icon = <FaYoutube/>;
                            break;

                        case "github.com":
                        case "www.github.com":
                            icon = <FaGithub/>;
                            break;

                        case "linkedin.com":
                        case "www.linkedin.com":
                            icon = <FaLinkedin/>;
                            break;

                        case "twitch.tv":
                        case "www.twitch.tv":
                            icon = <FaTwitch/>;
                            break;

                        case "reddit.com":
                        case "www.reddit.com":
                            icon = <FaReddit/>
                            break;

                        default:
                            icon = <CiLink/>;
                    }

                    return <a href={item}>{icon}</a>
                })}
            </div>
        )
    }
}

export class Contributor {

    public readonly member: Member;
    public readonly role: string;

    constructor(member: Member, role: string) {
        this.member = member;
        this.role = role;
    }
}

export function getAllMembers() {
    return [GamerMine(), Yinx(), Deleranax()];
}