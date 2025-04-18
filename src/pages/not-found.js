import Header from "../elements/header/header";
import React from "react";
import "./not-found.css"
import {Page, PageContent} from "../elements/base";

export default function NotFound() {
    return (
        <Page title="Error">

            <Header/>

            <PageContent>
                <div className="notfound-wrapper">
                    <div className="error-title">Nothing's here!</div>
                    <div className="error-subtitle">Error 404: Not Found</div>
                </div>
            </PageContent>
        </Page>
    )
}