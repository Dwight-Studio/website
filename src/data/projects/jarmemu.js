import {Project} from "../project";
import video from "../../medias/jarmemu-video.webm"
import Deleranax from "../members/deleranax";
import Yinx from "../members/yinx";
import {Contributor} from "../member";
import RoundButton from "../../elements/buttons/round-button";
import "./jarmemu.css"
import {TbCodeAsterix, TbWaveSawTool} from "react-icons/tb";
import {PiHandsClappingFill} from "react-icons/pi";
import {BsFillMenuButtonWideFill} from "react-icons/bs";
import {MdMemory} from "react-icons/md";
import top from "../../medias/jarmemu-top.png"
import bottom from "../../medias/jarmemu-bottom.png"

export default function JArmEmu() {
    return new Project(
        "https://static.dwightstudio.fr/jarmemu/LOGO_TEXT.svg",
        "https://static.dwightstudio.fr/jarmemu/SPLASH_BACKGROUND.svg",
        video,
        "JArmEmu",
        "Simple ARMv7 simulator written in Java, intended for educational purpose",
        false,
        [new Contributor(Deleranax(), "UX/UI designer"), new Contributor(Yinx(), "Backend developer")],
        "Dwight-Studio/JArmEmu",
        [
            "https://community.chocolatey.org/packages/fr.dwightstudio.JArmEmu/",
            "https://flathub.org/fr/apps/fr.dwightstudio.JArmEmu",
            "https://copr.fedorainfracloud.org/coprs/dwight-studio/JArmEmu/",
            "https://aur.archlinux.org/packages/jarmemu"
        ],
        (
            <div>
                <div className="accented-section">
                    <h1>A Simple ARMv7 simulator written in Java, intended for educational purpose</h1>
                    <h2>JArmEmu is a simple simulator with a graphical interface that offers basic control and
                        information
                        about a simulated ARMv7 architecture.</h2>
                    <div className="features-grid">
                        <div className="card">
                            <TbWaveSawTool size={100}/>
                            <div className="title">Smart Interpreter</div>
                            <div className="description">Powered by an ARMv7 custom interpreter, with manual and
                                automatic
                                breakpoint system
                            </div>
                        </div>
                        <div className="card">
                            <PiHandsClappingFill size={100}/>
                            <div className="title">User Friendly</div>
                            <div className="description">Designed for performance and ease of use, with extensive
                                execution
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
                            <div className="description">Comes with a Memory and Stack viewer with value change
                                highlighting
                            </div>
                        </div>
                        <div className="card" id="logo-card">
                            <div className="logo-wrapper">
                                <img src="https://static.dwightstudio.fr/jarmemu/LOGO_MONO.svg" alt="JArmEmu Icon"
                                     className="logo"/>
                                <img src="https://static.dwightstudio.fr/jarmemu/LOGO.svg" alt="JArmEmu Icon"
                                     className="logo-color"/>
                            </div>
                            <div className="title">Free and Open Source</div>
                            <div className="description">Made with <span className="heart">❤</span> in Open Source, as
                                every
                                other project of Dwight Studio
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <img src={top} alt="JArmEmu Editor" className="image"/>
                    <h1>Learn by doing</h1>
                    <p>With JArmEmu, you can discover and learn the basics of ARMv7 Assembly by writing and testing your
                        code directly in the software. JArmEmu only features a portion of the available instructions.
                        You
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
    )
}