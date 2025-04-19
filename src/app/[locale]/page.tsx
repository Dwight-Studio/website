import React from "react";
import TitleHeader from "@/elem/header/title-header";
import Header from "@/elem/header/header";
import {Center, PageContent, Section, Subtitle, Title} from "@/elem/base";
import RoundButton from "@/elem/buttons/round-button";
import {setRequestLocale} from "next-intl/server";
import Footer from "@/elem/footer/footer";
import {getMembers} from "@/data/member";

export default async function IndexPage({params}: {params: Promise<{ locale: string }> }) {
    const { locale } = await params

    // Enable static rendering
    setRequestLocale(locale);

    return (<>
            <TitleHeader logo={"https://static.dwightstudio.fr/dwightstudio/base/logo_banner_red.svg"}/>
            <Header/>
            <PageContent>
                <Section>
                    <h1>Our Projects</h1>
                    <p>
                        We're developing a range of projects, from retro console emulators to Arm learning tools and
                        Minecraft mods.
                    </p>
                    <div className="center">
                        <RoundButton text={"Discover all our projects"} link={"/" + "/projects"}/>
                    </div>
                </Section>
                <Section accented>
                    <Title>The Team</Title>
                    <Subtitle>The humans behind the computer.</Subtitle>
                    <div style={{
                        display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", margin: "30px 0"
                    }}>
                        {await getMembers().then(members => members.map(member => member.getTinyCard()))}
                    </div>
                </Section>
                <Section>
                    <Title>Developer Collective</Title>
                    <Subtitle>Create. Share. Enjoy.</Subtitle>
                    <p>
                        Dwight Studio is a developer collective composed of computer science students, friends,
                        who collaborate to offer free, open source software.
                    </p>
                    <Center>
                        <RoundButton text={"Learn more about us"} link={"/" + "/about-us"}/>
                    </Center>
                </Section>
            </PageContent>
            <Footer/>
        </>)
}