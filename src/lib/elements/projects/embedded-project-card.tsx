'use client'

import RoundButton from "@/lib/elements/buttons/round-button";
import "./embedded-project-card.css"
import React from "react";
import {FaCode, FaExclamationTriangle} from "react-icons/fa";
import {Project, ProjectFlag} from "@/lib/data/project";

export default function EmbeddedProjectCard({project, selected}: {project: Project, selected: boolean}) {
    const cardRef = React.useRef<HTMLDivElement>(null)

    function handleClick() {
        let cardDOM = document.getElementsByClassName("embedded-project-card selected").item(0);
        if (cardDOM) {
            cardDOM.classList.toggle("selected")
        }

        if (cardRef.current) {
            cardRef.current.classList.toggle("selected");
        }
    }

    let flag;
    switch (project.flag) {
        case ProjectFlag.OUTDATED:
            flag = (
                <div className="warning outdated">
                    <div className="text">OUTDATED</div>
                    <FaExclamationTriangle/>
                </div>
            )
            break;

        case ProjectFlag.PREVIEW:
            flag = (
                <div className="warning preview">
                    <div className="text">PREVIEW</div>
                    <FaCode/>
                </div>
            )
            break;

        default:
            flag = (
                <div/>
            )
    }

    return (
        <div className={"embedded-project-card" + (selected ? " selected" : "")} onClick={handleClick} ref={cardRef}>
            <img className="background" src={project.cardBanner} alt="Project banner"/>
            <div className="logo-wrapper">
                <img className="logo" src={project.logo} alt="Project logo"/>
                <div className="short-description">{project.shortDescription}</div>
            </div>
            <div className="button-wrapper">
                <RoundButton text="Learn more" link={project.getProjectURL()}/>
            </div>
            {flag}
        </div>
    )
}