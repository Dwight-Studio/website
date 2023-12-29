import Header from "../elements/header/header";
import React from "react";
import Footer from "../elements/footer/footer";

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