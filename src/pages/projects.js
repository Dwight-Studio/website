import Header from "../elements/header/header";
import React from "react";
import {getAllProjects} from "../data/project";
import "./projects.css"
import {Page, PageContent, Section} from "../elements/base";

export default function Projects() {
    return (
        <Page title="Our Projects" description="Discover the projects of Dwight Studio, developed in
            Open Source by our team of talented developers.">

            <Header selected="projects"/>

            <PageContent>
                <Section>
                    <div className="projects">
                        {getAllProjects().map(project => project.getLargeCard())}
                    </div>
                </Section>
            </PageContent>
        </Page>
    )
}