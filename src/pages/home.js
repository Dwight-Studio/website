import Title from "../base/header/title";
import video from "../medias/slime-sim.mp4";
import Header from "../base/header/header";
import React from "react";
import Footer from "../base/footer/footer";

function Home() {
    return (
        <div className="page-wrapper">
            <Title backgroundVideo={video}/>
            <Header selected={"home"}/>

            <div id="content" className="content-wrapper">
                <div className="screen-width-wrapper">
                    <div className="test-content"/>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Home;