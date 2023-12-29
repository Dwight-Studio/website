import Header from "../elements/header/header";
import {HeaderMemberCard} from "../elements/members/header-member-card";
import Footer from "../elements/footer/footer";
import React from "react";

export default function Member(props) {
    return (
        <div className="page-wrapper">
            <Header selected={"members"}/>

            <div id="content" className="content-wrapper">
                <div className="section">
                    <HeaderMemberCard member={props.member}/>
                </div>

                {props.member.pageContent}
            </div>

            <Footer/>
        </div>
    )
}