import Header from "../elements/header/header";
import React from "react";
import Footer from "../elements/footer/footer";
import {getAllMembers} from "../data/member";
import "./pages.css"


export default function Members() {
    return (
        <div className="page-wrapper">
            <Header selected={"members"}/>

            <div id="content" className="content-wrapper">
                <div className="section">
                    <div className="members">
                        {getAllMembers().map(member => member.getLargeCard())}
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}