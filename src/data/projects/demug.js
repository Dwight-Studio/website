import {Project} from "../project";
import video from "../../medias/demug.webm"
import GamerMine from "../members/gamermine";
import {Contributor} from "../member";
import "./demug.css"
import {AccentedSection, Subtitle, Title} from "../../elements/base";

export default function DeMuG() {
    return new Project(
        "https://static.dwightstudio.fr/demug/LOGO.png",
        "https://static.dwightstudio.fr/demug/SPLASH_BACKGROUND.svg",
        video,
        "DeMuG",
        "Cross platform GameBoy emulator written in C++",
        "preview",
        [new Contributor(GamerMine(), "Fullstack developer")],
        "GamerMine/DeMuG",
        [],
        (
            <div>
                <AccentedSection>
                    <Title>A Cross platform GameBoy emulator written in C++</Title>
                    <Subtitle>DeMug is a GameBoy emulator, allowing you to play your favorite GameBoy games on all
                        platforms.</Subtitle>
                </AccentedSection>
            </div>
        )
    );
}