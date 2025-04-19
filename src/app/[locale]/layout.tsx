import type {Metadata, Viewport} from 'next'
import React from "react";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {routing} from "@/i18n/routing";
import {setRequestLocale} from "next-intl/server";

export const metadata: Metadata = {
    title: {
        template: "%s - Dwight Studio",
        default: "Dwight Studio: Developer Collective"
    },
    description: "Dwight Studio is a developer collective aimed to offer free, open source software.",
    icons: {
        icon: "/favicon.svg",
        apple: "https://static.dwightstudio.fr/dwightstudio/LOGO_RED.svg"
    },
    keywords: ["Dwight Studio", "Development", "Collective"],
    manifest: "/manifest.json"
}

export const viewport: Viewport = {
    themeColor: "#E51A1A",
    width: "device-width",
    initialScale: 1
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    let {locale} = await params;

    // Ensure that the incoming `locale` is valid
    if (!hasLocale(routing.locales, locale)) {
        locale = 'en'
    }

    // Enable static rendering
    setRequestLocale(locale);

    return (
        <html>
            <body>
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}