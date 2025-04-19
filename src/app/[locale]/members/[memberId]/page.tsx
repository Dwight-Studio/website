import React from "react";
import Header from "@/elem/header/header";
import {PageContent, Section} from "@/elem/base";
import {HeaderMemberCard} from "@/elem/members/header-member-card";
import {notFound} from "next/navigation";
import {Metadata} from "next";
import Footer from "@/elem/footer/footer";
import {getTranslations} from "next-intl/server";
import {DynamicContent} from "@/elem/dynamic-content";
import {getMember} from "@/data/member";

export default async function MemberPage({params}: {params: Promise<{ memberId: string }> }) {
    const { memberId } = await params
    let member = await getMember(memberId);

    if (member) {
        return (<>
                <Header/>
                <PageContent>
                    <Section>
                        <HeaderMemberCard member={member}/>
                    </Section>
                    <DynamicContent xmlData={member.pageContent} />
                </PageContent>
                <Footer/>
            </>)
    } else {
        return notFound();
    }
}

export async function generateMetadata({params}: {params: Promise<{ locale: string, memberId: string }> }): Promise<Metadata> {
    const { locale, memberId } = await params
    const member = await getMember(memberId);

    if (member) {
        let t = await getTranslations({locale, namespace: member.getTKey()})

        return {
            title: member.displayName, description: t("short_description"),
        }
    } else {
        return {}
    }
}