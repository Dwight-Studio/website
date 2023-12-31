import Header from "../elements/header/header";
import React from "react";
import Footer from "../elements/footer/footer";
import {getAllProjects} from "../data/project";
import "./pages.css"
import {Helmet} from "react-helmet";

export default function Projects() {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Our Projects - Dwight Studio: Developer Collective</title>
                <meta name="description" content="Discover the projects of Dwight Studio, developed in Open Source by
                our team of talented developers."/>
            </Helmet>

            <Header selected={"projects"}/>

            <div className="content-wrapper">
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