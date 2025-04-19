import React from "react";
import Header from "@/elem/header/header";
import {PageContent, Section} from "@/elem/base";
import "./projects.css"
import Footer from "@/elem/footer/footer";
import {getProjects} from "@/data/project";
import {Metadata} from "next";

export default async function ProjectsPage() {
    return (<>
            <Header/>
            <PageContent>
                <Section>
                    <div className="projects">
                        {await getProjects().then(projects => projects.map(project => project.getLargeCard()))}
                    </div>
                </Section>
            </PageContent>
            <Footer/>
        </>)
}

export async function generateMetadata({params}: {params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params

    return {
        title: "Projects",
    }
}