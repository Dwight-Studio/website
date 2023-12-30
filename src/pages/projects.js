import Header from "../elements/header/header";
import React from "react";
import Footer from "../elements/footer/footer";
import {getAllProjects} from "../data/project";
import "./pages.css"

export default function Projects() {
    return (
        <div className="page-wrapper">
            <Header selected={"projects"}/>

            <div id="content" className="content-wrapper">
                <div className="section">
                    <div className="projects">
                        {getAllProjects().map(project => project.getLargeCard())}
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}