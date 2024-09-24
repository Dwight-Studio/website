import Header from "@/lib/elements/header/header";
import {HeaderMemberCard} from "@/lib/elements/members/header-member-card";
import React from "react";
import {Page, PageContent, Section} from "@/lib/elements/base";

export default function Member(props) {
    return (
        <Page title={props.member.pseudo + " - " + props.member.firstName + " " + props.member.lastName}
              description={props.member.shortDescription}>

            <Header selected={"members"}/>

            <PageContent>
                <Section>
                    <HeaderMemberCard member={props.member}/>
                </Section>

                {props.member.pageContent.props.children}
            </PageContent>
        </Page>
    )
}