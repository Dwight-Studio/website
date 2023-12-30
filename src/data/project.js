import DontPlayTogether from "./projects/dont-play-together";
import React from "react";
import LargeProjectCard from "../elements/projects/large-project-card";
import JArmEmu from "./projects/jarmemu";
import EmbeddedProjectCard from "../elements/projects/embedded-project-card";
import {getAllMembers} from "./member";
import ContributorCard from "../elements/members/contributor-card";
import HeaderProjectCard from "../elements/projects/header-project-card";

export class Project {
    constructor(logo, cardBanner, titleBackground, projectName, shortDescription, outdated, contributors, download, pageContent) {
        this.logo = logo;
        this.cardBanner = cardBanner
        this.titleBackground = titleBackground;
        this.projectName = projectName;
        this.shortDescription = shortDescription;
        this.outdated = outdated;
        this.contributors = contributors;
        this.download = download;
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

    getHeaderCard(dl) {
        return (<HeaderProjectCard project={this}>{dl.props.children}</HeaderProjectCard>)
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
    return [JArmEmu(), DontPlayTogether()]
}