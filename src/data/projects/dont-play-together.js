import {Project} from "../project";
import logo from "../../medias/dpt-logo.png"
import video from "../../medias/dpt.mp4"
import banner from "../../medias/dpt-banner.jpeg"
import GamerMine from "../members/gamermine";
import Deleranax from "../members/deleranax";
import Yinx from "../members/yinx";
import {Contributor} from "../member";

export default function DontPlayTogether() {
    return new Project(
        logo,
        banner,
        video,
        "Don't Play Together",
        "Anti-collaborative Game",
        "Don't Play Together is an asymmetric multiplayer game powered by Python (using the Pygame" +
        "Library) in which the main player has to complete a platform level with the penalties choose by the other" +
        "players.",
        true,
        [new Contributor(GamerMine(), "Fullstack developer"), new Contributor(Yinx(), "Fullstack developer"), new Contributor(Deleranax(), "Fullstack developer")],
        []
    )
}