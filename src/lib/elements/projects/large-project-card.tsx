import "./large-project-card.css"
import RoundButton from "@/lib/elements/buttons/round-button";
import {FaCode, FaExclamationTriangle} from "react-icons/fa";
import {Project, ProjectFlag} from "@/lib/data/project";

export default function LargeProjectCard({project, lang}: { project: Project, lang: string }) {
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
        <div className="large-project-card" key={project.getURLFriendlyName()}>
            <img className="background" src={project.cardBanner} alt="Project banner"/>
            <div className="logo-wrapper">
                <img className="logo" src={project.logo} alt="Project logo"/>
                <div className="short-description">{project.shortDescription}</div>
            </div>
            <div className="button-wrapper">
                <RoundButton text="Learn more" link={"/" + lang + project.getProjectURL()}/>
            </div>
            {flag}
        </div>
    )
}