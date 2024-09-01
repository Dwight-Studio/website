import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALES = ['en', 'fr']

// Source: https://nbellocam.dev/blog/next-middleware-i18n
function getBrowserLocale(request : NextRequest) : string | undefined {
    return request.headers
        .get("accept-language")
        ?.split(",")
        .map((i) => i.split(";"))
        ?.reduce(
            (ac: { code: string; priority: string }[], lang) => [
                ...ac,
                { code: lang[0], priority: lang[1] },
            ],
            []
        )
        ?.sort((a, b) => (a.priority > b.priority ? -1 : 1))
        ?.find((i) => LOCALES.includes(i.code.substring(0, 2)))
        ?.code?.substring(0, 2);
}

export function middleware(request : NextRequest) {
    console.log("HEY")

    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = LOCALES.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getBrowserLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}