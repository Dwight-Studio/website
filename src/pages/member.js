import Header from "../elements/header/header";
import {HeaderMemberCard} from "../elements/members/header-member-card";
import Footer from "../elements/footer/footer";
import React from "react";
import {Helmet} from "react-helmet";

export default function Member(props) {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{props.member.pseudo + " - " + props.member.firstName + " " + props.member.lastName} - Dwight
                    Studio: Developer Collective</title>
                <meta name="description" content={props.member.shortDescription}/>
            </Helmet>

            <Header selected={"members"}/>

            <div className="content-wrapper">
                <div className="section">
                    <HeaderMemberCard member={props.member}/>
                </div>

                {props.member.pageContent.props.children}
            </div>

            <Footer/>
        </div>
    )
}