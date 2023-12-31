import React from "react";
import {TinyMemberCard} from "../elements/members/tiny-member-card";
import {LargeMemberCard} from "../elements/members/large-member-card";
import {HeaderMemberCard} from "../elements/members/header-member-card";
import {faGithub, faLinkedin, faLinux, faTwitch, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import GamerMine from "./members/gamermine";
import Yinx from "./members/yinx";
import Deleranax from "./members/deleranax";
import {getAllProjects} from "./project";
import ProjectCardCarousel from "../elements/projects/project-card-carousel";

export class Member {
    constructor(logo, accentColor, pseudo, firstName, lastName, shortDescription, longDescription, socials, pageContent) {
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

    getTinyCard() {
        return (<TinyMemberCard member={this}/>)
    }

    getLargeCard() {
        return (<LargeMemberCard member={this}/>)
    }

    getHeaderCard() {
        return (<HeaderMemberCard member={this}/>)
    }

    getMemberProjects() {
        return getAllProjects().filter(project => project.isContributor(this));
    }

    getProjectsCarousel() {
        return (
            <ProjectCardCarousel projects={this.getMemberProjects()}/>
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
                            icon = faXTwitter;
                            break;

                        case "youtube.com":
                        case "www.youtube.com":
                            icon = faYoutube;
                            break;

                        case "github.com":
                        case "www.github.com":
                            icon = faGithub;
                            break;

                        case "linkedin.com":
                        case "www.linkedin.com":
                            icon = faLinkedin;
                            break;

                        case "twitch.tv":
                        case "www.twitch.tv":
                            icon = faTwitch;
                            break;

                        default:
                            icon = faLinux;
                    }

                    return <a href={item}><FontAwesomeIcon icon={icon}/></a>
                })}
            </div>
        )
    }
}

export class Contributor {
    constructor(member, role) {
        this.member = member;
        this.role = role;
    }
}

export function getAllMembers() {
    return [GamerMine(), Yinx(), Deleranax()];
}