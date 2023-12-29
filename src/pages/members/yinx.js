import Header from "../../elements/header/header";
import React from "react";
import Footer from "../../elements/footer/footer";
import {HeaderMemberCard} from "../../elements/members/header-member-card";
import {Yinx as member} from "../../data/member";

export default function Yinx() {
    return (
        <div className="page-wrapper">
            <Header selected={"members"}/>

            <div id="content" className="content-wrapper">
                <div className="section">
                    <HeaderMemberCard member={member}/>
                </div>
                <div className="section">
                    <h1>Wecome to my page</h1>
                    <p>
                        I must fill this page, which is empty for now.
                    </p>
                </div>
            </div>

            <Footer/>
        </div>
    )
}