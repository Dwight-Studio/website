import "./base.css"
import Footer from "./footer/footer";
import React from "react";
import {Helmet} from "react-helmet";

export function Page(props) {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{props.title == null ? "" : props.title + " - "} Dwight Studio: Developer Collective</title>
                {
                    props.description == null ? (
                        <meta name="description" content="Dwight Studio is a developer collective composed of computer science students, friends,
                            who collaborate to offer free, open source software."/>
                    ) : (
                        <meta name="description" content={props.description}/>
                    )
                }
            </Helmet>

            {props.children}

            <Footer/>
        </div>
    )
}

export function PageContent(props) {
    return (
        <div className="content-wrapper">
            {props.children}
        </div>
    )
}

export function Section(props) {
    return (
        <div className="section">
            {props.children}
        </div>
    )
}

export function AccentedSection(props) {
    return (
        <div className="accented-section">
            {props.children}
        </div>
    )
}

export function Title(props) {
    return (
        <div className="title">{props.children}</div>
    )
}

export function Subtitle(props) {
    return (
        <div className="subtitle">{props.children}</div>
    )
}

export function Justified(props) {
    return (
        <p className="justified">{props.children}</p>
    )
}

export function Center(props) {
    return (
        <p className="center">{props.children}</p>
    )
}