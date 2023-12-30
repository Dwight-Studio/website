import TitleHeader from "../elements/header/title-header";
import Header from "../elements/header/header";
import React from "react";
import Footer from "../elements/footer/footer";
import RoundButton from "../elements/buttons/round-button";
import {getAllMembers} from "../data/member";

export default function Home() {
    return (
        <div className="page-wrapper">
            <TitleHeader logo={"https://static.dwightstudio.fr/dwightstudio/LOGO_BANNER_RED.svg"}/>
            <Header selected={"home"}/>

            <div className="content-wrapper">
                    <div className="section">
                        <h1>Our Projects</h1>
                        <p>
                            We're developing a range of projects, from retro console emulators to Arm learning tools and
                            Minecraft mods.
                        </p>
                        <center>
                            <RoundButton text={"Discover all our projects"} link={"/projects"}/>
                        </center>
                    </div>
                    <div className="accented-section">
                        <h1>The Team</h1>
                        <h2>The humans behind the computer.</h2>
                        <div style={{display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", margin: "30px 0"}}>
                            {getAllMembers().map(member => member.getTinyCard())}
                        </div>
                    </div>
                    <div className="section">
                        <h1>Developer Collective</h1>
                        <h2>Create. Share. Enjoy.</h2>
                        <p>
                            Dwight Studio is a developer collective composed of computer science students, friends,
                            who collaborate to offer free, open source software.
                        </p>
                        <center>
                            <RoundButton text={"Learn more about us"} link={"/about-us"}/>
                        </center>
                    </div>
            </div>

            <Footer/>
        </div>
    )
}