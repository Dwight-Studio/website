import React from "react";
import LargeProjectCard from "../elements/projects/large-project-card";
import EmbeddedProjectCard from "../elements/projects/embedded-project-card";
import ContributorCard from "../elements/members/contributor-card";
import FooterProjectCard from "../elements/projects/header-project-card";

import DontPlayTogether from "./projects/dont-play-together";
import JArmEmu from "./projects/jarmemu";
import DeMuG from "./projects/demug";
import {Contributor, Member} from "@/lib/data/member";
import {StaticImageData} from "next/image";

export class Project {

    public readonly logo: string | StaticImageData;
    public readonly cardBanner: string | StaticImageData;
    public readonly titleBackground: string;
    public readonly projectName: string;
    public readonly shortDescription: string;
    public readonly flag: ProjectFlag;
    public readonly contributors: Contributor[];
    public readonly githubIdentifier: string;
    public readonly repositories: string[];
    public readonly pageContent: React.ReactNode;

    constructor(logo: string | StaticImageData,
                cardBanner: string | StaticImageData,
                titleBackground: string,
                projectName: string,
                shortDescription: string,
                flag: ProjectFlag,
                contributors: Contributor[],
                githubIdentifier: string,
                repositories: string[],
                pageContent: React.ReactNode) {

        this.logo = logo;
        this.cardBanner = cardBanner
        this.titleBackground = titleBackground;
        this.projectName = projectName;
        this.shortDescription = shortDescription;
        this.flag = flag;
        this.contributors = contributors;
        this.githubIdentifier = githubIdentifier;
        this.repositories = repositories;
        this.pageContent = pageContent;
    }

    getURLFriendlyName() {
        return this.projectName.replaceAll(" ", "-").replaceAll("'", '')
    }

    getProjectURL() {
        return "/projects/" + this.getURLFriendlyName();
    }

    getLargeCard(lang: string) {
        return (<LargeProjectCard project={this} lang={lang} key={this.getURLFriendlyName()}/>)
    }

    getEmbeddedCard(selected: boolean, lang: string) {
        return (<EmbeddedProjectCard project={this} selected={selected} lang={lang}/>)
    }

    getFooterCard(lang: string) {
        return (<FooterProjectCard project={this} lang={lang} key={this.getURLFriendlyName()}/>)
    }

    isContributor(member: Member) {
        let rtn = false;
        this.contributors.forEach(contributor => {
            if (contributor.member.pseudo === member.pseudo) rtn = true;
        })

        return rtn;
    }

    getContributorCards(lang: string) {
        return this.contributors.map(contributor => <ContributorCard contributor={contributor} lang={lang}
                                                                     key={contributor.member.pseudo + ":" + contributor.role}/>)
    }
}

export enum ProjectFlag {
    NONE,
    OUTDATED,
    PREVIEW
}

export function getAllProjects() {
    return [JArmEmu(), DeMuG(), DontPlayTogether()]
}

export function getProject(name: String) {
    return getAllProjects().filter(project => project.getURLFriendlyName() === name).at(0);
}

