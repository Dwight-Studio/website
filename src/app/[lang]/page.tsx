import React from "react";
import TitleHeader from "@/lib/elements/header/title-header";
import Header from "@/lib/elements/header/header";
import {AccentedSection, Center, PageContent, Section, Subtitle, Title} from "@/lib/elements/base";
import {getAllMembers} from "@/lib/data/member";
import RoundButton from "@/lib/elements/buttons/round-button";
import {getAllProjects} from "@/lib/data/project";

export default function IndexPage({params: {lang}} : {params: {lang: string}}) {
    return (
        <>
            <TitleHeader logo={"https://static.dwightstudio.fr/dwightstudio/LOGO_BANNER_RED.svg"}/>
            <Header lang={lang}/>
            <PageContent>
                <Section>
                    <h1>Our Projects</h1>
                    <p>
                        We're developing a range of projects, from retro console emulators to Arm learning tools and
                        Minecraft mods.
                    </p>
                    <div className="center">
                        <RoundButton text={"Discover all our projects"} link={"/" + lang + "/projects"}/>
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
                        {getAllMembers().map(member => member.getTinyCard(lang))}
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
                        <RoundButton text={"Learn more about us"} link={"/" + lang + "/about-us"}/>
                    </Center>
                </Section>
            </PageContent>
        </>
    )
}