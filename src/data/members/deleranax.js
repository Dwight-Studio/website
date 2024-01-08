import React from "react";
import {Member} from "../member";
import {FaJava} from "react-icons/fa";

export default function Deleranax() {
    return new Member(
        "https://static.dwightstudio.fr/dwightstudio/PERSONAL/Deleranax/LOGO.png",
        "#D8D8D8",
        "Deleranax",
        "Alexandre",
        "Leconte",
        "Student at INSA of Rennes",
        "Portal 2 fanatic, currently a student at the INSA Engineering School of Rennes, specializing" +
        " in cloud computing. My interests range from game modding to simulation software development. I've got a" +
        "soft spot for Java.",
        ["https://github.com/Deleranax", "https://www.youtube.com/@deleranax", "https://twitter.com/Deleranax"],
        <div>
            <div className="accented-section">
                <h1>Led by passion</h1>
                <p>
                    For me, coding is a hobby, a pastime that I practice with particular dedication. My projects cover a
                    wide range of subjects and technologies, as long as they're interesting and rewarding for me.
                </p>
                <p>
                    My past project include multiple modding experiences (essentially mods and plugin for Minecraft),
                    game development, experimentation with IA and ML (solving simple games like TicTacToe or Connect4),
                    graphical design (simulation of a Slime), software and tool development...
                </p>
            </div>
            <div className="section">
                <h1>Have you ever heard of Java? <FaJava/></h1>
                <p>
                    I was introduced to programming through the development of mods and plugins for Minecraft back in
                    2018. Since then, I've maintained a certain affection for Java, its power and portability. Some of
                    my projects are still on GitHub, but most of them are unmaintained (and not publicly available).
                </p>
            </div>
        </div>
    );
}