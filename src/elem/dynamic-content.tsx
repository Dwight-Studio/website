import * as fa6 from "react-icons/fa6"
import * as pi from "react-icons/pi"
import * as md from "react-icons/md"

import {Center, Justify, Section, Subtitle, Title} from "@/elem/base";
import {useTranslations} from "next-intl";
import {XMLParser} from "fast-xml-parser";
import {FeatureIconCard, FeatureImageCard} from "@/elem/grids/features-grid";
import {HorizontalGrid, VerticalGrid} from "@/elem/grids/grid";

export function DynamicContent({xmlData}: { xmlData: string }) {
    try {
        let unpairedTags = ["br", "FeaturesImageCard"]

        unpairedTags.push(...Object.keys(fa6))
        unpairedTags.push(...Object.keys(pi))
        unpairedTags.push(...Object.keys(md))

        const xml: any[] = new XMLParser({
            preserveOrder: true,
            ignoreAttributes: false,
            allowBooleanAttributes: true,
            parseAttributeValue: true,
            attributeNamePrefix: "",
            alwaysCreateTextNode: true,
            processEntities: true,
            htmlEntities: true,
            unpairedTags: unpairedTags,
            updateTag(tagName, jPath, attrs) {
                attrs["tag"] = tagName
                return "children"
            }
        }).parse(xmlData);

        for (let i in xml) {
            let node = xml[i];

            if (node[":@"].tag === "content") {
                return (<><ParseNode node={node}/></>)
            }
        }
    } catch (e) {
        console.error(e);
    }

    return (<Section><Center><Title>Error while loading page :(</Title></Center></Section>);
}

function ParseNode({node}: { node: any }) {
    const t = useTranslations()

    let children;

    if (node.children) {
        // @ts-ignore
        children = node.children.map(((child, index) => (<ParseNode key={index} node={child}/>)))
    } else if (node["#text"]) {
        return (<>{t(node["#text"])}</>)
    }

    let attrs = node[":@"];

    switch (attrs.tag) {
        // Root
        case "content":
            return (<>{children}</>)

        // Base HTML
        case "p":
            return (<p style={attrs.style}>{children}</p>)
        case "img":
            return (<img src={attrs.src} alt={t(attrs.alt)} style={attrs.style}></img>)
        case "b":
            return (<b style={attrs.style}>{children}</b>)
        case "br":
            return (<br/>)
        case "div":
            return (<div style={attrs.style}>{children}</div>)

        // Components
        case "Section":
            return (<Section accented={attrs.accented} large={attrs.large}>{children}</Section>)
        case "Title":
            return (<Title>{children}</Title>)
        case "Subtitle":
            return (<Subtitle>{children}</Subtitle>)
        case "Center":
            return (<Center>{children}</Center>)
        case "Justify":
            return (<Justify>{children}</Justify>)
        case "VerticalGrid":
            return (<VerticalGrid n={attrs.n}>{children}</VerticalGrid>)
        case "HorizontalGrid":
            return (<HorizontalGrid n={attrs.n}>{children}</HorizontalGrid>)
        case "FeatureCard":
            return (<FeatureIconCard title={attrs.title} description={attrs.description}>{children}</FeatureIconCard>)
        case "FeatureImageCard":
            return (<FeatureImageCard title={attrs.title} description={attrs.description} image={attrs.image}
                                      alt={attrs.alt} hoverImage={attrs.hoverImage}
                                      hoverAlt={attrs.hoverAlt} hoverBackground={attrs.hoverBackground} />)

        default:
            // @ts-ignore
            let Icon = fa6[attrs.tag]

            if (!(Icon)) {
                // @ts-ignore
                Icon = pi[attrs.tag]
            }

            if (!(Icon)) {
                // @ts-ignore
                Icon = md[attrs.tag]
            }

            if (Icon) {
                return <Icon size={attrs.size} color={attrs.color} style={attrs.style}/>
            } else {
                return (<div>{children}</div>)
            }
    }
}