import Header from "../elements/header/header";
import React from "react";
import Footer from "../elements/footer/footer";
import {Helmet} from "react-helmet";

export default function AboutUs() {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>About Us - Dwight Studio: Developer Collective</title>
            </Helmet>

            <Header selected={"about-us"}/>

            <div className="content-wrapper">

            </div>

            <Footer/>
        </div>
    )
}