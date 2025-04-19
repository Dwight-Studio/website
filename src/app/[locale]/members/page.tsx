import React from "react";
import Header from "@/elem/header/header";
import {PageContent, Section} from "@/elem/base";
import "./members.css"
import Footer from "@/elem/footer/footer";
import {getMembers} from "@/data/member";
import {Metadata} from "next";

export default async function MembersPage() {
    return (<>
        <Header/>
        <PageContent>
            <Section large>
                <div className="members">
                    {await getMembers().then(members => members.map(member => member.getLargeCard()))}
                </div>
            </Section>
        </PageContent>
        <Footer/>
    </>)
}

export async function generateMetadata({params}: {params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params

    return {
        title: "Members",
    }
}