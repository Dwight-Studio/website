import Header from "../elements/header/header";
import React from "react";
import {getAllMembers} from "../data/member";
import "./members.css"
import {Page, PageContent, Section} from "../elements/base";


export default function Members() {
    return (
        <Page title="Members" description="Discover the humans behind the computer, the developers who compose
            the team of Dwight Studio.">

            <Header selected={"members"}/>

            <PageContent>
                <Section>
                    <div className="members">
                        {getAllMembers().map(member => member.getLargeCard())}
                    </div>
                </Section>
            </PageContent>
        </Page>
    )
}