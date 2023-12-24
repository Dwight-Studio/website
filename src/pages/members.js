import Title from "../base/header/title";
import Header from "../base/header/header";
import React from "react";

function Members() {
    return (
        <div className="projects-wrapper">
            <Title/>
            <Header selected={"members"}/>

            <div id="content">
                <div className="TestDiv"/>
            </div>
        </div>
    )
}

export default Members;