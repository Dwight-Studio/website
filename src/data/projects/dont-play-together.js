import {Project} from "../project";
import logo from "../../medias/dpt-logo.png"
import video from "../../medias/dpt.mp4"
import banner from "../../medias/dpt-banner.jpeg"
import GamerMine from "../members/gamermine";
import Deleranax from "../members/deleranax";
import Yinx from "../members/yinx";
import {Contributor} from "../member";
import editor from "../../medias/index_editor_DPT.jpg";
import save from "../../medias/index_save_DPT.jpg";
import play from "../../medias/index_play_DPT.jpg";
import RoundButton from "../../elements/buttons/round-button";
import "./dont-play-together.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDebian, faGithub, faWindows} from "@fortawesome/free-brands-svg-icons";

export default function DontPlayTogether() {
    return new Project(
        logo,
        banner,
        video,
        "Don't Play Together",
        "Anti-collaborative Game",
        true,
        [new Contributor(GamerMine(), "Fullstack developer"), new Contributor(Yinx(), "Fullstack developer"), new Contributor(Deleranax(), "Fullstack developer")],
        <div>
            <div className="title">Download</div>
            <div className="buttons">
                <RoundButton leftGraphic={<FontAwesomeIcon icon={faDebian}/>} text="Debian"
                             link="https://github.com/Dwight-Studio/DPT-Client/releases/latest/download/DPT-Debian-based.deb"/>
                <RoundButton leftGraphic={<FontAwesomeIcon icon={faWindows}/>} text="Windows"
                             link="https://github.com/Dwight-Studio/DPT-Client/releases/latest/download/DPT-Windows.exe"/>
            </div>
            <div className="title">Source Code</div>
            <div className="buttons">
                <RoundButton leftGraphic={<FontAwesomeIcon icon={faGithub}/>} text="GitHub"
                             link="https://github.com/Dwight-Studio/DPT-Client/"/>
            </div>
        </div>,
        <div>
            <div className="accented-section">
                <h1>Discover Don't Play Together</h1>
                <p>Don't Play Together is a vote-based interactive game in which you have to complete various platform
                    level while tackling the obstacles that other players put in your way. It's free, open-source and
                    made using the Pygame library on Python. The game was developed in 2.5 months, back in 2020.</p>
            </div>
            <div className="section">
                <img className="image" src={editor} alt="DPT Editor"/>
                <h1>Create your own levels!</h1>
                <p>With our built-in editor, you can create an infinite number of custom levels!</p>
            </div>
            <div className="accented-section">
                <img className="image" src={save} alt="DPT Editor saving"/>
                <h1>Save your creations!</h1>
                <p>Once you've edited your level, you can save it using the shortcut CTRL+S, so you can play it again
                    and again, or edit it over and over again...</p>
            </div>
            <div className="section">
                <img className="image" src={play} alt="DPT Level playing"/>
                <h1>Play now!</h1>
                <p>The rules of the game are simple: get to the flag at the end of the level before the set time without
                    dying. However, players can vote between 2 choices to prevent you from winning the game so quickly.
                    You only have 2 life points, so be careful! </p>
                <p>The game is limitless: you can create your own addons to add content to the game! You can also create
                    your own levels with ease, thanks to the easy-to-use level editor! </p>
                <p>Please note that the game is still in development, so bugs and crashes are to be expected! If this
                    happens, please let us know on the Dwight Studio Discord.</p>
                <center><RoundButton text="Download" link="#header-card"/></center>
            </div>
        </div>
    )
}