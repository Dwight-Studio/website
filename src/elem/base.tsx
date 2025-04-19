import "./base.css"
import React from "react";

export function PageContent({children}: { children: React.ReactNode }) {
    return (
        <div className="content-wrapper">
            {children}
        </div>
    )
}

export function Section({children, accented, large}: {
    children: React.ReactNode,
    accented?: boolean,
    large?: boolean
}) {
    return (
        <div className={(large ? "large-" : "") + (accented ? "accented-" : "") + "section"}>
            {children}
        </div>
    )
}

export function Title({children}: { children: React.ReactNode }) {
    return (
        <div className="title">{children}</div>
    )
}

export function Subtitle({children}: { children: React.ReactNode }) {
    return (
        <div className="subtitle">{children}</div>
    )
}

export function Justify({children}: { children: React.ReactNode }) {
    return (
        <div className="justify">{children}</div>
    )
}

export function Center({children}: { children: React.ReactNode }) {
    return (
        <div className="center">{children}</div>
    )
}