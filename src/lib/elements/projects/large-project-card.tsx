import "./large-project-card.css"
import RoundButton from "@/lib/elements/buttons/round-button";
import {FaCode, FaExclamationTriangle} from "react-icons/fa";
import {Project} from "@/lib/data/project";

export default function LargeProjectCard({project} : {project: Project}) {
    let flag;
    switch (project.flag) {
        case "outdated":
            flag = (
                <div className="warning outdated">
                    <div className="text">OUTDATED</div>
                    <FaExclamationTriangle/>
                </div>
            )
            break;

        case "preview":
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
        <div className="large-project-card">
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