import Title from "../base/header/title";
import video from "../medias/dpt.mp4";
import Header from "../base/header/header";
import React from "react";

function Home() {
    return (
        <div className="home-wrapper">
            <Title backgroundVideo={video}/>
            <Header/>

            <div id="content">
                <div className="TestDiv"/>
            </div>
        </div>
    )
}

export default Home;