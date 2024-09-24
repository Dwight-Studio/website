import Header from "@/lib/elements/header/header";
import React from "react";
import TitleHeader from "@/lib/elements/header/title-header";
import "./project.css"
import {FaCode, FaExclamationTriangle} from "react-icons/fa";
import {PageContent, Section} from "@/lib/elements/base";
import {getAllProjects, getProject, Project, ProjectFlag} from "@/lib/data/project";
import {Metadata} from "next";
import {notFound} from "next/navigation";

export default function ProjectPage({params: {lang, project}} : {params: {lang: string, project: string}}) {
    let flag;
    let projectInstance = getProject(project);

    if (projectInstance) {

        switch (projectInstance.flag) {
            case ProjectFlag.OUTDATED:
                flag = (
                    <div className="flag-message outdated">
                        <FaExclamationTriangle/>
                        <div>
                            This project is outdated and unlikely to be updated again. It may not work as expected or
                            may contain out-of-date information.
                        </div>
                    </div>
                )
                break;

            case ProjectFlag.PREVIEW:
                flag = (
                    <div className="flag-message preview">
                        <FaCode/>
                        <div>
                            This project is a preview of a software under development. It should be used with caution as
                            it may be unstable.
                        </div>
                    </div>
                )
                break;

            default:
                flag = (
                    <div/>
                )
        }

        return (
            <>
                <TitleHeader logo={projectInstance.logo} background={projectInstance.titleBackground}/>
                <Header lang={lang}/>
                <PageContent>
                    <div>
                        {flag}
                    </div>

                    {projectInstance.pageContent}

                    <Section>
                        {projectInstance.getFooterCard(lang)}
                    </Section>
                </PageContent>
            </>
        )
    } else {
        return notFound();
    }
}

export async function generateMetadata(
    {
        params: {
            lang,
            project
        }
    } : {
        params: {
            lang: string,
            project: string
        }
    }) : Promise<Metadata> {

    let projectInstance = getProject(project);

    if (projectInstance) {
        return {
            title: projectInstance.projectName,
            description: projectInstance.shortDescription
        }
    } else {
        return {}
    }
}

export async function generateStaticParams() {
    return getAllProjects().map(project => ({project: project.getURLFriendlyName()}));
}