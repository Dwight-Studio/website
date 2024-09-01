import "./header-project-card.css"
import {Octokit} from "octokit";
import RoundButton from "@/lib/elements/buttons/round-button";
import {SiArchlinux, SiChocolatey, SiDebian, SiFedora, SiFlathub} from "react-icons/si";
import {FaApple, FaFileArchive, FaGithub, FaWindows} from "react-icons/fa";
import {FaDebian} from "react-icons/fa6";
import {PuffLoader} from "react-spinners";
import {Project} from "@/lib/data/project";
import {OctokitResponse} from "@octokit/types";
import {Suspense} from "react";

function fetchAssets(project : Project) : {name: string; browser_download_url: string;}[] | null {
    const octokit = new Octokit();

    // @ts-ignore
    return octokit.request("GET /repos/" + project.githubIdentifier + "/releases/latest")
        .then(response => response.data.id, () => null)
        .then((assetsID : string) => {
            if (assetsID != null) return octokit.request("GET /repos/" + project.githubIdentifier + "/releases/{assetsURL}/assets", {assetsURL: assetsID})
            else return new Promise<OctokitResponse<any>>(() => null);
        })
        .then(response => response == null ? null : (response.data));
}

function Repositories({project} : {project: Project}) {
    if (project.repositories.length > 0) {
        return [
            <div className="title">Install</div>,
            <div className="buttons">
                {
                    project.repositories.map((url: string) => {
                        const link = url.toLowerCase();

                        if (link.includes("chocolatey")) {
                            return (<RoundButton leftGraphic={<SiChocolatey/>} text="Chocolatey"
                                                 link={url}/>)
                        } else if (link.includes("flathub")) {
                            return (<RoundButton leftGraphic={<SiFlathub/>} text="FlatPak"
                                                 link={url}/>)
                        } else if (link.includes("copr")) {
                            return (<RoundButton leftGraphic={<SiFedora/>} text="Fedora"
                                                 link={url}/>)
                        } else if (link.includes("aur")) {
                            return (<RoundButton leftGraphic={<SiArchlinux/>} text="ArchLinux"
                                                 link={url}/>)
                        } else if (link.includes("deb")) {
                            return (<RoundButton leftGraphic={<SiDebian/>} text="Debian"
                                                 link={url}/>)
                        }
                    })
                }
            </div>
        ]
    }
}

function FilesButtons({project} : {project: Project}) {
    let files = fetchAssets(project);

    if (files == null) {
        return <div>The files are temporarily unavailable, access them directly from GitHub</div>
    } else if (files.length > 0) {
        return (
            <div className="buttons">
                {
                    files.map((asset: {name: string; browser_download_url: string;}) => {
                        if (asset.name.endsWith(".exe")) {
                            return (
                                <RoundButton leftGraphic={<FaWindows/>} text="Windows"
                                             link={asset.browser_download_url}/>
                            )
                        } else if (asset.name.endsWith(".zip")) {
                            return (
                                <RoundButton leftGraphic={<FaFileArchive/>} text="Portable"
                                             link={asset.browser_download_url}/>
                            )
                        } else if (asset.name.endsWith(".deb")) {
                            return (
                                <RoundButton leftGraphic={<FaDebian/>} text="Debian"
                                             link={asset.browser_download_url}/>
                            )
                        } else if (asset.name.endsWith(".dmg")) {
                            return (
                                <RoundButton leftGraphic={<FaApple/>} text="Debian"
                                             link={asset.browser_download_url}/>
                            )
                        }
                    })
                }
            </div>
        )
    } else {
        return (
            <div>No file currently available for this project</div>
        )
    }
}

function Files({project} : {project: Project}) {

    return (
        <>
            <div className="title">Download</div>
            <Suspense fallback={<PuffLoader color="#ffffff"/>}>
                <FilesButtons project={project}  />
            </Suspense>
        </>
    )
}

export default function HeaderProjectCard({project} : {project: Project}) {
    return (
        <div id="header-card" className="header-project-card">
            <div className="downloads">
                <Repositories project={project}/>
                <Files project={project}/>
                <div className="title">Source Code</div>
                <div className="buttons">
                    <RoundButton leftGraphic={<FaGithub/>} text="GitHub"
                                 link={"https://github.com/" + project.githubIdentifier + "/"}/>
                </div>
            </div>
            <div className="contributors">
                <div className="title">Contributors</div>
                {project.getContributorCards()}
            </div>
        </div>
    )
}