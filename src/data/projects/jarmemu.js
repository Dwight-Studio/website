import {Project} from "../project";
import logo from "../../medias/jarmemu-text.svg"
import video from "../../medias/jarmemu-video.webm"
import banner from "../../medias/jarmemu-banner.png"
import Deleranax from "../members/deleranax";
import Yinx from "../members/yinx";
import {Contributor} from "../member";

export default function JArmEmu() {
    return new Project(
        logo,
        banner,
        video,
        "JArmEmu",
        "Simple ARMv7 simulator written in Java, intended for educational purpose",
        false,
        [new Contributor(Deleranax(), "UX/UI designer"), new Contributor(Yinx(), "Backend developer")],
        <div/>,
        <div>
            <div className="section">
                <h1>Discover </h1>
            </div>
        </div>
    )
}