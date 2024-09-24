import "./base.css"
import React from "react";

export function PageContent({children}: { children: React.ReactNode }) {
    return (
        <div className="content-wrapper">
            {children}
        </div>
    )
}

export function Section({children}: { children: React.ReactNode }) {
    return (
        <div className="section">
            {children}
        </div>
    )
}

export function AccentedSection({children}: { children: React.ReactNode }) {
    return (
        <div className="accented-section">
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

export function Justified({children}: { children: React.ReactNode }) {
    return (
        <div className="justified">{children}</div>
    )
}

export function Center({children}: { children: React.ReactNode }) {
    return (
        <div className="center">{children}</div>
    )
}

// @ts-ignore
export function Image({children, src, alt, align}: {
    children?: React.ReactNode,
    src: string,
    alt: string,
    align?: string
}) {
    if (children == null) {
        return (
            <div className="image-wrapper">
                <img src={src} alt={alt} className={"image" + (align != null ? " " + align : "")}/>
            </div>
        )
    }

    return (
        <div className="image-wrapper">
            <img src={src} alt={alt} className={"image" + (align != null ? " " + align : "")}/>
            <div className="cover">
                {children}
            </div>
        </div>
    )
}

export function CenteredCover({children}: { children: React.ReactNode }) {
    return (
        <div className="centered-cover">
            <Center>
                {children}
            </Center>
        </div>
    )
}

export function Video({children, src, align}: { children: React.ReactNode, src: string, align: string }) {

    if (children == null) {
        return (
            <div className="image-wrapper">
                <video src={src} autoPlay loop muted className={"image" + (align != null ? " " + align : "")}/>
            </div>
        )
    }
    return (
        <div className="image-wrapper">
            <video src={src} autoPlay loop muted className={"image" + (align != null ? " " + align : "")}/>
            <div className="cover">
                {children}
            </div>
        </div>
    )
}