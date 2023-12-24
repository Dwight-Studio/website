import Header from "../base/header/header";
import React from "react";
import "./not-found.css"
import Footer from "../base/footer/footer";

function NotFound() {
    return (
        <div className="page-wrapper">
            <Header/>

            <div id="content" className="content-wrapper">
                <div className="notfound-wrapper">
                    <h1 className="error-title">Nothing's here!</h1>
                    <h1 className="error-subtitle">Error 404: Not Found</h1>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default NotFound;