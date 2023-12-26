import TitleHeader from "../base/header/title-header";
import Header from "../base/header/header";
import React from "react";
import Footer from "../base/footer/footer";
import video from "../medias/slime-sim.mp4";


function Members() {
    return (
        <div className="page-wrapper">
            <TitleHeader backgroundVideo={video}/>
            <Header selected={"members"}/>

            <div id="content" className="content-wrapper">
                <div className="test-content"/>
            </div>

            <Footer/>
        </div>
    )
}

export default Members;