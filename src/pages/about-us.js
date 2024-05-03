import Header from "../elements/header/header";
import React from "react";
import {Helmet} from "react-helmet";
import {AccentedSection, Page, PageContent, Section, Subtitle, Title} from "../elements/base";

export default function AboutUs() {
    return (
        <Page>
            <Helmet>
                <title>About Us - Dwight Studio: Developer Collective</title>
            </Helmet>

            <Header selected={"about-us"}/>

            <PageContent>
                <Section>
                    <Title>Developer Collective</Title>
                    <Subtitle>Create. Share. Enjoy.</Subtitle>
                    <p>
                        Dwight Studio is a developer collective composed of computer science students, friends,
                        who collaborate to offer free, open source software. It was created back in 2019 as structure to
                        host our personal projects, and promote our work.
                    </p>
                </Section>
                <AccentedSection>
                    <Title>Our values</Title>
                    <Subtitle>Open Source & Free</Subtitle>
                    <p>
                        We believe that software should be free and accessible to everyone. All our current and future
                        projects as a collective will be free, and open source wherever possible.
                    </p>
                </AccentedSection>
            </PageContent>
        </Page>
    )
}