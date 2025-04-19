import React from "react";
import "./grid.css"

export function VerticalGrid({children, n}: {children: React.ReactNode, n?: number}) {
    return (<div className={"vertical-grid " + (n ? "n" : "dynamic")} style={(n ? {"--n": n} : {}) as React.CSSProperties}>{children}</div>)
}

export function HorizontalGrid({children, n}: {children: React.ReactNode, n?: number}) {
    return (<div className={"horizontal-grid " + (n ? "n" : "dynamic")} style={(n ? {"--n": n} : {}) as React.CSSProperties}>{children}</div>)
}