import Title from "../base/header/title";
import Header from "../base/header/header";
import React from "react";
import Footer from "../base/footer/footer";

function Projects() {
    return (
        <div className="page-wrapper">
            <Title/>
            <Header selected={"projects"}/>

            <div id="content" className="content-wrapper">
                <div className="test-content"/>
            </div>

            <Footer/>
        </div>
    )
}

export default Projects;