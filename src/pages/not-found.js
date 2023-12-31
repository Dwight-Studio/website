import Header from "../elements/header/header";
import React from "react";
import "./pages.css"
import Footer from "../elements/footer/footer";
import {Helmet} from "react-helmet";

export default function NotFound() {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Error - Dwight Studio: Developer Collective</title>
            </Helmet>

            <Header/>

            <div className="content-wrapper">
                <div className="notfound-wrapper">
                    <div className="error-title">Nothing's here!</div>
                    <div className="error-subtitle">Error 404: Not Found</div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}