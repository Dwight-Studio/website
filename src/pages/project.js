import Header from "../elements/header/header";
import Footer from "../elements/footer/footer";
import React from "react";
import TitleHeader from "../elements/header/title-header";
import "./project.css"
import {Helmet} from "react-helmet";
import {FaExclamationTriangle} from "react-icons/fa";
import {Page, PageContent, Section} from "../elements/base";

export default function Project(props) {
    return (
        <Page selected="projects" title={props.project.projectName} description={props.project.shortDescription}>
            <TitleHeader logo={props.project.logo} background={props.project.titleBackground}/>

            <Header selected={"projects"}/>

            <PageContent>
                {props.project.outdated ? <div>
                    <div className="outdated-message">
                        <FaExclamationTriangle/>
                        <div>This project is outdated and unlikely to be updated again. It may not work as expected or
                            may
                            contain out-of-date information.
                        </div>
                    </div>
                </div> : <div/>}

                <Section>
                    {props.project.getHeaderCard()}
                </Section>

                {props.project.pageContent.props.children}
            </PageContent>
        </Page>
    )
}