import TitleHeader from "../elements/header/title-header";
import Header from "../elements/header/header";
import React from "react";
import Footer from "../elements/footer/footer";
import {Member} from "../data/member";


export default function Members() {
    return (
        <div className="page-wrapper">
            <Header selected={"members"}/>

            <div id="content" className="content-wrapper">
                <div className="section">
                    <div style={{
                        display: "flex",
                        gap: "50px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        margin: "30px 0"
                    }}>
                        {Member.allMembers.map((item) => item.getLargeCard())}
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}