import React from "react";
import Header from "@/elem/header/header";
import {PageContent} from "@/elem/base";
import Footer from "@/elem/footer/footer";
import "./not-found.css"

export default function NotFound() {
    return (
        <>
            <Header/>
            <PageContent>
                <div className="notfound-wrapper">
                    <div className="error-title">Nothing's here!</div>
                    <div className="error-subtitle">Error 404: Not Found</div>
                </div>
            </PageContent>
            <Footer/>
        </>
    )
}