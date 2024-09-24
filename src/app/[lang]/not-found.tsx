import React from "react";
import Header from "@/lib/elements/header/header";
import {PageContent} from "@/lib/elements/base";

export default function NotFound() {
    return (
        <>
            <Header lang={"en"}/>
            <PageContent>
                <div className="notfound-wrapper">
                    <div className="error-title">Nothing's here!</div>
                    <div className="error-subtitle">Error 404: Not Found</div>
                </div>
            </PageContent>
        </>
    )
}