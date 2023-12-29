import Header from "../elements/header/header";
import React from "react";
import Footer from "../elements/footer/footer";
import video from "../medias/dpt.mp4";
import TitleHeader from "../elements/header/title-header";

export default function AboutUs() {
    return (
        <div className="page-wrapper">
            <Header selected={"about-us"}/>

            <div id="content" className="content-wrapper">
                <div className="test-content"/>
            </div>

            <Footer/>
        </div>
    )
}