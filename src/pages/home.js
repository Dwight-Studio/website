import TitleHeader from "../base/header/title-header";
import Header from "../base/header/header";
import React from "react";
import Footer from "../base/footer/footer";
import RoundButton from "../base/buttons/round-button";
import {Member} from "../data/member";

function Home() {
    return (
        <div className="page-wrapper">
            <TitleHeader/>
            <Header selected={"home"}/>

            <div id="content" className="content-wrapper">
                <div className="screen-width-wrapper">
                    <div className="section">
                        <h1>Our Projects</h1>
                        <p>
                            We're developing a range of projects, from retro console emulators to Arm learning tools and
                            Minecraft mods.
                        </p>
                        <center>
                            <RoundButton text={"Discover our projects"} link={"/projects"}/>
                        </center>
                    </div>
                    <div className="accented-section">
                        <h1>The Team</h1>
                        <h2>The humans behind the computer.</h2>
                        <div style={{display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", margin: "30px 0"}}>
                            {Member.allMembers.map((item) => item.getTinyCard())}
                        </div>
                        <center>
                            <RoundButton text={"Who are those people"} link={"/members"}/>
                        </center>
                    </div>
                    <div className="section">
                        <h1>Developer Collective</h1>
                        <h2>Create. Share. Enjoy.</h2>
                        <p>
                            Dwight Studio is a developer collective composed of computer science students, friends,
                            who collaborate to offer free, open source, software.
                        </p>
                        <center>
                            <RoundButton text={"Learn more about us"} link={"/about-us"}/>
                        </center>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Home;