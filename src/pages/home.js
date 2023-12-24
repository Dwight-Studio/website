import Title from "../base/header/title";
import video from "../medias/dpt.mp4";
import Header from "../base/header/header";
import React from "react";

function Home() {
    return (
        <div className="page-wrapper">
            <Title backgroundVideo={video}/>
            <Header selected={"home"}/>

            <div id="content" className="content-wrapper">
                <div className="test-content"/>
            </div>
        </div>
    )
}

export default Home;