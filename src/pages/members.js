import Title from "../base/header/title";
import Header from "../base/header/header";
import React from "react";

function Members() {
    return (
        <div className="page-wrapper">
            <Title/>
            <Header selected={"members"}/>

            <div id="content" className="content-wrapper">
                <div className="test-content"/>
            </div>
        </div>
    )
}

export default Members;