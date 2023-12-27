import TitleHeader from "../base/header/title-header";
import Header from "../base/header/header";
import React from "react";
import Footer from "../base/footer/footer";
import video from "../medias/slime-sim.mp4";
import {Member} from "../data/member";


function Members() {
    return (
        <div className="page-wrapper">
            <TitleHeader backgroundVideo={video}/>
            <Header selected={"members"}/>

            <div id="content" className="content-wrapper">
                <div className="screen-width-wrapper">
                    <div className="section">
                        <h1>The Dwight Studio's Team</h1>
                        <div style={{display: "flex", gap: "50px", justifyContent: "center", flexWrap: "wrap", margin: "30px 0"}}>
                            {Member.allMembers.map((item) => item.getLargeCard())}
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Members;