import Title from "../base/header/title";
import Header from "../base/header/header";
import React from "react";

function Projects() {
    return (
        <div className="page-wrapper">
            <Title/>
            <Header selected={"projects"}/>

            <div id="content" className="content-wrapper">
                <div className="test-content"/>
            </div>
        </div>
    )
}

export default Projects;