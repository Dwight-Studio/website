import TitleHeader from "../elements/header/title-header";
import Header from "../elements/header/header";
import React from "react";
import Footer from "../elements/footer/footer";
import video from "../medias/dpt.mp4"
import logo from "../medias/dpt.png"

export default function Projects() {
    return (
        <div className="page-wrapper">
            <TitleHeader logo={logo} backgroundVideo={video}/>
            <Header selected={"projects"}/>

            <div id="content" className="content-wrapper">
                <div className="test-content"/>
            </div>

            <Footer/>
        </div>
    )
}