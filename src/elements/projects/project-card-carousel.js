import React, {useEffect} from "react";
import "./project-card-carousel.css"

export default function ProjectCardCarousel(props) {
    let first = true;
    return (
        <div className="project-card-carousel">
            <div className="title">Contributions</div>
            {props.projects.map(project => {
                if (first) {
                    first = false;
                    return project.getEmbeddedCard(true)
                }
                return project.getEmbeddedCard(false)
            })}
        </div>
    )
}