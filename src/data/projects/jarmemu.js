import {Project} from "../project";
import video from "../../medias/jarmemu-video.webm"
import banner from "../../medias/jarmemu-banner.png"
import Deleranax from "../members/deleranax";
import Yinx from "../members/yinx";
import {Contributor} from "../member";
import RoundButton from "../../elements/buttons/round-button";
import {Octokit} from "octokit";
import {Suspense} from "react";
import {PuffLoader} from "react-spinners";
import {FaFedora, FaFileArchive, FaGithub, FaWindows} from "react-icons/fa";
import {FaDebian} from "react-icons/fa6";
import {SiArchlinux, SiFlathub} from "react-icons/si";
import {useQuery} from "react-query";
import "./jarmemu.css"
import {TbCodeAsterix, TbWaveSawTool} from "react-icons/tb";
import {PiHandsClappingFill} from "react-icons/pi";
import {BsFillMenuButtonWideFill} from "react-icons/bs";
import {MdMemory} from "react-icons/md";
import top from "../../medias/jarmemu-top.png"
import bottom from "../../medias/jarmemu-bottom.png"

async function fetchAssets() {
    const octokit = new Octokit({
        auth: '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'
    })

    const assetsID = await octokit.request('GET /repos/Dwight-Studio/JArmEmu/releases/latest')
        .then(response => response.data.id)

    return await octokit.request('GET /repos/Dwight-Studio/JArmEmu/releases/{assetsURL}/assets', {assetsURL: assetsID})
}

function Download() {
    const {data: response, isLoading, isError} = useQuery('data', fetchAssets)

    if (!isLoading) {
        if (isError) {

        } else {
            return [
                <div className="title">Install</div>,
                <div className="buttons">
                    <RoundButton leftGraphic={<SiFlathub/>} text="FlatPak"
                                 link="https://flathub.org/fr/apps/fr.dwightstudio.JArmEmu"/>
                    <RoundButton leftGraphic={<SiArchlinux/>} text="ArchLinux"
                                 link="https://aur.archlinux.org/packages/jarmemu"/>
                </div>,
                <div className="title">Download</div>,
                <div className="buttons">
                    {response.data.map(asset => {
                        if (asset.name.endsWith(".exe")) {
                            return (
                                <RoundButton leftGraphic={<FaWindows/>} text="Windows"
                                             link={asset.browser_download_url}/>
                            )
                        } else if (asset.name.endsWith(".rpm")) {
                            return (
                                <RoundButton leftGraphic={<FaFedora/>} text="Fedora"
                                             link={asset.browser_download_url}/>
                            )
                        } else if (asset.name.endsWith(".portable.zip")) {
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
                    })}
                </div>,
                <div className="title">Source Code</div>,
                <div className="buttons">
                    <RoundButton leftGraphic={<FaGithub/>} text="GitHub"
                                 link="https://github.com/Dwight-Studio/JArmEmu/"/>
                </div>
            ]
        }
    }
}

export default function JArmEmu() {
    return new Project(
        "https://static.dwightstudio.fr/jarmemu/LOGO_TEXT.svg",
        banner,
        video,
        "JArmEmu",
        "Simple ARMv7 simulator written in Java, intended for educational purpose",
        false,
        [new Contributor(Deleranax(), "UX/UI designer"), new Contributor(Yinx(), "Backend developer")],
        <div>
            <Suspense fallback={<PuffLoader color="#ffffff"/>}>
                <Download/>
            </Suspense>
        </div>,
        <div>
            <div className="accented-section">
                <h1>A Simple ARMv7 simulator written in Java, intended for educational purpose</h1>
                <h2>JArmEmu is a simple simulator with a graphical interface that offers basic control and information
                    about a simulated ARMv7 architecture.</h2>
                <div className="features-grid">
                    <div className="card">
                        <TbWaveSawTool size={100}/>
                        <div className="title">Smart Interpreter</div>
                        <div className="description">Powered by an ARMv7 custom interpreter, with manual and automatic
                            breakpoint system
                        </div>
                    </div>
                    <div className="card">
                        <PiHandsClappingFill size={100}/>
                        <div className="title">User Friendly</div>
                        <div className="description">Designed for performance and ease of use, with extensive execution
                            details
                        </div>
                    </div>
                    <div className="card">
                        <BsFillMenuButtonWideFill size={100}/>
                        <div className="title">Modern Interface</div>
                        <div className="description">Features a modern customizable interface with high-contrast
                            coloring, following WCAG standards
                        </div>
                    </div>
                    <div className="card">
                        <TbCodeAsterix size={100}/>
                        <div className="title">Syntax Highlighting</div>
                        <div className="description">Includes a code highlighting system for better code
                            intelligibility
                        </div>
                    </div>
                    <div className="card">
                        <MdMemory size={100}/>
                        <div className="title">Memory Analysis</div>
                        <div className="description">Comes with a Memory and Stack viewer with value change highlighting
                        </div>
                    </div>
                    <div className="card" id="logo-card">
                        <div className="logo-wrapper">
                            <img src="https://static.dwightstudio.fr/jarmemu/LOGO_MONO.svg" alt="JArmEmu Icon" className="logo"/>
                            <img src="https://static.dwightstudio.fr/jarmemu/LOGO.svg" alt="JArmEmu Icon" className="logo-color"/>
                        </div>
                        <div className="title">Free and Open Source</div>
                        <div className="description">Made with <span className="heart">❤</span> in Open Source, as every
                            other project of Dwight Studio
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <img src={top} alt="JArmEmu Editor" className="image"/>
                <h1>Learn by doing</h1>
                <p>With JArmEmu, you can discover and learn the basics of ARMv7 Assembly by writing and testing your
                    code directly in the software. JArmEmu only features a portion of the available instructions. You
                    can consult the list of implemented instructions on GitHub.</p>
                <div className="center">
                    <RoundButton text="See instructions"
                                 link="https://github.com/Dwight-Studio/JArmEmu/blob/main/Instructions.md"/>
                    <RoundButton text="Download" link="#header-card"/>
                </div>
                <img src={bottom} alt="JArmEmu Editor" className="image"/>
            </div>
        </div>
    )
}