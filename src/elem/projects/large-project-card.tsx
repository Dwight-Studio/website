import "./large-project-card.css"
import RoundButton from "@/elem/buttons/round-button";
import {FaCode, FaExclamationTriangle} from "react-icons/fa";
import {Project, ProjectFlag} from "@/data/project";
import {useTranslations} from "next-intl";

export default function LargeProjectCard({project}: { project: Project }) {
    const t = useTranslations(project.getTKey())

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
        <div className="large-project-card" key={project.displayName}>
            <img className="background" src={project.banner} alt="Project banner"/>
            <div className="logo-wrapper">
                <img className="logo" src={project.logo} alt="Project logo"/>
                <div className="short-description">{t("short_description")}</div>
            </div>
            <div className="button-wrapper">
                <RoundButton text="Learn more" link={"/" + project.getProjectURL()}/>
            </div>
            {flag}
        </div>
    )
}