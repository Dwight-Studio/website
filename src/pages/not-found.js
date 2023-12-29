import Header from "../elements/header/header";
import React from "react";
import "./not-found.css"
import Footer from "../elements/footer/footer";

export default function NotFound() {
    return (
        <div className="page-wrapper">
            <Header/>

            <div id="content" className="content-wrapper">
                <div className="notfound-wrapper">
                    <div className="error-title">Nothing's here!</div>
                    <div className="error-subtitle">Error 404: Not Found</div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}