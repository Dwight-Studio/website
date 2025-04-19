import Header from "@/elem/header/header";
import React from "react";
import TitleHeader from "@/elem/header/title-header";
import "./project.css"
import {FaCode, FaExclamationTriangle} from "react-icons/fa";
import {PageContent, Section} from "@/elem/base";
import {getProject, ProjectFlag} from "@/data/project";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import Footer from "@/elem/footer/footer";
import {getTranslations} from "next-intl/server";
import {DynamicContent} from "@/elem/dynamic-content";

export default async function ProjectPage({params}: {params: Promise<{ projectId: string }> }) {
    const { projectId } = await params
    let flag;
    let project = await getProject(projectId);

    if (project) {
        switch (project.flag) {
            case ProjectFlag.OUTDATED:
                flag = (<div className="flag-message outdated">
                        <FaExclamationTriangle/>
                        <div>
                            This project is outdated and unlikely to be updated again. It may not work as expected or
                            may contain out-of-date information.
                        </div>
                    </div>)
                break;

            case ProjectFlag.PREVIEW:
                flag = (<div className="flag-message preview">
                        <FaCode/>
                        <div>
                            This project is a preview of a software under development. It should be used with caution as
                            it may be unstable.
                        </div>
                    </div>)
                break;

            default:
                flag = (<div/>)
        }

        return (<>
                <TitleHeader logo={project.logo} background={project.titleBackground}/>
                <Header/>
                <PageContent>
                    <div>
                        {flag}
                    </div>

                    <DynamicContent xmlData={project.pageContent} />

                    <Section>
                        {project.getFooterCard()}
                    </Section>
                </PageContent>
                <Footer/>
            </>)
    } else {
        return notFound();
    }
}

export async function generateMetadata({params}: {params: Promise<{ locale: string, projectId: string }> }): Promise<Metadata> {
    const { locale, projectId } = await params;

    let project = await getProject(projectId);

    if (project) {
        let t = await getTranslations({locale, namespace: project.getTKey()})

        return {
            title: project.displayName, description: t("short_description"),
        }
    } else {
        return {}
    }
}