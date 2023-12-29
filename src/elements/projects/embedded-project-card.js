import RoundButton from "../buttons/round-button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import "./embedded-project-card.css"

export default function EmbeddedProjectCard(props) {
    return (
        <div className="embedded-project-card">
            <img className="background" src={props.project.cardBanner} alt="Project banner"/>
            <div className="logo-wrapper">
                <img className="logo" src={props.project.logo} alt="Project logo"/>
                <div className="short-description">{props.project.shortDescription}</div>
            </div>
            <div className="button-wrapper">
                <RoundButton text="Learn more" link={props.project.getProjectURL()}/>
            </div>
            {props.project.outdated ? <div className="outdated-warning">
                <div className="text">OUTDATED</div>
                <FontAwesomeIcon icon={faTriangleExclamation}/>
            </div> : <div/>}
        </div>
    )
}