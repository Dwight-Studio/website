import React from "react";
import "./project-card-carousel.css"
import {FaAngleDown, FaAngleUp} from "react-icons/fa";

export default function ProjectCardCarousel(props) {
    let first = true;
    return (
        <div className="project-card-carousel">
            <div className="title">Contributions</div>
            <div className="up-arrow">
                <FaAngleUp />
            </div>
            {props.projects.map(project => {
                if (first) {
                    first = false;
                    return project.getEmbeddedCard(true)
                }
                return project.getEmbeddedCard(false)
            })}
            <div className="down-arrow">
                <FaAngleDown />
            </div>
        </div>
    )
}