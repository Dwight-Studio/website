import type {Metadata, Viewport} from 'next'
import React from "react";
import "./global.css"
import Footer from "@/lib/elements/footer/footer";

export const metadata: Metadata = {
    title: {
        template: "%s - Dwight Studio: Developer Collective",
        default: "Dwight Studio: Developer Collective"
    },
    description: "Dwight Studio is a developer collective aimed to offer free, open source software.",
    icons: {
        icon: "/favicon.svg",
        apple: "https://static.dwightstudio.fr/dwightstudio/LOGO_RED.svg"
    },
    keywords: ["Dwight Studio", "Development", "Collective"],
    manifest: "%PUBLIC_URL%/manifest.json"
}

export const viewport: Viewport = {
    themeColor: "#E51A1A",
    width: "device-width",
    initialScale: 1
}

export async function generateStaticParams() {
    return [{lang: 'en'}, {lang: 'fr'}]
}

export default function RootLayout(
    {
        children,
        params
    }: {
        children: React.ReactNode
        params: {
            lang: string
        }
    }) {

    return (
        <html lang={params.lang}>
        <body>
        {children}
        <Footer/>
        </body>
        </html>
    )
}