import Header from "../elements/header/header";
import React from "react";
import Footer from "../elements/footer/footer";
import {Helmet} from "react-helmet";
import RoundButton from "../elements/buttons/round-button";
import {BiHeart} from "react-icons/bi";

export default function AboutUs() {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>About Us - Dwight Studio: Developer Collective</title>
            </Helmet>

            <Header selected={"about-us"}/>

            <div className="content-wrapper">
                <div className="section">
                    <h1>Developer Collective</h1>
                    <h2>Create. Share. Enjoy.</h2>
                    <p>
                        Dwight Studio is a developer collective composed of computer science students, friends,
                        who collaborate to offer free, open source software. It was created back in 2019 as structure to
                        host our personal projects, and promote our work.
                    </p>
                    <p>
                        Dwight Studio is an association under French law, governed by the law of July 1, 1901 and the
                        decree of August 16, 1901. Its aim is to promote and develop free and open source software as
                        an independent collective of developers.
                    </p>
                </div>
                <div className="accented-section">
                    <h1>Discover us through our projects</h1>
                    <h2>The better way to learn to know us :)</h2>
                    <div className="center">
                        <RoundButton text="Our projects" link="/projects"/>
                    </div>
                </div>
                <div className="section">
                    <h1>Our values</h1>
                    <h2>Open Source, Free & Java <BiHeart/></h2>
                    <p>
                        We believe that software should be free and accessible to everyone. All our current and future
                        projects as a collective will be free, and open source wherever possible.
                    </p>
                </div>
            </div>

            <Footer/>
        </div>
    )
}