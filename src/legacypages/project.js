import Header from "@/lib/elements/header/header";
import React from "react";
import TitleHeader from "@/lib/elements/header/title-header";
import "./project.css"
import {FaCode, FaExclamationTriangle} from "react-icons/fa";
import {Page, PageContent, Section} from "@/lib/elements/base";

export default function Project(props) {

    let flag;
    switch (props.project.flag) {
        case "outdated":
            flag = (
                <div className="flag-message outdated">
                    <FaExclamationTriangle/>
                    <div>
                        This project is outdated and unlikely to be updated again. It may not work as expected or
                        may contain out-of-date information.
                    </div>
                </div>
            )
            break;

        case "preview":
            flag = (
                <div className="flag-message preview">
                    <FaCode/>
                    <div>
                        This project is a preview of a software under development. It should be used with caution as it may be unstable.
                    </div>
                </div>
            )
            break;

        default:
            flag = (
                <div/>
            )
    }

    return (
        <Page selected="projects" title={props.project.projectName} description={props.project.shortDescription}>
            <TitleHeader logo={props.project.logo} background={props.project.titleBackground}/>

            <Header selected={"projects"}/>

            <PageContent>
                <div>
                    {flag}
                </div>

                <Section>
                    {props.project.getHeaderCard()}
                </Section>

                {props.project.pageContent.props.children}
            </PageContent>
        </Page>
    )
}