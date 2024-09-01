import {Project, ProjectFlag} from "@/lib/data/project";
import GamerMine from "@/lib/data/members/gamermine";
import {Contributor} from "@/lib/data/member";
import "./demug.css"
import {AccentedSection, Subtitle, Title} from "../../elements/base";

export default function DeMuG() {
    return new Project(
        "https://static.dwightstudio.fr/demug/LOGO.png",
        "https://static.dwightstudio.fr/demug/SPLASH_BACKGROUND.svg",
        "/medias/demug/video.webm",
        "DeMuG",
        "Cross platform GameBoy emulator written in C++",
        ProjectFlag.PREVIEW,
        [new Contributor(GamerMine(), "Fullstack developer")],
        "Gamermine/DeMuG",
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