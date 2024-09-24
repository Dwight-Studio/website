import React from "react";
import Header from "@/lib/elements/header/header";
import {PageContent, Section} from "@/lib/elements/base";
import {getAllProjects} from "@/lib/data/project";
import "./projects.css"

export default function Projects({params: {lang}}: { params: { lang: string } }) {
    return (
        <>
            <Header lang={lang}/>
            <PageContent>
                <Section>
                    <div className="projects">
                        {getAllProjects().map(project => project.getLargeCard(lang))}
                    </div>
                </Section>
            </PageContent>
        </>
    )
}

