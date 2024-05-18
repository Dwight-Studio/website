import "./header-project-card.css"
import {Octokit} from "octokit";
import {useQuery} from "react-query";
import RoundButton from "../buttons/round-button";
import {SiArchlinux, SiChocolatey, SiDebian, SiFedora, SiFlathub} from "react-icons/si";
import {FaApple, FaFileArchive, FaGithub, FaWindows} from "react-icons/fa";
import {FaDebian} from "react-icons/fa6";
import {PuffLoader} from "react-spinners";

function fetchAssets(project) {
    const octokit = new Octokit();

    return octokit.request("GET /repos/" + project.githubIdentifier + "/releases/latest")
        .then(response => response.data.id, () => null)
        .then(assetsID => {
            if (assetsID != null) return octokit.request("GET /repos/" + project.githubIdentifier + "/releases/{assetsURL}/assets", {assetsURL: assetsID})
            else return {data: {}};
        })
}

function Repositories(props) {
    if (props.project.repositories.length > 0) {
        return [
            <div className="title">Install</div>,
            <div className="buttons">
                {
                    props.project.repositories.map(url => {
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

function Files(props) {
    const {
        data: response,
        isLoading,
        isError
    } = useQuery({
        queryKey: 'data',
        queryFn: () => fetchAssets(props.project),
        keepPreviousData: true
    })

    function FilesButtons(props) {
        if (props.data.length > 0) {
            return (
                <div className="buttons">
                    {
                        response.data.map(asset => {
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


    if (isLoading) {
        return [
            <div className="title">Download</div>,
            <PuffLoader color="#ffffff"/>
        ]
    } else {
        if (isError) {
            return (
                [
                    <div className="title">Download</div>,
                    <div>The files are temporarily unavailable, access them directly from GitHub</div>
                ]
            )
        } else {
            return [
                <div className="title">Download</div>,
                <FilesButtons data={response.data}/>
            ]
        }
    }
}

export default function HeaderProjectCard(props) {
    return (
        <div id="header-card" className="header-project-card">
            <div className="downloads">
                <Repositories project={props.project}/>
                <Files project={props.project}/>
                <div className="title">Source Code</div>
                <div className="buttons">
                    <RoundButton leftGraphic={<FaGithub/>} text="GitHub"
                                 link={"https://github.com/" + props.project.githubIdentifier + "/"}/>
                </div>
            </div>
            <div className="contributors">
                <div className="title">Contributors</div>
                {props.project.getContributorCards()}
            </div>
        </div>
    )
}