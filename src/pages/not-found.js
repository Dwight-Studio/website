import Header from "../base/header/header";
import React from "react";
import "./not-found.css"

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
        </div>
    )
}

export default NotFound;