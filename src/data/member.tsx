import React from "react";
import {TinyMemberCard} from "@/elem/members/tiny-member-card";
import {LargeMemberCard} from "@/elem/members/large-member-card";
import {HeaderMemberCard} from "@/elem/members/header-member-card";
import ProjectCardCarousel from "@/elem/projects/project-card-carousel";
import {FaGithub, FaLink, FaLinkedin, FaReddit, FaTwitch, FaXTwitter, FaYoutube} from "react-icons/fa6";
import {fetchContributedProjects, fetchMember, fetchMembers} from "@/data/db";
import {Row} from "postgres";
import {Project} from "@/data/project";

export class Member {
    public readonly id: string;
    public readonly displayName: string;
    public readonly firstName: string;
    public readonly lastName: string;
    public readonly logo: string;
    public readonly accentColor: string;
    public readonly socials: string[];
    public readonly pageContent: string;

    constructor(payload: Row) {
        this.id = payload.id;
        this.displayName = payload.display_name;
        this.firstName = payload.first_name;
        this.lastName = payload.last_name;
        this.logo = payload.logo_url;
        this.accentColor = payload.accent_color;
        this.socials = payload.socials;
        this.pageContent = payload.page_content;
    }

    getTKey() {
        return "member." + this.id
    }

    getContributionTKey() {
        return "contribution." + this.id
    }

    getEmail() {
        return (this.firstName.at(0) + this.lastName).toLowerCase();
    }

    getMemberURL() {
        return "/members/" + this.id
    }

    getTinyCard() {
        return (<TinyMemberCard member={this} key={this.id}/>)
    }

    getLargeCard() {
        return (<LargeMemberCard member={this} key={this.id}/>)
    }

    getHeaderCard() {
        return (<HeaderMemberCard member={this} key={this.id}/>)
    }

    async getProjectsCarousel() {
        return (<ProjectCardCarousel projects={await this.getProjects()} key={this.id}/>)
    }

    getSocials() {
        return (<div>
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
                        icon = <FaLink/>;
                }

                return <a key={item} href={item}>{icon}</a>
            })}
        </div>)
    }

    async getProjects() {
        const projects = [];
        const result = await fetchContributedProjects(this.id)

        for (const row of result) {
            projects.push(new Project(row));
        }

        return projects;
    }
}

export async function getMembers() {
    const members = [];
    const result = await fetchMembers();

    for (const row of result) {
        members.push(new Member(row));
    }

    return members;
}

export async function getMember(memberId: string) {
    const result = await fetchMember(memberId);

    if (result[0]) {
        return new Member(result[0]);
    }

    return undefined
}