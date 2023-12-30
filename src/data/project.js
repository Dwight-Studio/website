import DontPlayTogether from "./projects/dont-play-together";
import React from "react";
import LargeProjectCard from "../elements/projects/large-project-card";
import JArmEmu from "./projects/jarmemu";
import EmbeddedProjectCard from "../elements/projects/embedded-project-card";

export class Project {
    constructor(logo, cardBanner, titleVideo, projectName, shortDescription, longDescription, outdated, contributors, pageContent) {
        this.logo = logo;
        this.cardBanner = cardBanner
        this.titleVideo = titleVideo;
        this.projectName = projectName;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.outdated = outdated;
        this.contributors = contributors;
        this.pageContent = pageContent;
    }

    getProjectURL() {
        return "/projects/" + this.projectName.replaceAll(" ", "-").replaceAll("'", '');
    }

    getLargeCard() {
        return (<LargeProjectCard project={this}/>)
    }

    getEmbeddedCard(selected) {
        return (<EmbeddedProjectCard project={this} selected={selected}/>)
    }

    isContributor(member) {
        let rtn = false;
        this.contributors.forEach(contributor => {
            if (contributor.member.pseudo === member.pseudo) rtn = true;
        })

        return rtn;
    }
}

export function getAllProjects() {
    return [JArmEmu(), DontPlayTogether()]
}