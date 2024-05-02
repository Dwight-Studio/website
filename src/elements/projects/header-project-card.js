import "./header-project-card.css"
import {Octokit} from "octokit";
import {useQuery} from "react-query";
import RoundButton from "../buttons/round-button";
import {SiArchlinux, SiChocolatey, SiDebian, SiFedora, SiFlathub} from "react-icons/si";
import {FaFileArchive, FaGithub, FaWindows} from "react-icons/fa";
import {FaDebian} from "react-icons/fa6";
import {PuffLoader} from "react-spinners";

function fetchAssets(project) {
    const octokit = new Octokit();
    return octokit.request("GET /repos/" + project.githubIdentifier + "/releases/latest")
        .then(response => response.data.id)
        .then(assetsID => octokit.request("GET /repos/" + project.githubIdentifier + "/releases/{assetsURL}/assets", {assetsURL: assetsID}))
}

function Downloads(props) {
    const {data: response, isLoading, isError} = useQuery('data', () => fetchAssets(props.project))

    function Repositories() {
        if (props.project.repositories.length > 0) {
            return [
                <div className="title">Install</div>,
                <div className="buttons">
                    {
                        props.project.repositories.map(url => {
                            const link = url.toLowerCase();

                            if (link.includes("chocolatey")) {
                                return (<RoundButton leftGraphic={<SiChocolatey/>} text="Chocolatey"
                                                     link={link}/>)
                            } else if (link.includes("flathub")) {
                                return (<RoundButton leftGraphic={<SiFlathub/>} text="FlatPak"
                                                     link={link}/>)
                            } else if (link.includes("copr")) {
                                return (<RoundButton leftGraphic={<SiFedora/>} text="Fedora"
                                                     link={link}/>)
                            } else if (link.includes("aur")) {
                                return (<RoundButton leftGraphic={<SiArchlinux/>} text="ArchLinux"
                                                     link={link}/>)
                            } else if (link.includes("apt")) {
                                return (<RoundButton leftGraphic={<SiDebian/>} text="Debian"
                                                     link={link}/>)
                            }
                        })
                    }
                </div>
            ]
        }
    }

    function Files() {
        if (response.data.length > 0) {
            return [
                <div className="title">Download</div>,
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
                            }
                        })
                    }
                </div>
            ]
        }
    }

    if (isLoading) {
        return (
            <div className="downloads">
                <PuffLoader color="#ffffff"/>
            </div>
        )
    } else {
        if (isError) {
            return (
                <div className="downloads">
                    <div className="title">Error :(</div>
                </div>
            )
        } else {
            return (
                <div className="downloads">
                    <Repositories/>
                    <Files/>
                    <div className="title">Source Code</div>
                    <div className="buttons">
                        <RoundButton leftGraphic={<FaGithub/>} text="GitHub"
                                     link={"https://github.com/" + props.project.githubIdentifier + "/"}/>
                    </div>
                </div>
            )
        }
    }
}

export default function HeaderProjectCard(props) {
    return (
        <div id="header-card" className="header-project-card">
            <Downloads project={props.project}/>
            <div className="contributors">
                <div className="title">Contributors</div>
                {props.project.getContributorCards()}
            </div>
        </div>
    )
}