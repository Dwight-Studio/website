import Header from "../base/header/header";
import React from "react";
import Footer from "../base/footer/footer";
import video from "../medias/dpt.mp4";
import TitleHeader from "../base/header/title-header";

function AboutUs() {
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

export default AboutUs;