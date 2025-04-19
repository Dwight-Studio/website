import "./features-grid.css"
import React from "react";

export function FeatureIconCard({children, title, description}: {
    children: React.ReactNode,
    title?: string,
    description?: string
}) {
    return (<div className="card">
        <div className="card-image-wrapper">{children}</div>
        {title ? <div className="title">{title}</div> : undefined}
        {description ? <div className="description">{description}</div> : undefined}
    </div>)
}

export function FeatureImageCard({image, alt, hoverImage, hoverAlt, hoverBackground, title, description}: {
    image: string,
    alt: string,
    hoverImage: string,
    hoverAlt: string,
    hoverBackground?: string,
    title?: string,
    description?: string
}) {
    return (<div className="card image-card" style={{"--card-background": "url('" + hoverBackground + "')"} as React.CSSProperties}>
        <div className="card-image-wrapper">
            <img src={image} alt={alt} className="image"/>
            <img src={hoverImage} alt={hoverAlt} className="hover-image"/>
        </div>
        {title ? <div className="title">{title}</div> : undefined}
        {description ? <div className="description">{description}</div> : undefined}
    </div>)
}