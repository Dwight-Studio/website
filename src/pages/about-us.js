import Title from "../base/header/title";
import Header from "../base/header/header";
import React from "react";

function AboutUs() {
    return (
        <div className="projects-wrapper">
            <Title/>
            <Header selected={"about-us"}/>

            <div id="content">
                <div className="TestDiv"/>
            </div>
        </div>
    )
}

export default AboutUs;