import Header from "../elements/header/header";
import Footer from "../elements/footer/footer";
import React from "react";
import TitleHeader from "../elements/header/title-header";

export default function Project(props) {
    return (
        <div className="page-wrapper">
            <TitleHeader logo={props.project.logo} backgroundVideo={props.project.titleVideo}/>
            <Header selected={"projects"}/>

            <div id="content" className="content-wrapper">
                <div className="section">
                    {/*<HeaderProjectCard project={props.project}/>*/}
                </div>

                {props.project.pageContent}
            </div>

            <Footer/>
        </div>
    )
}