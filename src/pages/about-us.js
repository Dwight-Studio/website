import Header from "../base/header/header";
import React from "react";
import Footer from "../base/footer/footer";

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