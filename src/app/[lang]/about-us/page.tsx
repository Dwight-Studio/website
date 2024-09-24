import {FaDiscord} from "react-icons/fa";
import React from "react";
import Header from "@/lib/elements/header/header";
import {AccentedSection, Center, PageContent, Section, Subtitle, Title} from "@/lib/elements/base";
import RoundButton from "@/lib/elements/buttons/round-button";

export default function AboutUsPage({params: {lang}}: { params: { lang: string } }) {
    return (
        <>
            <Header lang={lang}/>
            <PageContent>
                <Section>
                    <Title>Developer Collective</Title>
                    <Subtitle>Create. Share. Enjoy.</Subtitle>
                    <p>
                        Dwight Studio is a developer collective composed of computer science students, friends,
                        who collaborate to offer free, open source software. It was created back in 2019 as structure to
                        host our personal projects, and promote our work.
                    </p>
                    <p>
                        The collective is currently managed by GamerMine, Yinx & Deleranax as specified in the Dwight
                        Studio's articles of association. If you need more information (or want to say hello), please
                        join the official Discord server.
                    </p>
                    <Center>
                        <RoundButton leftGraphic={<FaDiscord/>} text="Dwight Studo's Hub"
                                     link="https://discord.gg/Eqake7q"/>
                    </Center>
                </Section>
                <AccentedSection>
                    <Title>Our values</Title>
                    <br/>
                    <Subtitle>Open Source & Free</Subtitle>
                    <p>
                        We believe that software and knowledge should be free and accessible to everyone. All our
                        current and future projects as a collective will be free, and open source whenever possible.
                    </p>
                    <br/>
                    <Subtitle>Quality & Accessibility</Subtitle>
                    <p>
                        Our projects aim to be functional, useful and fun. To ensure that they fulfil their mission, we
                        try to impose a high level of quality on all our creations. Accessibility is an important aspect
                        of any project, and we are always open to suggestions on how we can improve in this area.
                    </p>
                    <br/>
                    <Subtitle>Human & Inclusive</Subtitle>
                    <p>
                        Dwight Studio is meant to be a safe place where you can express yourself, share your passion for
                        development, knowledge or opportunities.
                    </p>
                </AccentedSection>
            </PageContent>
        </>
    )
}