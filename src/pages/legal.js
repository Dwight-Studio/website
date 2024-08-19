import React from "react";
import Header from "../elements/header/header";
import {AccentedSection, Page, PageContent, Section, Subtitle, Title} from "../elements/base";

export default function Legal(props) {
    return (
        <Page title="Legal" description="Legal informations of Dwight Studio, the association.">

            <Header />

            <PageContent>
                <Section>
                    <Title>Legal information</Title>
                    <p>
                        Association <b>Dwight Studio</b><br/>
                        <i>Associations under the law of 1 July 1901</i><br/>
                        <br/>
                        <b>RNA number:</b> W502008910<br/>
                        <b>Purpose:</b> to promote and develop free and open source software<br/>
                        <b>Head office:</b> 4 rue de la Mairie 50310 Joganville<br/>
                        <b>Date of Declaration:</b> 30 March 2024<br/>
                        <b>Place of registration:</b> Cherbourg sub-prefecture<br/>
                        <b>Location:</b> Manche<br/>
                        <br/>
                        <b>Fields of activity:</b><br/>
                        information communication / internet networks<br/>
                        information communication / information and communication professionals<br/>
                    </p>
                    <p>
                        Dwight Studio is an association based in France, governed by the French law of July 1, 1901 and
                        the decree of August 16, 1901. Its aim is to promote and develop free and open source software
                        as an independent collective of developers.
                    </p>
                </Section>

                <AccentedSection>
                    <Subtitle>This site is hosted by <b>OVH SAS</b></Subtitle>
                    <p>
                        SAS with capital of €10,174,560<br/>
                        RCS Lille Métropole 424 761 419 00045<br/>
                        <br/>
                        <b>APE number:</b> 2620Z<br/>
                        <b>VAT number:</b> FR 22 424 761 419<br/>
                        <b>Registered office:</b> 2 rue Kellermann - 59100 Roubaix - France<br/>
                        <br/>
                        <b>OVH SAS</b> is a subsidiary of OVH Groupe SA, a company registered in the Lille Trade and
                        Companies
                        Register under number 537 407 926, with its registered office at 2, rue Kellermann, 59100
                        Roubaix.
                    </p>
                    <p>
                        This site does not use cookies and does not collect any personal data.
                    </p>
                    {/* Ajouter le certificat green web fondation */}
                </AccentedSection>
            </PageContent>
        </Page>
    )
}