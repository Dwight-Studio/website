import React from "react";
import "./project-card-carousel.css"
import down from "../../medias/down.svg"

export default function ProjectCardCarousel(props) {
    let first = true;
    return (
        <div className="project-card-carousel">
            <div className="title">Contributions</div>
            <img className="up-arrow" src={down} alt="Up arrow"/>
            {props.projects.map(project => {
                if (first) {
                    first = false;
                    return project.getEmbeddedCard(true)
                }
                return project.getEmbeddedCard(false)
            })}
            <img className="down-arrow" src={down} alt="Down arrow"/>
        </div>
    )
}