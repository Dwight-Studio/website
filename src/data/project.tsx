import React from "react";
import LargeProjectCard from "@/elem/projects/large-project-card";
import EmbeddedProjectCard from "@/elem/projects/embedded-project-card";
import ContributorCard from "@/elem/members/contributor-card";
import FooterProjectCard from "@/elem/projects/footer-project-card";
import {Row} from "postgres";
import {fetchContributors, fetchProject, fetchProjects} from "@/data/db";
import {Member} from "@/data/member";

export class Project {

    public readonly id: string;
    public readonly displayName: string;
    public readonly flag: ProjectFlag;
    public readonly logo: string;
    public readonly banner: string;
    public readonly titleBackground: string;
    public readonly githubIdentifier: string;
    public readonly repositories: string[];
    public readonly pageContent: string;

    constructor(payload: Row) {
        this.id = payload.id;
        this.displayName = payload.display_name;
        this.flag = payload.flag;
        this.logo = payload.logo_url;
        this.banner = payload.banner_url;
        this.titleBackground = payload.background_url;
        this.githubIdentifier = payload.github_id;
        this.repositories = payload.repositories;
        this.pageContent = payload.page_content;
    }

    getTKey() {
        return "project." + this.id
    }

    getProjectURL() {
        return "/projects/" + this.id;
    }

    getLargeCard() {
        return (<LargeProjectCard project={this} key={this.id}/>)
    }

    getEmbeddedCard(selected: boolean) {
        return (<EmbeddedProjectCard flag={this.flag} cardBanner={this.banner} logo={this.logo}
                                     projectId={this.id} projectURL={this.getProjectURL()}
                                     selected={selected} key={this.id}/>)
    }

    getFooterCard() {
        return (<FooterProjectCard project={this} key={this.id}/>)
    }

    async getContributorCards() {
        const members = await this.getContributors();
        return members.map(member => <ContributorCard project={this} member={member}
                                                      key={this.id + ":" + member.id}/>);
    }

    async getContributors() {
        const members = [];
        const result = await fetchContributors(this.id);

        for (const row of result) {
            members.push(new Member(row));
        }

        return members;
    }
}

export enum ProjectFlag {
    NONE, OUTDATED, PREVIEW
}

export async function getProjects() {
    const projects = [];
    const result = await fetchProjects();

    for (const row of result) {
        projects.push(new Project(row));
    }

    return projects;
}

export async function getProject(projectId: string) {
    const result = await fetchProject(projectId);

    if (result[0]) {
        return new Project(result[0]);
    }

    return undefined
}