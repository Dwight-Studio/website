import DontPlayTogether from "./projects/dont-play-together";
import React from "react";
import LargeProjectCard from "../elements/projects/large-project-card";
import JArmEmu from "./projects/jarmemu";
import DeMuG from "./projects/demug";
import EmbeddedProjectCard from "../elements/projects/embedded-project-card";
import ContributorCard from "../elements/members/contributor-card";
import HeaderProjectCard from "../elements/projects/header-project-card";

export class Project {
    constructor(logo,
                cardBanner,
                titleBackground,
                projectName,
                shortDescription,
                flag,
                contributors,
                githubIdentifier,
                repositories,
                pageContent) {

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

    getLargeCard() {
        return (<LargeProjectCard project={this}/>)
    }

    getEmbeddedCard(selected) {
        return (<EmbeddedProjectCard project={this} selected={selected}/>)
    }

    getHeaderCard() {
        return (<HeaderProjectCard project={this}/>)
    }

    isContributor(member) {
        let rtn = false;
        this.contributors.forEach(contributor => {
            if (contributor.member.pseudo === member.pseudo) rtn = true;
        })

        return rtn;
    }

    getContributorCards() {
        return this.contributors.map(contributor => <ContributorCard contributor={contributor}/>)
    }
}

export function getAllProjects() {
    return [JArmEmu(), DeMuG(), DontPlayTogether()]
}