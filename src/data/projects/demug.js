import {Project} from "../project";
import video from "../../medias/demug.webm"
import GamerMine from "../members/gamermine";
import {Contributor} from "../member";
import RoundButton from "../../elements/buttons/round-button";
import "./demug.css"

export default function DeMuG() {
    return new Project(
        "https://static.dwightstudio.fr/demug/LOGO.png",
        "https://static.dwightstudio.fr/demug/SPLASH_BACKGROUND.svg",
        video,
        "DeMuG",
        "Cross platform GameBoy emulator written in C++",
        false,
        [new Contributor(GamerMine(), "Fullstack developer")],
        "GamerMine/DeMuG",
        [],
        (
            <div>
                <div className="accented-section">
                    <h1>A Cross platform GameBoy emulator written in C++</h1>
                    <h2>DeMug is a GameBoy emulator, allowing you to play your favorite GameBoy games on all platforms.</h2>
                </div>
                <div className="section">
                    <h1>Use with precautions</h1>
                    <p>DeMuG is still in development, it can crash and do unexpected things. Currently, we do not
                    recommend playing seriously, as you can lose your game or be softlock.</p>
                    <div className="center">
                        <RoundButton text="Download" link="#header-card"/>
                    </div>
                </div>
            </div>
        )
    )
}