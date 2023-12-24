import Title from "../base/header/title";
import Header from "../base/header/header";
import React from "react";
import Footer from "../base/footer/footer";

function Members() {
    return (
        <div className="page-wrapper">
            <Header selected={"members"}/>

            <div id="content" className="content-wrapper">
                <div className="test-content"/>
            </div>

            <Footer/>
        </div>
    )
}

export default Members;