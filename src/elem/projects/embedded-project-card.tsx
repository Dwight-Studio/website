'use client'

import RoundButton from "@/elem/buttons/round-button";
import "./embedded-project-card.css"
import React from "react";
import {FaCode, FaExclamationTriangle} from "react-icons/fa";
import {ProjectFlag} from "@/data/project";
import {useTranslations} from "next-intl";

export default function EmbeddedProjectCard({flag, cardBanner, logo, projectId, projectURL, selected}: {
    flag: ProjectFlag,
    cardBanner: string,
    logo: string,
    projectId: string,
    projectURL: string,
    selected: boolean,
}) {
    const t = useTranslations("project." + projectId)
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

    let flagELem;
    switch (flag) {
        case ProjectFlag.OUTDATED:
            flagELem = (
                <div className="warning outdated">
                    <div className="text">OUTDATED</div>
                    <FaExclamationTriangle/>
                </div>
            )
            break;

        case ProjectFlag.PREVIEW:
            flagELem = (
                <div className="warning preview">
                    <div className="text">PREVIEW</div>
                    <FaCode/>
                </div>
            )
            break;

        default:
            flagELem = (
                <div/>
            )
    }

    return (
        <div className={"embedded-project-card" + (selected ? " selected" : "")} onClick={handleClick} ref={cardRef}>
            <img className="background" src={cardBanner} alt="Project banner"/>
            <div className="logo-wrapper">
                <img className="logo" src={logo} alt="Project logo"/>
                <div className="short-description">{t("short_description")}</div>
            </div>
            <div className="button-wrapper">
                <RoundButton text="Learn more" link={"/" + projectURL}/>
            </div>
            {flagELem}
        </div>
    )
}