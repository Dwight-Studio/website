import Header from "../elements/header/header";
import React from "react";
import Footer from "../elements/footer/footer";
import {getAllMembers} from "../data/member";
import "./pages.css"
import {Helmet} from "react-helmet";


export default function Members() {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Members - Dwight Studio: Developer Collective</title>
                <meta name="description" content="Discover the humans behind the computer, the developers who compose
                the team of Dwight Studio."/>
            </Helmet>

            <Header selected={"members"}/>

            <div className="content-wrapper">
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