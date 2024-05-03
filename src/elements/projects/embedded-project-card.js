import RoundButton from "../buttons/round-button";
import "./embedded-project-card.css"
import {useRef} from "react";
import {FaCode, FaExclamationTriangle} from "react-icons/fa";

export default function EmbeddedProjectCard(props) {
    const cardRef = useRef()

    function handleClick() {
        document.getElementsByClassName("embedded-project-card selected").item(0).classList.toggle("selected")
        cardRef.current.classList.toggle("selected");
    }

    let flag;
    switch (props.project.flag) {
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
        <div className={"embedded-project-card" + (props.selected ? " selected" : "")} onClick={handleClick}
             ref={cardRef}>
            <img className="background" src={props.project.cardBanner} alt="Project banner"/>
            <div className="logo-wrapper">
                <img className="logo" src={props.project.logo} alt="Project logo"/>
                <div className="short-description">{props.project.shortDescription}</div>
            </div>
            <div className="button-wrapper">
                <RoundButton text="Learn more" link={props.project.getProjectURL()}/>
            </div>
            {flag}
        </div>
    )
}