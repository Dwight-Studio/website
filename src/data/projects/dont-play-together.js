import {Project} from "../project";
import logo from "../../medias/dpt/logo.png"
import video from "../../medias/dpt/video.webm"
import banner from "../../medias/dpt/banner.jpeg"
import GamerMine from "../members/gamermine";
import Deleranax from "../members/deleranax";
import Yinx from "../members/yinx";
import {Contributor} from "../member";
import editor from "../../medias/dpt/editor.jpg";
import save from "../../medias/dpt/save.jpg";
import play from "../../medias/dpt/play.jpg";
import RoundButton from "../../elements/buttons/round-button";
import "./dont-play-together.css"
import {AccentedSection, Center, Image, Justified, Section, Title} from "../../elements/base";

export default function DontPlayTogether() {
    return new Project(
        logo,
        banner,
        video,
        "Don't Play Together",
        "Anti-collaborative Game",
        "outdated",
        [new Contributor(GamerMine(), "Fullstack developer"), new Contributor(Yinx(), "Fullstack developer"), new Contributor(Deleranax(), "Fullstack developer")],
        "Dwight-Studio/DPT-Client",
        [],
        (<div>
                <AccentedSection>
                    <Title>Discover Don't Play Together</Title>
                    <Justified>
                        <p>Don't Play Together is a vote-based interactive game in which you have to complete various
                            platform
                            level while tackling the obstacles that other players put in your way. It's free,
                            open-source
                            and
                            made using the Pygame library on Python. The game was developed in 2.5 months, back in
                            2020.</p>
                    </Justified>
                </AccentedSection>
                <Section>
                    <Image src={editor} alt="DPT Editor"/>
                    <Title>Create your own levels!</Title>
                    <p>With our built-in editor, you can create an infinite number of custom levels!</p>
                </Section>
                <AccentedSection>
                    <Image src={save} alt="DPT Editor saving"/>
                    <Title>Save your creations!</Title>
                    <p>Once you've edited your level, you can save it using the shortcut CTRL+S, so you can play it
                        again
                        and again, or edit it over and over again...</p>
                </AccentedSection>
                <Section>
                    <Image src={play} alt="DPT Level playing"/>
                    <Title>Play now!</Title>
                    <Justified>
                        <p>The rules of the game are simple: get to the flag at the end of the level before the set time
                            without
                            dying. However, players can vote between 2 choices to prevent you from winning the game so
                            quickly.
                            You only have 2 life points, so be careful! </p>
                        <p>The game is limitless: you can create your own addons to add content to the game! You can also
                            create
                            your own levels with ease, thanks to the easy-to-use level editor! </p>
                        <p>Please note that the game is still in development, so bugs and crashes are to be expected! If
                            this
                            happens, please let us know on the Dwight Studio Discord.</p>
                    </Justified>
                    <Center>
                        <RoundButton text="Download" link="#header-card"/>
                    </Center>
                </Section>
            </div>
        )
    )
}