import React from "react";
import "./project-card-carousel.css"
import {FaAngleDown, FaAngleUp} from "react-icons/fa";
import {Project} from "@/lib/data/project";

export default function ProjectCardCarousel({projects} : {projects: Project[]}) {
    let first = true;
    return (
        <div className="project-card-carousel">
            <div className="title">Contributions</div>
            <div className="up-arrow">
                <FaAngleUp />
            </div>
            {projects.map(project => {
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