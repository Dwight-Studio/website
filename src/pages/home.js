import TitleHeader from "../elements/header/title-header";
import Header from "../elements/header/header";
import React from "react";
import RoundButton from "../elements/buttons/round-button";
import {getAllMembers} from "../data/member";
import {AccentedSection, Center, Page, PageContent, Section, Subtitle, Title} from "../elements/base";

export default function Home() {
    return (
        <Page>
            <TitleHeader logo={"https://static.dwightstudio.fr/dwightstudio/LOGO_BANNER_RED.svg"}/>
            <Header selected={"home"}/>

            <PageContent>
                <Section>
                    <h1>Our Projects</h1>
                    <p>
                        We're developing a range of projects, from retro console emulators to Arm learning tools and
                        Minecraft mods.
                    </p>
                    <div className="center">
                        <RoundButton text={"Discover all our projects"} link={"/projects"}/>
                    </div>
                </Section>
                <AccentedSection>
                    <Title>The Team</Title>
                    <Subtitle>The humans behind the computer.</Subtitle>
                    <div style={{
                        display: "flex",
                        gap: "20px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        margin: "30px 0"
                    }}>
                        {getAllMembers().map(member => member.getTinyCard())}
                    </div>
                </AccentedSection>
                <Section>
                    <Title>Developer Collective</Title>
                    <Subtitle>Create. Share. Enjoy.</Subtitle>
                    <p>
                        Dwight Studio is a developer collective composed of computer science students, friends,
                        who collaborate to offer free, open source software.
                    </p>
                    <Center>
                        <RoundButton text={"Learn more about us"} link={"/about-us"}/>
                    </Center>
                </Section>
            </PageContent>
        </Page>
    )
}