import Header from "../elements/header/header";
import Footer from "../elements/footer/footer";
import React from "react";
import TitleHeader from "../elements/header/title-header";
import "./project.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";

export default function Project(props) {
    return (
        <div className="page-wrapper">
            <TitleHeader logo={props.project.logo} background={props.project.titleBackground}/>
            <Header selected={"projects"}/>

            <div id="content" className="content-wrapper">

                {props.project.outdated ? <div>
                    <div className="outdated-message">
                        <FontAwesomeIcon icon={faTriangleExclamation}/>
                        <div>This project is outdated and unlikely to be updated again. It may not work as expected or may
                            contain out-of-date information.</div>
                    </div>
                </div> : <div/>}

                <div className="section">
                    {props.project.getHeaderCard(props.project.download)}
                </div>

                {props.project.pageContent.props.children}
            </div>

            <Footer/>
        </div>
    )
}