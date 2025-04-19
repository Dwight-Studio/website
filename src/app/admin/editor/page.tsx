"use client"

import NewWindow from 'react-new-window'
import {PageContent} from "@/elem/base";
import {DynamicContent} from "@/elem/dynamic-content";
import {useState} from "react";
import {NextIntlClientProvider} from "next-intl";

export default function EditorPage() {
    const [xml, setXml] = useState("<content></content>")

    return (<>
        <PageContent>
            <textarea defaultValue={"<content></content>"} onChange={(event) => setXml(event.target.value)}/>
        </PageContent>
        <NewWindow title={"Preview"} onBlock={() => alert("Enable Popup to see preview.")}>
            <NextIntlClientProvider locale="en">
                <PageContent>
                    <DynamicContent xmlData={xml}/>
                </PageContent>
            </NextIntlClientProvider>
        </NewWindow>
    </>)
}